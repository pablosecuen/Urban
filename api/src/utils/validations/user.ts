import { Request, Response, NextFunction } from "express";
import { UserToRegister, UserToUpdate } from "../../schema/user";
import {
  arePaymentsValid,
  isAddressValid,
  isBirthdayValid,
  isCcValid,
  isEmailValid,
  isFirstNameValid,
  isImgValid,
  isNameValid,
  isNationalityValid,
  isPasswordValid,
  isPhoneValid,
} from "./validators";

export const newUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: UserToRegister = req.body;
    if (!data.firstName || !data.lastName || !data.email || !data.password) throw Error("Datos incompletos");
    if (!isFirstNameValid(data.firstName) || !isNameValid(data.lastName) || !isEmailValid(data.email) || !isPasswordValid(data.password)) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: UserToUpdate = req.body;
    const allowProperties = [
      "address",
      "phone",
      "payments",
      "gender",
      "img",
      "cc",
      "ce",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    if (
      //Tuve dudas sobre como manejar los Payment asi que lo deje sin hacer, gozá el commit Fede
      (data?.address && !isAddressValid(data.address)) ||
      (data?.payments) ||
      (data?.img && !isImgValid(data.img)) ||
      (data?.gender && data.gender !== "male" && data.gender !== "female") ||
      (data?.phone && !isPhoneValid(data.phone)) ||
      (data?.cc && !isCcValid(data.cc)) ||
      (data?.ce && !isCcValid(data.ce))
    )
      throw Error("Datos no erroneos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
