import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Distributor, DistributorToRegister } from "../../schema/distributor";

export const newDistributor = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: DistributorToRegister = req.body;
    const dataFormated: Distributor = {
      ...data,
      payments: [],
      history: [],
      deleted: false,
    };

    // Verificar si ya existe un distribuidor con el correo electrónico dado
    const snapshot = await db
      .collection("distributors")
      .where("email", "==", dataFormated.email)
      .get();
    if (!snapshot.empty) {
      throw new Error("El correo electrónico ya está registrado");
    }
    //crear doocumento de distribuidor
    const docRef = await db.collection("distributors").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al crear el distribuidor", error);
    res.status(400).json({ messege: error.message });
  }
};

export const updateDistributor = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id; // obtener id del distribuidor que se va a actualizar
    const data: Distributor = req.body; //datos de distribuidor a actualizar

    //verificar si existe el usuario en la base de datos
    const docRef = await db.collection("distributors").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el distributor");
    }
    // Actualizar el usuario en Firestore
    await db.collection("distributors").doc(id).update(data);
    res.status(201).json({ menssage: "Distribuidor actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el Distribuidor", error);
    res.status(400).json({ messege: error.message });
  }
};
