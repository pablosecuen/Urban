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

export const allUsers = async (req: Request, res: Response): Promise<void> => {
  try {

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const usersRef = db.collection("users");
    const [usersSnapshot, totalUsersSnapshot] = await Promise.all([
      usersRef.limit(endIndex).get(),
      usersRef.get()
    ]);

    const usersData = usersSnapshot.docs.slice(startIndex, endIndex).map(doc => ({ id: doc.id, ...doc.data() }));
    const totalUsers = totalUsersSnapshot.size;

    res.json({ users: usersData, totalUsers });
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};
