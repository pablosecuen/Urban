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
 * con paginado
 */
export const getAllDistributors = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const distributorsRef = db.collection("distributors");
    const [distributorsSnapshot, totalDistributorsSnapshot] = await Promise.all([
      distributorsRef.limit(endIndex).get(),
      distributorsRef.get(),
    ]);

    const distributorsData = distributorsSnapshot.docs
      .slice(startIndex, endIndex)
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    const totalDistributors = totalDistributorsSnapshot.size;

    res.status(201).json({ distributors: distributorsData, totalDistributors });
  } catch (error) {
    console.error("Error al obtener los distribuidores", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};
