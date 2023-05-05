import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { AdminStatus } from "../../schema/adminStatus";

/**
 *  Controlador para adminStatus
 * @param changes[], array de estring con los valores a modificar, ["enableBusses", "enableCarPulling", "enableOrders"]
 * puede ser uno o 2 o todos
 */
export const updateAdminStatus = async (req: Request, res: Response) => {
  try {
    const dataRef = await db.collection("adminStatus").doc("BECMkRXkiNt1QmsQjjZT");
    const data = await dataRef.get();
    const changes: string[] = req.body.changes;

    const updateData = {};
    changes.forEach((change) => {
      updateData[change] = !data.get(change);
    });

    const docRef = await db
      .collection("adminStatus")
      .doc("BECMkRXkiNt1QmsQjjZT")
      .update({ ...updateData });
    const doc = await db.collection("adminStatus").doc("BECMkRXkiNt1QmsQjjZT").get();
    res.status(200).json(doc.data());
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el adminStatus", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};
