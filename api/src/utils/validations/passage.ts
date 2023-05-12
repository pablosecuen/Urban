import { Request, Response, NextFunction } from "express";
import {
  isArrivalDateValid,
  isDepartureDateValid,
  isDepartureTimeValid,
  isDestinationValid,
  isDurationValid,
  isNumberSeatValid,
  isOriginValid,
  isPriceValid,
  isStockValid,
} from "./validators";
import { PassageToRegister } from "../../schema/passage";

export const newAndUpdatePassageValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // const data = req.body;
    const dataString: string = req.body.data; // Solo usar cuando se necesite probar con insomia
    // Obtener la cadena JSON de la solicitud
    const data: PassageToRegister = JSON.parse(dataString); // Solo usar cuando se necesite probar con insomia

    for (const key in data) {
      // Solo usar cuando se necesite probar con insomia
      if (typeof data[key] === "string") {
        data[key] = data[key].toLowerCase();
      }
    }
    console.log(data);
    const allowProperties = [
      "origin",
      "stock",
      "destination",
      "departureDate",
      "arrivalDate",
      "duration",
      "price",
      "numberSeat",
      "checkIn",
      "departureTime",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Propiedades no válidas");
    if (allowProperties.some((property) => !data[property])) throw Error("Datos incompletos");
    if (
      !isOriginValid(data.origin) ||
      !isStockValid(data.stock) ||
      !isDestinationValid(data.destination) ||
      !isDepartureDateValid(data.departureDate) ||
      !isArrivalDateValid(data.arrivalDate) ||
      !isDurationValid(data.duration) ||
      !isPriceValid(data.price) ||
      !isNumberSeatValid(data.numberSeat) ||
      !isDepartureTimeValid(data.departureTime)
    )
      throw new Error("Datos no validos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
