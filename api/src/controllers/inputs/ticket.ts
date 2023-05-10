import { Request, Response } from "express";
import { Ticket, TicketToRegister } from "../../schema/ticket";
import { db } from "../../connection/connection";
import firebase from "firebase-admin";

export const newTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: TicketToRegister = req.body;

    const [userDoc, passageDoc] = await Promise.all([
      db.collection("users").doc(data.userId).get(),
      db.collection("passages").doc(data.passageId).get(),
    ]);

    if (!userDoc.exists) throw new Error("El usuario no existe");
    if (!passageDoc.exists) throw new Error("El pasaje no existe");

    const passageData = passageDoc.data();
    const ticketPrice = passageData.price;

    const dataFormatted: Ticket = {
      ...data,
      status: "pending",
      createdAt: new Date(Date.now()).toISOString(),
      updatedAt: "",
      price: ticketPrice,
    };

    const docRef = await db.collection("tickets").add(dataFormatted);

    await Promise.all([
      db
        .collection("users")
        .doc(data.userId)
        .update({
          "history.tickets": firebase.firestore.FieldValue.arrayUnion(docRef.id),
        }),
      db
        .collection("passages")
        .doc(data.passageId)
        .update({ stock: passageData.stock - 1 }),
    ]);

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al generar ticket", error);
    res.status(500).json({ message: error.message });
  }
};

export const aceptTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedAt: string = new Date(Date.now()).toISOString();

    const ticketDoc = await db.collection("tickets").doc(id).get();

    if (!ticketDoc.exists) throw new Error("El ticket no existe");

    await db.collection("tickets").doc(id).update({ status: "acepted", updatedAt: updatedAt });

    res.status(201).json({ message: "Ticket actualizado" });
  } catch (error) {
    console.error("Error al modificar ticket", error);
    res.status(500).json({ message: error.message });
  }
};

export const cancelTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedAt: string = new Date(Date.now()).toISOString();

    const ticketDoc = await db.collection("tickets").doc(id).get();

    if (!ticketDoc.exists) throw new Error("El ticket no existe");

    await db.collection("tickets").doc(id).update({ status: "canceled", updatedAt: updatedAt });

    res.status(201).json({ message: "Ticket cancelado" });
  } catch (error) {
    console.error("Error al cancelar ticket", error);
    res.status(500).json({ message: error.message });
  }
};
