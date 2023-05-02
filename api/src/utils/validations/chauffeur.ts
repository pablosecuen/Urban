import { Request, Response, NextFunction } from "express";
import { ChauffeurToRegister, ChauffeurToUpdate } from "../../schema/chauffeur";
import {
  isAddressValid,
  isDNIValid,
  isEmailValid,
  isLicenseValid,
  isNameValid,
  isPasswordValid,
  isPhoneValid,
} from "./validators";

export const newChauffeurValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: ChauffeurToRegister = req.body;
    if (
      !isNameValid(data.name) ||
      !isEmailValid(data.email) ||
      !isPasswordValid(data.password) ||
      !isPhoneValid(data.phone) ||
      !isDNIValid(data.DNI) ||
      !isLicenseValid(data.license) ||
      !isAddressValid(data.address)
    )
      throw Error("Datos incompletos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateChauffeurValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: ChauffeurToUpdate = req.body;
    const allowProperties = [
      "deleted",
      "email",
      "password",
      "phone",
      "adress",
      "vehicle",
      "payments",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
