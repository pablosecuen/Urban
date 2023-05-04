import { Request, Response, NextFunction } from "express";
import { OwnerToRegister, OwnerToUpdate } from "../../schema/owner";
import {
  isAddressValid,
  isCcValid,
  isEmailValid,
  isNameValid,
  isPhoneValid,
  isVehiclesIdValid,
} from "./validators";

export const newOwnerValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: OwnerToRegister = req.body;
    if (!data.name || !data.email || !data.phone || !data.cc || !data.vehiclesId)
      throw Error("Datos incompletos");
    // if (
    //   !isNameValid(data.name) ||
    //   !isEmailValid(data.email) ||
    //   !isPhoneValid(data.phone) ||
    //   !isCcValid(data.cc)
    //   // !isVehiclesIdValid(data.vehiclesId)
    // ) {
    //   throw new Error("Datos incompletos o no válidos");
    // }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOwnerValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: OwnerToUpdate = req.body;
    const allowProperties = ["deleted", "phone", "address", "DNI", "vehiclesId"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos faltantes");
    // if (
    //   (data?.name && !isNameValid(data.name)) ||
    //   (data?.email && !isEmailValid(data.email)) ||
    //   (data?.phone && !isPhoneValid(data.phone)) ||
    //   (data?.cc && !isCcValid(data.cc)) ||
    //   (data?.vehiclesId && !isVehiclesIdValid(data.vehiclesId)) ||
    //   (data?.address && !isAddressValid(data.address))
    // ) {
    //   throw new Error("Datos incompletos o no válidos");
    // }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
