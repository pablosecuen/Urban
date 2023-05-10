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

    const tickets = snapshot.docs.slice(startIndex, endIndex).map(async (doc) => {
      const ticketData = doc.data();
      const passageSnapshot = await db.collection("passages").doc(ticketData.passageId).get();
      const passageData = passageSnapshot.data();

      return { id: doc.id, ...ticketData, passageInfo: passageData };
    });

    // Esperar a que todas las promesas de obtener los pasajes se resuelvan
    const resolvedTickets = await Promise.all(tickets);

    res.status(200).json({ tickets: resolvedTickets, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los viajes del usuario");
  }
};

export const getTicketById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("tickets").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Ticket no encontrado" });
    } else {
      const ticket = { id: doc.id, ...doc.data() };
      res.status(200).json(ticket);
    }
  } catch (error) {
    console.error("Error al obtener el ticket", error);
    res.status(500).json({ message: "Error al obtener el ticket" });
  }
};
