import { Request, Response, NextFunction } from "express";
import {
  isArrivalDateValid,
  isDepartureDateValid,
  isDescriptionValid,
  isDestinationValid,
  isDurationValid,
  isNumberSeatValid,
  isOriginValid,
  isPriceValid,
  isStockValid,
} from "./validators";

export const newAndUpdatePassageValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const data = req.body;
    const allowProperties = [
      "origin",
      "stock",
      "destination",
      "description",
      "departureDate",
      "arrivalDate",
      "duration",
      "price",
      "numberSeat",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Propiedades no válidas");
    if (!data.userId || !data.passageId) throw Error("Datos incompletos");
    if (
      !isOriginValid(data.origin) ||
      !isStockValid(data.stock) ||
      !isDestinationValid(data.destination) ||
      !isDescriptionValid(data.description) ||
      !isDepartureDateValid(data.departureDate) ||
      !isArrivalDateValid(data.arrivalDate) ||
      !isDurationValid(data.duration) ||
      !isPriceValid(data.price) ||
      !isNumberSeatValid(data.numberSeat)
    ) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
