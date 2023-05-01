import { Request, Response, query } from "express";
import { db } from "../../connection/connection";
import firebase from "firebase-admin";

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

    let usersRef: firebase.firestore.Query<firebase.firestore.DocumentData> = db.collection("users");

    if (Object.keys(req.query).length > 2) {
      const filters = Object.keys(req.query).filter(key => key !== 'page' && key !== 'pageSize');
      filters.forEach(key => {
        usersRef = usersRef.where(key, '==', req.query[key]);
      });
    }

    usersRef = usersRef.where('deleted', '==', false);

    const totalUsersSnapshot = await usersRef.get();
    const totalFilteredUsers = totalUsersSnapshot.size;
    const totalPages = Math.ceil(totalFilteredUsers / pageSize);

    const usersSnapshot = await usersRef.limit(endIndex).get();
    const usersData = usersSnapshot.docs.slice(startIndex, endIndex).map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({ users: usersData, totalPages });
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};



