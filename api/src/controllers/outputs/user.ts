import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const searchUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("users").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      const usuario = { id: doc.id, ...doc.data() };
      res.json(usuario);
    }
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};

export const allUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const usersRef = db.collection("users");
    const usersSnapshot = await usersRef.get();

    const users: Object[] = [];
    usersSnapshot.forEach((doc) => {
      const user = {
        id: doc.id,
        ...doc.data(),
      };
      users.push(user);
    });

    res.json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};
