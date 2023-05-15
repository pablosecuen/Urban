import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Company } from "../../schema/company";

export const newCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: Company = req.body;
    const dataFormated = {
      ...data,
      rating: 0,
      createdAt: new Date(Date.now()).toISOString(),
    };
    const docRef = await db.collection("companies").add(dataFormated);

    res.status(200).json({ message: "Compañia creado correctamente", id: docRef.id });
  } catch (innerError) {
    console.error("Error al crear el compañia", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const updateCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data = req.body;
    const updatedAt: string = new Date(Date.now()).toISOString();
    const docRef = await db.collection("companies").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el usuario");
    }

    await db
      .collection("companys")
      .doc(id)
      .update({ ...data, updatedAt: updatedAt });

    res.status(200).json({ message: "Compañia actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el compañia", error);
    res.status(400).json({ message: error.message });
  }
};
