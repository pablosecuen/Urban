import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Chauffeur } from "../../schema/chauffeur";
import { query, where, collection, getDocs } from "firebase/firestore";

export const searchChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("chauffeur").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Chofer no encontrado" });
    } else {
      const chauffeur = doc.data() as Chauffeur;
      res.json(chauffeur);
    }
  } catch (error) {
    console.error("Error al obtener el chofer", error);
    res.status(500).json({ message: "Error al obtener el chofer" });
  }
};

export const allChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProperties = Object.keys(req.query);
    let query_ = query(collection(db, "chauffeur"));
    const additionalArgs = allProperties
      .filter((property) => !["page", "pageSize"].includes(property))
      .map((property) => {
        return where(property, "==", req.query[property]);
      });
    if (additionalArgs.length > 0) query_ = query(collection(db, "chauffeur"), ...additionalArgs);

    const chauffeurSnapshot = await getDocs(query_);

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(chauffeurSnapshot.docs.length / pageSize);

    const chauffeurs = chauffeurSnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ chauffeurs, totalPages });
  } catch (error) {
    console.error("Error al obtener los choferes", error);
    res.status(500).json({ message: "Error al obtener los choferes" });
  }
};

export const searchChauffeurByPatent = async (req: Request, res: Response): Promise<void> => {
  try {
    const patent: string = req.params.patent;
    const doc = await db.collection("chauffeur").where("vehicle.patent", "==", patent).get();

    if (doc.empty) {
      res.status(404).json({ message: `No se encontró ningún chofer con la patente ${patent}` });
    }
    const chauffeurData = doc.docs[0].data() as Chauffeur;
    res.json(chauffeurData);
  } catch (error) {
    console.error("Error al obtener el chofer", error);
    res.status(500).json({ message: "Error al obtener el chofer" });
  }
};
