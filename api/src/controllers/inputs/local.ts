import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Local, LocalToRegister, LocalToUpdate } from "../../schema/local";

/**
 * Controlador para crear un local en Firestore.
 */
export const newLocal = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: LocalToRegister = req.body;
    const dataFormated: Local = {
      ...data,
      payments: [],
      history: [],
      state: false,
      deleted: false,
    };
    const docRef = await db.collection("locals").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el local", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};

export const updateLocal = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id; // Obtener ID del local a actualizar
    const data: LocalToUpdate = req.body; // Obtener datos actualizados del local

    // Verificar si el local existe en Firestore
    const docRef = await db.collection("locals").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el local");
    }

    // Actualizar el local en Firestore
    await db.collection("locals").doc(id).update(data);

    res.status(200).json({ message: "Local actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el local", error);
    res.status(400).json({ message: error.message });
  }
};
