import { Request, Response } from "express";
import { db } from "../../connection/connection";
import firebase from "firebase/compat/app";
import { Order } from "../../schema/order";

/**
 * Controlador para crear una orden

 */
export const newOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData: Order = req.body;
    const dataFormated: Order = {
      ...orderData,
      status: true,
      order: "pending"
    }
    console.log(dataFormated.localId);

    const [userDoc, distributorDoc, localDoc] = await Promise.all([
      db.collection("users").doc(dataFormated.userId).get(),
      db.collection("distributors").doc(dataFormated.distributorId).get(),
      db.collection("locals").doc(dataFormated.localId).get(),
    ]);

    if (!userDoc.exists) {
      res.status(404).json({ message: "El usuario no existe" });
      return;
    }

    if (!distributorDoc.exists) {
      res.status(404).json({ message: "El distribuidor no existe" });
      return;
    }

    if (!localDoc.exists) {
      res.status(404).json({ message: "El local no existe" });
      return;
    }

    const docRef = await db.collection("orders").add(dataFormated);

    await Promise.all([
      db.collection("users").doc(orderData.userId).update({
        "history.orders": firebase.firestore.FieldValue.arrayUnion(docRef.id),
      }),
      db.collection("distributors").doc(orderData.distributorId).update({
        "history.orders": firebase.firestore.FieldValue.arrayUnion(docRef.id),
      }),
      db.collection("locals").doc(orderData.localId).update({
        history: firebase.firestore.FieldValue.arrayUnion(docRef.id),
      }),
    ]);

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al crear la orden", error);
    res.status(400).json({ messege: error.message });
  }
};


/**
 * Controlador para actualizar las ordenes
 */
export const updateOrder = async (req: Request, res: Response): Promise<void> => {
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
