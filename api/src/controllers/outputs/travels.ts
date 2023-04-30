import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Travel } from "../../schema/travels";

export const travelByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId; // obtiene el ID del usuario desde la solicitud

    // Realiza la consulta a la base de datos
    const snapshot = await db.collection("travels").where("userId", "==", userId).get();

    // Crea un array con todos los viajes encontrados

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(snapshot.docs.length / pageSize);

    const travels = snapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    // Envía la respuesta al cliente
    res.status(200).json({ travels, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los viajes del usuario");
  }
};

export const travelByChauffeur = async (req: Request, res: Response): Promise<void> => {
  try {
    const chauffeurId = req.params.chauffeurId; // obtiene el ID del chofer desde la solicitud

    // Realiza la consulta a la base de datos
    const snapshot = await db.collection("travels").where("chauffeurId", "==", chauffeurId).get();

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(snapshot.docs.length / pageSize);

    // Crea un array con todos los viajes encontrados
    const travels = snapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    // Envía la respuesta al cliente
    res.status(200).json({ travels, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los viajes del chofer");
  }
};
