import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const getRoadTrip = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(201).json();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear un nuevo producto");
  }
};
