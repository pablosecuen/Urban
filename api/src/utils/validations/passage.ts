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

export const newAndUpdatePassageValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // const data = req.body;
  const dataString: string = req.body.data; // Solo usar cuando se necesite probar con insomia Obtener la cadena JSON de la solicitud
  const data: PassageToRegister = JSON.parse(dataString); // Solo usar cuando se necesite probar con insomia
  const errors = [];

  const validators: { [key: string]: (value: any, stock?: number) => string | null } = {
    origin: isOriginValid,
    stock: isStockValid,
    destination: isDestinationValid,
    departureDate: isDepartureDateValid,
    arrivalDate: isArrivalDateValid,
    duration: isDurationValid,
    price: isPriceValid,
    departureTime: isDepartureTimeValid,
    companyId: isCompanyIdValid,
    service: isServiceValid,
    numberSeat: (value: string[]) => isValidNumberSeat(value, data.stock),
  };

  for (const key in validators) {
    if (data[key]) {
      const validator = validators[key];
      const error = validator(data[key]);
      if (error) {
        errors.push({ field: key, message: error });
      }
    }
  }

  if (errors.length > 0) {
    res.status(400).json({ message: "Por favor revisa los datos", errors });
  } else {
    next();
  }
};
