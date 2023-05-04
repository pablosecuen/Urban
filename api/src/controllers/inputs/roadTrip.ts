import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { RoadTrip, RoadTripToRegister } from "../../schema/roadTrip";

/**
 * Controlador para crear la ruta
 * * @body datos para crear la ruta
 */
export const newRoadTrip = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: RoadTripToRegister = req.body;
    const dataFormated: RoadTrip = {
      ...data,
      deleted: false,
    };
    const docRef = await db.collection("roadTrip").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (innerError) {
    console.error("Error al crear la ruta", innerError);
    res.status(500).send("Error al crear una nueva ruta");
  }
};
