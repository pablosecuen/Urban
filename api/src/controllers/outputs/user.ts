import { Request, Response, query } from "express";
import { db } from "../../connection/connection";
import jwt from "jsonwebtoken";
import firebase from "firebase-admin";

export const searchUser = async (req: Request, res: Response): Promise<void> => {
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

    let usersRef: firebase.firestore.Query<firebase.firestore.DocumentData> =
      db.collection("users");

    //let deletedFilter = false; // Valor predeterminado de deleted en false

    if (Object.keys(req.query).length > 2) {
      const filters = Object.keys(req.query).filter((key) => key !== "page" && key !== "pageSize");
      filters.forEach((key) => {
        usersRef = usersRef.where(key, "==", req.query[key]);
        // if (key === "deleted") {
        //   // Si se proporciona el parámetro "deleted" en la consulta, se sobrescribe el valor predeterminado
        //   deletedFilter = req.query.deleted === "true";
        // } else {
        //   usersRef = usersRef.where(key, "==", req.query[key]);
        // }
      });
    }

    //usersRef = usersRef.where("deleted", "==", deletedFilter);

    const totalUsersSnapshot = await usersRef.get();
    const totalFilteredUsers = totalUsersSnapshot.size;
    const totalPages = Math.ceil(totalFilteredUsers / pageSize);

    const usersSnapshot = await usersRef.limit(endIndex).get();
    const usersData = usersSnapshot.docs
      .slice(startIndex, endIndex)
      .map((doc) => ({ id: doc.id, ...doc.data() }));

    res.json({ users: usersData, totalPages });
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const decodingUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { authorization }: any = req.headers;
    const token = authorization.slice(7);
    const decoded: any = jwt.verify(token, "clavemegasecreta");
    const doc = await db.collection("users").doc(decoded.id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      const usuario = { id: doc.id, ...doc.data() };
      res.json(usuario);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
