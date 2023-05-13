import { Request, Response, NextFunction } from "express";
import { isCommentValid, isRatingValid } from "./validators";

export const newRatingValidator = (req: Request, res: Response, next: NextFunction): void => {
  const data = req.body;

  const errors = [];

  const validators = {
    rating: isRatingValid,
    comment: isCommentValid,
  };

  for (const field in validators) {
    if (data[field]) {
      const error = validators[field](data[field]);
      if (error) {
        errors.push({ field, message: error });
      }
    }
  }

  if (errors.length > 0) {
    res.status(400).json({ message: "Por favor revisa los datos", errors });
  } else {
    next();
  }
};
