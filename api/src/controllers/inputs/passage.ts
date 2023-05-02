import { Request, Response } from "express";
import { db } from "../../connection/connection";
import firebase from "firebase-admin";
import { PassageToRegister } from "../../schema/passage";

export const newPassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: PassageToRegister = req.body;
    const dataFormated = {
      ...data,
      status: true,
      deleted: false
    };
    const docRef = await db.collection("passages").add(dataFormated);


    res.status(200).json({ message: "Pasaje creado correctamente", id: docRef.id });
  } catch (innerError) {
    console.error("Error al crear el pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};
