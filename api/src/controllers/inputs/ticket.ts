import { Request, Response } from "express";
import { Ticket, TicketToRegister } from "../../schema/ticket";
import { db } from "../../connection/connection";
import firebase from "firebase-admin";
import { successTicket } from "../../utils/middelware/sendMail";

export const newTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: TicketToRegister = req.body;

    const [userDoc, passageDoc] = await Promise.all([
      db.collection("users").doc(data.userId).get(),
      db.collection("passages").doc(data.passageId).get(),
    ]);

    if (!userDoc.exists) {
      throw new Error("El usuario no existe");
    }

    if (!passageDoc.exists) {
      throw new Error("El pasaje no existe");
    }

    const passageData = passageDoc.data();
    const ticketPrice = passageData.price;
    const currentStock = passageData.stock;

    if (currentStock < data.quantity) {
      throw new Error("No hay suficiente stock disponible");
    }

    const dataFormatted: Ticket = {
      ...data,
      reviewSent: false,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: "",
      price: ticketPrice,
    };

    const docRef = await db.collection("tickets").add(dataFormatted);

    const updatedStock = currentStock - data.quantity;

    // Eliminar los números de asientos seleccionados del pasaje
    const selectedSeats = data.numberSeat;
    const updatedNumberSeat = passageData.numberSeat.filter(
      (seat) => !selectedSeats.includes(seat)
    );
    await Promise.all([
      db
        .collection("users")
        .doc(data.userId)
        .update({
          "history.tickets": firebase.firestore.FieldValue.arrayUnion(docRef.id),
        }),
      db.collection("passages").doc(data.passageId).update({
        stock: updatedStock,
        numberSeat: updatedNumberSeat,
      }),
    ]);

    const userData = userDoc.data();
    //comentamos el mail porq tira errores del token
    //await successTicket(userData.email, userData.name);

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al generar ticket", error);
    res.status(500).json({ message: error.message });
  }
};

export const acceptTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedAt = new Date().toISOString();

    const ticketRef = db.collection("tickets").doc(id);
    const ticketDoc = await ticketRef.get();

    if (!ticketDoc.exists) {
      throw new Error("El ticket no existe");
    }

    await ticketRef.update({ status: "acepted", updatedAt });

    res.status(201).json({ message: "Ticket actualizado" });
  } catch (error) {
    console.error("Error al modificar ticket", error);
    res.status(500).json({ message: error.message });
  }
};

export const cancelTicket = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updatedAt = new Date().toISOString();

  try {
    const ticketDoc = await db.collection("tickets").doc(id).get();

    if (!ticketDoc.exists) {
      throw new Error("El ticket no existe");
    }

    await db.collection("tickets").doc(id).update({
      status: "canceled",
      updatedAt,
    });

    res.status(201).json({ message: "Ticket cancelado" });
  } catch (error) {
    console.error("Error al cancelar ticket", error);
    res.status(500).json({ message: error.message });
  }
};
