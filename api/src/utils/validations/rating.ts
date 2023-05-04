import { Request, Response, NextFunction } from "express";
import { isCommentValid, isRatingValid } from "./validators";

export const newDistributorRatingValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const data = req.body;
    const allowProperties = ["rating", "comment"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Propiedades no válidas");
    if (!isRatingValid(data.rating) || (data.comment && !isCommentValid(data.comment))) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
