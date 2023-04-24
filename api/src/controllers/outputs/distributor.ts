import { Request, Response } from "express";
import { db } from "../../connection/connection";
import Distributor from "../../schema/distributor";

export const searchDistributor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const doc = await db.collection("distributors").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Distribuidor no encontrado" });
    } else {
      const distribuidor = doc.data() as Distributor;
      res.status(201).json(distribuidor);
    }
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ message: "Error al obtener el distribuidor" });
  }
};

export const getAllDistributors = async (req: Request, res: Response) => {
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

    res.status(201).json(distributors);
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};
