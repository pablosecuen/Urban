import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const searhBusDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("busDriver").doc(id).get();
    if (!doc.exists) {
      res.status(404).send({ message: "Conductor no encontrado" });
    } else {
      const conductor = { id: doc.id, ...doc.data() };
      res.json(conductor);
    }
  } catch (error) {
    console.error("Error al obtener conductor", error);
    res.status(500).json({ message: "Error al obtener el conductor" });
  }
};

export const getBusDriver = async (req: Request, res: Response) => {};
