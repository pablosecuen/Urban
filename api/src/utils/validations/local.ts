import { Request, Response, NextFunction } from "express";
import { LocalToRegister, LocalToUpdate } from "../../schema/local";
import {
  isAddressValid,
  isEmailValid,
  isImgValid,
  isNameValid,
  isPasswordValid,
} from "./validators";

export const newLocalValidate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: LocalToRegister = req.body;
    if (!data.name || !data.address || !data.email || !data.password || !data.img)
      throw Error("Datos incompletos");
    if (
      isNameValid(data.name) ||
      isEmailValid(data.email) ||
      isPasswordValid(data.password) ||
      isAddressValid(data.address) ||
      isImgValid(data.img)
    ) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// FALTA TESTEAR DESPUES DE REINICIAR LA BD Y CREAR TODOS LOS MODELOS CON EL CAMPO DE BORRADO LÓGICO
export const updateLocalValidate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: LocalToUpdate = req.body;
    const allowProperties = ["name", "adress", "email", "password", "img", "payments"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    if (
      (data?.name && isNameValid(data.name)) ||
      (data?.email && isEmailValid(data.email)) ||
      (data?.password && isPasswordValid(data.password)) ||
      (data?.address && isAddressValid(data.address)) ||
      (data?.img && isImgValid(data.img))
    ) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
