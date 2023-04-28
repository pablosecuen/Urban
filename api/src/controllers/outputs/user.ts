import { Request, Response, query } from "express";
import { db } from "../../connection/connection";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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
      res.status(200).json(usuario);
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

    const filters = Object.keys(req.query)
      .filter(key => key !== 'page' && key !== 'pageSize' && key !== 'deleted')
      .reduce((acc, key) => {
        return acc.where(key, '==', req.query[key]);
      }, db.collection("users").where('deleted', '==', false));

    const usersSnapshot = await filters.limit(endIndex).get();

    const totalFilteredUsers = usersSnapshot.size;
    const totalPages = Math.ceil(totalFilteredUsers / pageSize);

    const usersData = usersSnapshot.docs.slice(startIndex, endIndex).map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).send({ users: usersData, totalPages });
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};
