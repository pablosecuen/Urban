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
  isGenderValid,
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
  const data: UserToUpdate = req.body;

  const errors = [];

  const validators = {
    cc: isCcValid,
    address: isAddressValid,
    phone: isPhoneValid,
    gender: isGenderValid,
    ce: isCeValid,
  };

  const validFields = Object.keys(validators);

  for (const field in data) {
    if (!validFields.includes(field)) {
      errors.push({ field, message: "Propiedad no válida" });
    } else {
      const validator = validators[field];
      const error = validator(data[field]);
      if (error) {
        errors.push({ field, message: error });
      }
    }
  }

  if (errors.length > 0) {
    res.status(400).json({ message: "Por favor revisa los datos", errors });
  } else {
    next();
  }
};
