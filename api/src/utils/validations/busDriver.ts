import { Request, Response, NextFunction } from "express";
import { BusDriver } from "../../schema/busDriver";
import { isDNIValid, isLicenseValid, isNameValid } from "./validators";
export const newBusDriverValidate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: BusDriver = req.body;
    const allowProperties = ["name", "DNI", "license"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");

    if (!isNameValid(data.name) || !isDNIValid(data.DNI) || !isLicenseValid(data.license)) {
      throw Error("Datos incompletos o no válidos");
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
