import { Request, Response, NextFunction } from "express";
import { ChauffeurToRegister, ChauffeurToUpdate } from "../../schema/chauffeur";
import {
  arePaymentsValid,
  isAddressValid,
  isDNIValid,
  isEmailValid,
  isLicenseValid,
  isNameValid,
  isPasswordValid,
  isPhoneValid,
  isVehicleToChauffeurValid,
} from "./validators";

export const newChauffeurValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: ChauffeurToRegister = req.body;
    const allowProperties = ["name", "email", "password", "phone", "DNI", "license", "address"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");

    if (
      !isNameValid(data.name) ||
      !isEmailValid(data.email) ||
      !isPasswordValid(data.password) ||
      !isPhoneValid(data.phone) ||
      !isDNIValid(data.DNI) ||
      !isLicenseValid(data.license) ||
      !isAddressValid(data.address)
    )
      throw Error("Datos incompletos o no válidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateChauffeurValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: ChauffeurToUpdate = req.body;
    const allowProperties = ["email", "password", "phone", "address", "vehicle", "payments"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");

    if (
      (data?.email && !isEmailValid(data.email)) ||
      (data?.password && !isPasswordValid(data.password)) ||
      (data?.phone && !isPhoneValid(data.phone)) ||
      (data?.address && !isAddressValid(data.address)) ||
      (data?.vehicle && !isVehicleToChauffeurValid(data.vehicle)) ||
      (data?.payments && !arePaymentsValid(data.payments))
    )
      throw Error("Datos no válidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
