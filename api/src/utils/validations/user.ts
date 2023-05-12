import { Request, Response, NextFunction } from "express";
import { UserToRegister, UserToUpdate } from "../../schema/user";
import {
  arePaymentsValid,
  isAddressValid,
  isBirthdayValid,
  isCcValid,
  isCeValid,
  isEmailValid,
  isFirstNameValid,
  isImgValid,
  isNameValid,
  isNationalityValid,
  isPasswordValid,
  isPhoneValid,
} from "./validators";

export const newUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  const data: UserToRegister = req.body;

  const validations = [
    { field: "firstName", validator: isFirstNameValid },
    { field: "lastName", validator: isNameValid },
    { field: "password", validator: isPasswordValid },
    { field: "email", validator: isEmailValid },
  ];

  const errors = validations
    .map((validation) => {
      const error = validation.validator(data[validation.field]);
      return error ? { field: validation.field, message: error } : null;
    })
    .filter((error) => error !== null);

  if (errors.length > 0) {
    res.status(400).json({ message: "Por favor revisa los datos", errors });
  } else {
    next();
  }
};

export const updateUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: UserToUpdate = req.body;
    const allowProperties = ["address", "phone", "payments", "gender", "img", "cc", "ce"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    if (
      //Tuve dudas sobre como manejar los Payment asi que lo deje sin hacer, gozá el commit Fede
      (data?.address && !isAddressValid(data.address)) ||
      data?.payments ||
      (data?.gender && data.gender !== "male" && data.gender !== "female") ||
      (data?.phone && !isPhoneValid(data.phone)) ||
      (data?.cc && !isCcValid(data.cc)) ||
      (data?.ce && !isCeValid(data.ce))
    )
      throw Error("Datos no erroneos");
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
