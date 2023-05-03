import { Request, Response, NextFunction } from "express";
import { Travel, TravelToUpdate } from "../../schema/travels";
import {
  isChauffeurIdValid,
  isDestinationValid,
  isOriginValid,
  isPriceValid,
  isUserIdValid,
} from "./validators";

export const newTravelValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: Travel = req.body;
    if (!data.userId || !data.chauffeurId || !data.price || !data.destination || !data.origin)
      throw Error("Datos incompletos");
    if (
      !isUserIdValid(data.userId) ||
      !isChauffeurIdValid(data.chauffeurId) ||
      !isDestinationValid(data.destination) ||
      !isOriginValid(data.origin) ||
      !isPriceValid(data.price)
    ) {
      throw new Error("Datos no validos");
    }
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
