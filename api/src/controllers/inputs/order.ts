import { Request, Response } from "express";
import { db } from "../../connection/connection";
import Order from "../../schema/order";

export const newOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: Order = req.body;

    const docRef = await db.collection("orders").add(data);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al crear la orden", error);
    res.status(400).json({ messege: error.message });
  }
};

export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data: Order = req.body;

    const docRef = await db.collection("orders").doc(id).get();
    if (!docRef) {
      throw new Error("No se encontró la orden");
    }
    // Actualizar el usuario en Firestore
    await db.collection("orders").doc(id).update(data);
    res.status(201).json({ menssage: "Orden actualizada correctamente" });
  } catch (error) {
    console.error("Error al actualizar la orden", error);
    res.status(400).json({ messege: error.message });
  }
};
