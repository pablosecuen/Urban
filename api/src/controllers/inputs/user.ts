import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { UserToRegister, User } from "../../schema/user";

/**
 * Controlador para crear un usuario en Firestore.
 */
export const newUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: UserToRegister = req.body;

    // Verificar si ya existe un usuario con el correo electrónico dado
    const snapshot = await db
      .collection("users")
      .where("email", "==", data.email)
      .get();
    if (!snapshot.empty) {
      throw new Error("El correo electrónico ya está registrado");
    }

    const docRef = await db.collection("users").add(data);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el usuario", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id; // Obtener ID del usuario a actualizar
    const data: User = req.body; // Obtener datos actualizados del usuario

    // Verificar si el usuario existe en Firestore
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el usuario");
    }

    // Actualizar el usuario en Firestore
    await db.collection("users").doc(id).update(data);

    res.status(200).json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    res.status(400).json({ message: error.message });
  }
};
