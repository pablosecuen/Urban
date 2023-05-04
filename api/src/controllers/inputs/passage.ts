import { Request, Response } from "express";
import { db } from "../../connection/connection";
import firebase from "firebase-admin";
import { PassageToRegister, PassageToUpdate } from "../../schema/passage";

export const newPassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: PassageToRegister = req.body;
    const dataFormated = {
      ...data,
      status: true,
      deleted: false,
      createdAt: new Date(Date.now()).toISOString()
    };
    const docRef = await db.collection("passages").add(dataFormated);

    res.status(200).json({ message: "Pasaje creado correctamente", id: docRef.id });
  } catch (innerError) {
    console.error("Error al crear el pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const updatePassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data: PassageToUpdate = req.body;
    const updatedAt: string = new Date(Date.now()).toISOString();
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El bus no se actualizó");
    }
    await db.collection("bus").doc(id).update({ ...data, updatedAt: updatedAt });
    res.status(200).json({ message: "Pasaje actualizado correctamente" });
  } catch (innerError) {
    console.error("Error al actualizar el Pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const deletePassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El pasaje no se econtró");
    }
    await db.collection("passages").doc(id).update({ deleted: true });
    res.status(200).json({ message: "Pasaje deshabilitado correctamente" });
  } catch (innerError) {
    console.error("Error al deshabilitar el pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const enablePassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El pasaje no se econtró");
    }
    await db.collection("passages").doc(id).update({ deleted: false });
    res.status(200).json({ message: "Pasaje habilitado correctamente" });
  } catch (innerError) {
    console.error("Error al habilitar el Pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};