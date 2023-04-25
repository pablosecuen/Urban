import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { getDocs, query, where } from "firebase/firestore";
import { Local } from "../../schema/local";

export const searchLocal = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const doc = await db.collection("locals").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Local no encontrado" });
    } else {
      const local = doc.data() as Local;
      res.json(local);
    }
  } catch (error) {
    console.error("Error al obtener el local", error);
    res.status(500).json({ message: "Error al obtener el local" });
  }
};

export const getLocals = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const localsRef = db.collection("locals");

    let localsSnapshot: any;
    if (name) {
      const q = localsRef.where("name", ">=", name).where("name", "<", `${name}\uf8ff`);
      localsSnapshot = await getDocs(q);
    } else {
      localsSnapshot = await localsRef.get();
    }
    const locals: Object[] = [];
    localsSnapshot.forEach((doc) => {
      const local = {
        id: doc.id,
        ...doc.data(),
      };
      locals.push(local);
    });

    res.json(locals);
  } catch (error) {
    console.error("Error al obtener los locales", error);
    res.status(500).json({ message: "Error al obtener los locales" });
  }
};
