import { Request, Response } from "express";
import { db } from "../../connection/connection";

export const getCompanies = async (req: Request, res: Response): Promise<void> => {
  try {
    let query: any = db.collection("companies");

    const companySnap = await query.get();

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(companySnap.docs.length / pageSize);

    const companies = companySnap.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ companies, totalPages });
  } catch (innerError) {
    console.error("Error al encontrar los buses", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const getCompanyByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("companies").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Compañia no encontrado" });
    } else {
      const company = { id: doc.id, ...doc.data() };
      res.json(company);
    }
  } catch (error) {
    console.error("Error al obtener el compañia", error);
    res.status(500).json({ message: "Error al obtener el compañia" });
  }
};
