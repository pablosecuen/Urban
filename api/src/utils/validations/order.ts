import { Order } from "../../schema/order";
import { Request, Response, NextFunction } from "express";

export const newOrderValidate = (req: Request, res: Response, next: NextFunction): void => {
  // Validar que todas las propiedades tengan un valor válido
  try {
    const dataOrder: Order = req.body;
    if (
      !dataOrder.userId ||
      !dataOrder.distributorId ||
      !dataOrder.date ||
      !dataOrder.localId ||
      !dataOrder.price ||
      !dataOrder.destination) {
      throw new Error("Faltan datos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
