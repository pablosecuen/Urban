import { Order } from "../../schema/order";
import { Request, Response, NextFunction } from "express";
import {
  isDateValid,
  isDestinationValid,
  isDistributorIdValid,
  isLocalIdValid,
  isPriceValid,
  isProductIdValid,
  isUserIdValid,
} from "./validators";

export const newOrderValidate = (req: Request, res: Response, next: NextFunction): void => {
  // Validar que todas las propiedades tengan un valor válido
  try {
    const data: Order = req.body;
    if (
      !data.userId ||
      !data.distributorId ||
      !data.productId ||
      !data.localId ||
      !data.date ||
      !data.price ||
      !data.destination
    ) {
      throw new Error("Faltan datos");
    }
    if (
      !isUserIdValid(data.userId) ||
      !isDistributorIdValid(data.distributorId) ||
      !isProductIdValid(data.productId) ||
      !isLocalIdValid(data.localId) ||
      !isDateValid(data.date) ||
      !isPriceValid(data.price) ||
      !isDestinationValid(data.destination)
    ) {
      throw new Error("Datos no validos");
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
