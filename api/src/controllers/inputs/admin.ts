import { NextFunction, Request, Response } from "express";
import { db } from "../../connection/connection";
import createHttpError from "http-errors";
import firebase from "firebase-admin";

/**
 *  Controlador para adminStatus
 * @param changes[], array de estring con los valores a modificar, ["enableBusses", "enableCarPulling", "enableOrders"]
 * puede ser uno o 2 o todos
 */
export const updateAdminStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dataRef = db.collection("adminStatus").doc("BECMkRXkiNt1QmsQjjZT");
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
      throw createHttpError(404, error.message);
    } catch (innerError) {
      next(innerError);
    }
  }
};

export const updateStatusChauffeur = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("chauffeur").doc(id).get();
    if (!docRef.exists) {
      throw createHttpError(404, "No se encontrón el chofer");
    }
    await db.collection("chauffeur").doc(id).update({ status: true });
    res.status(200).json({ message: "Chofer habilitado correctamente" });
  } catch (error) {
    next(error);
  }
};

export const updateStatusDelivery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("deliverys").doc(id).get();
    if (!docRef.exists) {
      throw createHttpError(404, "No se encontrón el repartidor");
    }
    await db.collection("chauffeur").doc(id).update({ status: true });
    res.status(200).json({ message: "Repartidor habilitado correctamente" });
  } catch (error) {
    next(error);
  }
};

export const updateStatusVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("vehicle").doc(id).get();
    if (!docRef.exists) {
      throw createHttpError(404, "No se encontrón el vehiculo");
    }
    await db.collection("chauffeur").doc(id).update({ status: true });
    res.status(200).json({ message: "Vehiculo habilitado correctamente" });
  } catch (error) {
    next(error);
  }
};

export const updateSeatPassage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw createHttpError(404, "No se encontró el pasaje");
    }
    await db
      .collection("passages")
      .doc(id)
      .update({
        numberSeat: firebase.firestore.FieldValue.arrayUnion(req.body.numberSeat),
      });

    res.status(200).json({ message: "Pasaje actualizado correctamente" });
  } catch (error) {
    next(error);
  }
};
