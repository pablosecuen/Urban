import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Distributor } from "../../schema/distributor";
import { query, where, getDocs, collection } from "firebase/firestore";

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
export const getDistributors = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProperties = Object.keys(req.query);

    let query_ = query(collection(db, "distributors"), where("deleted", "==", false));

    const additionalArgs = allProperties
      .filter((property) => !["page", "pageSize"].includes(property))
      .map((property) => {
        return where(property, "==", req.query[property]);
      });
    if (additionalArgs.length > 0) {
      query_ = query(query_, ...additionalArgs);
    }

    const distributorsSnapshot = await getDocs(query_);

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(distributorsSnapshot.docChanges.length / pageSize);

    const distributorsData = distributorsSnapshot.docs
      .slice(startIndex, endIndex)
      .map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(201).json({ distributors: distributorsData, totalPages });
  } catch (error) {
    console.error("Error al obtener los distribuidores", error);
    res.status(500).json({ message: "Error al obtener los distribuidores" });
  }
};
