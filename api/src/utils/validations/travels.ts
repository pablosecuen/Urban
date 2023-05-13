import { Request, Response, NextFunction } from "express";
import { Travel, TravelToUpdate } from "../../schema/travels";
import {
  isChauffeurIdValid,
  isDestinationValid,
  isOriginValid,
  isPriceValid,
  isTravelStatusValid,
  isTravelTravelValid,
  isUserIdValid,
} from "./validators";

export const newTravelValidated = (req: Request, res: Response, next: NextFunction): void => {
  const data: Travel = req.body;

  const validations: { field: keyof Travel; validator: (value: any) => string | null }[] = [
    { field: "userId", validator: isUserIdValid },
    { field: "chauffeurId", validator: isChauffeurIdValid },
    { field: "price", validator: isPriceValid },
    { field: "destination", validator: isDestinationValid },
    { field: "origin", validator: isOriginValid },
  ];

  const errors = validations
    .map((validation) => {
      const { field, validator } = validation;
      const value = data[field];
      if (!value) return { field, message: "Campo obligatorio" };
      const error = validator(value);
      return error ? { field, message: error } : null;
    })
    .filter((error) => error !== null);

  if (errors.length > 0) {
    res.status(400).json({ message: "Por favor revisa los datos", errors });
  } else {
    next();
  }
};

export const updateTravelValidated = (req: Request, res: Response, next: NextFunction): void => {
  const data: TravelToUpdate = req.body;

  const validations: { field: keyof TravelToUpdate; validator: (value: any) => string | null }[] = [
    { field: "status", validator: isTravelStatusValid },
    { field: "travel", validator: isTravelTravelValid },
  ];

  const errors = validations
    .map((validation) => {
      const { field, validator } = validation;
      const value = data[field];
      if (!value) return { field, message: "Campo obligatorio" };
      const error = validator(value);
      return error ? { field, message: error } : null;
    })
    .filter((error) => error !== null);

  if (errors.length > 0) {
    res.status(400).json({ message: "Por favor revisa los datos", errors });
  } else {
    next();
  }
};
