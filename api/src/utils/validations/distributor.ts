import { Distributor, DistributorToUpdate } from "../../schema/distributor";
import { Request, Response, NextFunction } from "express";
import {
  isAddressValid,
  isDNIValid,
  isEmailValid,
  isImgValid,
  isLicenseValid,
  isNameValid,
  isPasswordValid,
  isVehicleValid,
} from "./validators";

export const newDistributorValidate = (req: Request, res: Response, next: NextFunction): void => {
  // Validar que todas las propiedades tengan un valor válido
  try {
    const data: Distributor = req.body;
    const allowProperties = [
      "name",
      "address",
      "email",
      "password",
      "img",
      "vehicle",
      "DNI",
      "license",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw new Error("Datos no permitidos");
    if (
      !isNameValid(data.name) ||
      !isAddressValid(data.address) ||
      !isEmailValid(data.email) ||
      !isPasswordValid(data.password) ||
      !isImgValid(data.img) ||
      !isVehicleValid(data.vehicle) ||
      !isDNIValid(data.DNI) ||
      !isLicenseValid(data.license)
    )
      throw new Error("Faltan datos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDistributorValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const data: DistributorToUpdate = req.body;
    const allowProperties: string[] = [
      "name",
      "adress",
      "email",
      "password",
      "img",
      "vehicle",
      "DNI",
      "license",
      "payments",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw new Error("Datos no permitidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
