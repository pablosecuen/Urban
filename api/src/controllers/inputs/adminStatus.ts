import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { AdminStatus } from "../../schema/adminStatus";

/**
 *  Controlador para adminStatus
 *
 */
export const newAdminStatus = async (req: Request, res: Response) => {
  try {
    const data: AdminStatus = req.body;

    const snapshot = db.collection("adminStatus");
    if (snapshot) {
      throw new Error("Admin status ya ha sido creada");
    }
    const docRef = await db.collection("adminStatus").add(data);
    res.status(200).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el adminStatus", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};
