import { Distributor, DistributorToUpdate } from "../../schema/distributor";
import { Request, Response, NextFunction } from "express";

export const newDistributorValidate = (req: Request, res: Response, next: NextFunction): void => {
  // Validar que todas las propiedades tengan un valor válido
  try {
    const data: Distributor = req.body;
    if (
      !data.name ||
      !data.adress ||
      !data.email ||
      !data.password ||
      !data.img ||
      !data.vehicle ||
      !data.dni ||
      !data.license
    )
      throw new Error("Faltan datos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDistributorValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const data: DistributorToUpdate = req.body;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
