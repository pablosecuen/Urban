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

export const updateStatusChauffeur = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("chauffeur").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontrón el chofer");
    }
    await db.collection("chauffeur").doc(id).update({ status: true });
    res.status(200).json({ message: "Chofer habilitado correctamente" });
  } catch (error) {
    console.error("Error al activar el chofer el chofer", error);
    res.status(400).json({ message: error.message });
  }
};

export const updateStatusDelivery = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("deliverys").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontrón el repartidor");
    }
    await db.collection("chauffeur").doc(id).update({ status: true });
    res.status(200).json({ message: "Repartidor habilitado correctamente" });
  } catch (error) {
    console.error("Error al activar el repartidor el chofer", error);
    res.status(400).json({ message: error.message });
  }
};