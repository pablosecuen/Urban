import { Request, Response } from "express";
import { db } from "../../connection/connection";

//Hay que ver la utilidad de esto att Stefano y Agustin
//El rating ya esta incluido en la info basica del doc de Distributor

export const getRatingByDistributorId = async (req: Request, res: Response): Promise<void> => {
  try {
    // const { id } = req.params;
    // const distributor = await db.collection("distributors").doc(id).get();
    // if (!distributor.exists) {
    //   throw new Error("No existe un distribuidor con ese id");
    // }
    // const rating = await db.collection("");
  } catch (error) {
    console.error("Error al generar rating", error);
    res.status(500).json({ message: error.message });
  }
};
