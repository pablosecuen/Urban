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
export const allPassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page = 1, pageSize = 5, ...filters } = req.query;

    const startIndex = (Number(page) - 1) * Number(pageSize);
    const endIndex = Number(page) * Number(pageSize);
    let passagesRef: firebase.firestore.Query<firebase.firestore.DocumentData> =
      db.collection("passages");

    if (Object.keys(filters).length > 0) {
      Object.keys(filters).forEach((key) => {
        passagesRef = passagesRef.where(key, "==", filters[key]);
      });
    }

    passagesRef = passagesRef.where("deleted", "==", false);

    const totalPassagesSnapshot = await passagesRef.get();
    const totalFilteredPassages = totalPassagesSnapshot.size;
    const totalPages = Math.ceil(totalFilteredPassages / Number(pageSize));

    const passagesSnapshot = await passagesRef.limit(endIndex).get();
    const passagesData = passagesSnapshot.docs
      .slice(startIndex, endIndex)
      .map((doc) => ({ id: doc.id, ...doc.data() }));

    res.json({ passages: passagesData, totalPages });
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const getPassageById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("passages").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Pasaje no encontrado" });
    } else {
      const passage = { id: doc.id, ...doc.data() };
      res.json(passage);
    }
  } catch (error) {
    console.error("Error al obtener el Pasaje", error);
    res.status(500).json({ message: "Error al obtener el Pasaje" });
  }
};
