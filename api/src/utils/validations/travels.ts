import { Request, Response, NextFunction } from "express";
import { Travel, TravelToUpdate } from "../../schema/travels";

export const newTravelValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: Travel = req.body;
    if (!data.userId || !data.chauffeurId || !data.price || !data.destination || !data.origin)
      throw Error("Datos incompletos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTravelValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: TravelToUpdate = req.body;
    const allowProperties = ["status", "travel"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
