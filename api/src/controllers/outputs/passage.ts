import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Passage } from "../../schema/passage";
import firebase from "firebase-admin";

/**
 * Funcion que traer los pasajes con opciones de filtrado por query
 * @query page: numero de pagina
 * @query pageSize: numero de pasajes por pagina
 * @query origin: origen del pasaje
 * @query destination: destino del pasaje
 *  @query departureDate: fecha de partida del pasaje
 * @query arrivalDate: fecha de llegada del pasaje
 *  */
export const getAllPassages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = 1, pageSize = 5, ...filters } = req.query;

    const startIndex = (Number(page) - 1) * Number(pageSize);
    const endIndex = Number(page) * Number(pageSize);
    let passagesRef: any = db.collection("passages");

    if (Object.keys(filters).length > 0) {
      Object.keys(filters).forEach((key) => {
        passagesRef = passagesRef.where(key, "==", filters[key]);
      });
    }

    passagesRef = passagesRef.where("deleted", "==", false);

    const totalPassagesSnapshot = await passagesRef.get();
    const totalFilteredPassages = totalPassagesSnapshot.size;
    const totalPages = Math.ceil(totalFilteredPassages / Number(pageSize));

    const passagesData = await Promise.all(
      totalPassagesSnapshot.docs.slice(startIndex, endIndex).map(async (doc) => {
        const passageData = { id: doc.id, ...doc.data() };

        // Obtener información de la compañía
        const companyId = passageData.companyId;
        const companyDoc = await db.collection("companies").doc(companyId).get();
        const companyData = companyDoc.exists ? companyDoc.data() : null;

        return { ...passageData, companyId, companyData: companyData };
      })
    );

    res.json({ passages: passagesData, totalPages });
  } catch (error) {
    console.error("Error al obtener los pasajes", error);
    res.status(400).json({ message: "Error al obtener los pasajes" });
  }
};

export const getPassageById = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.params.id;

  try {
    const passageDoc = await db.collection("passages").doc(id).get();

    if (!passageDoc.exists) {
      throw new Error("Pasaje no encontrado");
    }

    const passage = { id: passageDoc.id, ...passageDoc.data() };

    const passageSnapshot = passageDoc.data();

    const companyDoc = await db.collection("companies").doc(passageSnapshot.companyId).get();

    if (!companyDoc.exists) {
      throw new Error("Compañía no encontrada");
    }

    const companyData = companyDoc.data();

    const passageWithCompanyData = { ...passage, companyData };

    res.json(passageWithCompanyData);
  } catch (error) {
    console.error("Error al obtener el Pasaje", error);
    res.status(400).json({ message: "Error al obtener el Pasaje" });
  }
};

export const getLocations = async (req: Request, res: Response): Promise<void> => {
  try {
    const { destination } = req.query;

    const passagesRef: firebase.firestore.Query<firebase.firestore.DocumentData> =
      db.collection("passages");
    const passagesSnapshot = await passagesRef.get();
    const passagesData = passagesSnapshot.docs.map((doc) => ({ ...doc.data() }));

    const locationsSet = new Set<string>();

    passagesData.forEach((passage) => {
      const destinations = passage.destination;
      if (destinations.toLowerCase().includes((destination as string).toLowerCase())) {
        locationsSet.add(destinations);
      }
    });

    const locations = Array.from(locationsSet);
    if (locations.length === 0) {
      throw new Error("No se encontraron resultados...");
    }
    res.json({ locations: locations });
  } catch (error) {
    console.error("No se encontraron resultados...", error);
    res.status(400).json({ message: "No se encontraron resultados..." });
  }
};
