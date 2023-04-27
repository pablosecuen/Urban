import { Request, Response } from "express";
import { db } from "../../connection/connection";
import bcrypt from "bcrypt";
import { Distributor, DistributorToRegister } from "../../schema/distributor";

/**
 * Controlador para crear distribuidores
 * * @param req body tipo DistributorToRegister
 */
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

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(dataFormated.password, 10);
    dataFormated.password = hashedPassword;

    //crear doocumento de distribuidor
    const docRef = await db.collection("distributors").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al crear el distribuidor", error);
    res.status(400).json({ messege: error.message });
  }
};

/**
 * Controlador para actualizar distribuidores
 * @param req Id tipo string
 * @param req body tipo DistributorToUpdate
 */
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
/**
 * Controlador para eliminar un distribuidor por id
 
 * @param req Id tipo string
 */
export const deleteDistributor = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id; //obtener id del distribuidor a eliminar
    const docRef = await db.collection("distributors").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el distributor");
    }
    // Actualizar el usuario en Firestore
    await db.collection("distributors").doc(id).update({ deleted: true });
    res.status(201).json({ menssage: "Distribuidor actualizado correctamente" });
  } catch (error) {
    console.error("Error al borrar el Distribuidor", error);
    res.status(400).json({ messege: error.message });
  }
};
