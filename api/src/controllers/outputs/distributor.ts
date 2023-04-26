import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Distributor } from "../../schema/distributor";

/**
 * Controlador para buscar un distribuidor por id
 */
export const searchDistributor = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("distributors").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Distribuidor no encontrado" });
    } else {
      const distribuidor = doc.data() as Distributor;
      res.status(201).json(distribuidor);
    }
  } catch (error) {
    console.error("Error al obtener el distribuidor", error);
    res.status(500).json({ message: "Error al obtener el distribuidor" });
  }
};

/**
 * Controlador para obtener todos los distribuidores
 */
export const getAllDistributors = async (req: Request, res: Response): Promise<void> => {
  try {
    const distributorsRef = db.collection("distributors");
    const distributorsSnapshot = await distributorsRef.get();
    const distributors: Object[] = [];
    distributorsSnapshot.forEach((doc) => {
      const distributor = {
        id: doc.id,
        ...doc.data(),
      };
      distributors.push(distributor);
    });
    const trueDistributors = distributors.filter((distributor: any, i = 0) => {
      return distributor.deleted === false;
    });

    res.status(201).json(trueDistributors);
  } catch (error) {
    console.error("Error al obtener los distribuidores", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};
