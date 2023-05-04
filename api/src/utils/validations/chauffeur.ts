import { Request, Response, NextFunction } from "express";
import { ChauffeurToRegister, ChauffeurToUpdate } from "../../schema/chauffeur";
import {
  arePaymentsValid,
  isAddressValid,
  isBirthdayValid,
  isCcValid,
  isEmailValid,
  isFirstNameValid,
  isImgValid,
  isLastNameValid,
  isLicenseValid,
  isNationalityValid,
  isPasswordValid,
  isPhoneValid,
  isVehicleToChauffeurValid,
} from "./validators";

export const newChauffeurValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: ChauffeurToRegister = req.body;
    const allowProperties = [
      "firstName",
      "lastName",
      "address",
      "email",
      "password",
      "phone",
      "nationality",
      "birthday",
      "cc",
      "img",
      "license",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");

    if (
      !isFirstNameValid(data.firstName) ||
      !isLastNameValid(data.lastName) ||
      !isAddressValid(data.address) ||
      !isEmailValid(data.email) ||
      !isPasswordValid(data.password) ||
      !isPhoneValid(data.phone) ||
      !isNationalityValid(data.nationality) ||
      !isBirthdayValid(data.birthday) ||
      !isCcValid(data.cc) ||
      !isImgValid(data.img) ||
      !isLicenseValid(data.license)
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
      data?.phone ||
      data?.address ||
      (data?.vehicle && !isVehicleToChauffeurValid(data.vehicle)) ||
      (data?.payments && !arePaymentsValid(data.payments))
    )
      throw Error("Datos no válidos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
