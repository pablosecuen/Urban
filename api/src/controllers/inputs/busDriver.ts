import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { BusDriver, BusDriverToRegister } from "../../schema/busDriver";
/**
 * Controlador para crear Bus Driver
 * * @body datos para crear Bus Driver
 */
export const newBusDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: BusDriverToRegister = req.body;
    const dataFormated: BusDriver = {
      ...data,
      deleted: false,
    };
    const snapshot = await await db
      .collection("busDriver")
      .where("DNI", "==", dataFormated.DNI)
      .get();
    if (!snapshot.empty) {
      throw new Error("El conductor ya está registrado");
    }

    const docRef = await db.collection("busDriver").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el conductor", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};

export const updateBusDriver = (req: Request, res: Response) => {};
