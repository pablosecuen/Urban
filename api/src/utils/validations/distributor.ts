import { Distributor, DistributorToUpdate } from "../../schema/distributor";
import { Request, Response, NextFunction } from "express";
import {
  arePaymentsValid,
  isAddressValid,
  isCcValid,
  isEmailValid,
  isFirstNameValid,
  isImgValid,
  isLastNameValid,
  isLicenseValid,
  isPasswordValid,
  isVehicleTypeValid,
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
      "vehicleType",
      "vehiclePatent",
      "DNI",
      "license",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw new Error("Datos no permitidos");
    if (
      !isFirstNameValid(data.firstName) ||
      !isLastNameValid(data.lastName) ||
      !isEmailValid(data.email) ||
      !isPasswordValid(data.password) ||
      !isImgValid(data.img) ||
      !isVehicleTypeValid(data.vehicleType) ||
      !isCcValid(data.cc) ||
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
      "address",
      "vehicleType",
      "vehiclePatent",
      "email",
      "img",
      "license",
      "payments",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw new Error("Datos no permitidos");
    (data?.address) ||
      (data?.img && !isImgValid(data.img)) ||
      (data?.vehicleType && !isVehicleTypeValid(data.vehicleType)) ||
      (data?.license && !isLicenseValid(data.license)) ||
      (data?.payments && !arePaymentsValid(data.payments))
    throw Error("Datos no válidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
