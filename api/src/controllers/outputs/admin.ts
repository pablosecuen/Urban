import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const getAdminState = async (req: Request, res: Response): Promise<void> => {
  try {
    const doc = await db.collection("adminStatus").doc("BECMkRXkiNt1QmsQjjZT").get();
    if (!doc.exists) {
      res.status(404).json({ message: "AdminStatus no encontrado" });
    } else {
      const adminState = { id: doc.id, ...doc.data() };
      res.status(200).json(adminState);
    }
  } catch (error) {
    console.error("Error al obtener el adminState", error);
    res.status(500).json({ message: "Error al obtener el adminState" });
  }
};
