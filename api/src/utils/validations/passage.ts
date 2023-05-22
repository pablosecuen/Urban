import { Request, Response, NextFunction } from "express";
import {
  isArrivalDateValid,
  isCompanyIdValid,
  isDepartureDateValid,
  isDepartureTimeValid,
  isDestinationValid,
  isDurationValid,
  isNumberSeatValid,
  isOriginValid,
  isPriceValid,
  isServiceValid,
  isStockValid,
  isValidNumberSeat,
} from "./validators";
import { PassageToRegister } from "../../schema/passage";

// Middleware de validación de datos
export const newAndUpdatePassageValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // const data = req.body;
    const dataString: string = req.body.data; // Solo usar cuando se necesite probar con insomia Obtener la cadena JSON de la solicitud
    const data: PassageToRegister = JSON.parse(dataString); // Solo usar cuando se necesite probar con insomia
    const errors = [];

    const validations = [
      { field: "origin", validator: isOriginValid },
      { field: "stock", validator: isStockValid },
      { field: "destination", validator: isDestinationValid },
      { field: "departureDate", validator: isDepartureDateValid },
      { field: "arrivalDate", validator: isArrivalDateValid },
      { field: "duration", validator: isDurationValid },
      { field: "price", validator: isPriceValid },
      { field: "departureTime", validator: isDepartureTimeValid },
      { field: "companyId", validator: isCompanyIdValid },
      { field: "service", validator: isServiceValid },
      { field: "numberSeat", validator: (value: string[]) => isValidNumberSeat(value, data.stock) },
    ];

    for (const validation of validations) {
      validation.validator(req, res);
    }
    next();
  } catch (error) {
    next(error); // Pasar el error al siguiente middleware
  }
};
