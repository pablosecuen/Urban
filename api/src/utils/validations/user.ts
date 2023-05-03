import { Request, Response, NextFunction } from "express";
import { UserToRegister, UserToUpdate } from "../../schema/user";
import {
  isAddressValid,
  isDNIValid,
  isEmailValid,
  isImgValid,
  isNameValid,
  isPasswordValid,
} from "./validators";

export const newUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: UserToRegister = req.body;
    if (!data.name || !data.email || !data.password) throw Error("Datos incompletos");
    if (!isNameValid(data.name) || !isEmailValid(data.email) || !isPasswordValid(data.password)) {
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
      "name",
      "address",
      "email",
      "password",
      "img",
      "payments.cardNumber",
      "payments.cardExpiration",
      "payments.securityCode",
      "DNI",
      "deleted",
    ];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    if (
      //Tuve dudas sobre como manejar los Payment asi que lo deje sin hacer, gozá el commit Fede
      (data?.name && isNameValid(data.name)) ||
      (data?.email && isEmailValid(data.email)) ||
      (data?.password && isPasswordValid(data.password)) ||
      (data?.address && isAddressValid(data.address)) ||
      (data?.img && isImgValid(data.img)) ||
      (data?.DNI && isDNIValid(data.DNI))
    )
      next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
