import { Request, Response, NextFunction } from "express";
import { TicketToRegister } from "../../schema/ticket";
import { isPassageIdValid, isUserIdValid } from "./validators";

export const newTicketValidate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: TicketToRegister = req.body;
    const allowProperties = ["userId", "passageId"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Propiedades no válidas");
    if (!data.userId || !data.passageId) throw Error("Datos incompletos");
    if (!isUserIdValid(data.userId) || !isPassageIdValid(data.passageId)) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
