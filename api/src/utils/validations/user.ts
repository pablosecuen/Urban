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
  let errors = "";

  try {
    const data: UserToRegister = req.body;

    const firstNameError = isFirstNameValid(data.firstName);
    if (firstNameError) {
      errors = firstNameError;
    }

    const lastNameError = isNameValid(data.lastName);
    if (lastNameError) {
      errors = lastNameError;
    }

    const passwordError = isPasswordValid(data.password);
    if (passwordError) {
      errors = passwordError;
    }

    const emailError = isEmailValid(data.email);
    if (emailError) {
      errors = emailError;
    }

    if (errors !== "") {
      throw new Error("Datos no válidos");
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message, errors: errors });
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
      (data?.img && !isImgValid(data.img)) ||
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
