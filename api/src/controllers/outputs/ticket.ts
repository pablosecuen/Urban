import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const getTicketByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;

    const snapshot = await db.collection("tickets").where("userId", "==", userId).get();

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(snapshot.docs.length / pageSize);

    const tickets = snapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    res.status(200).json({ tickets, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los viajes del usuario");
  }
};
