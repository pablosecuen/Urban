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

// Middleware de validación de datos
export const newUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: UserToRegister = req.body;

    const validations = [
      { field: "firstName", validator: isFirstNameValid },
      { field: "lastName", validator: isNameValid },
      { field: "password", validator: isPasswordValid },
      { field: "email", validator: isEmailValid },
    ];

    for (const validation of validations) {
      validation.validator(req, res);
    }

    next();
  } catch (error) {
    next(error); // Pasar el error al siguiente middleware
  }
};

export const updateUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  const data: UserToUpdate = req.body;
  console.log(req.body.phone);
  const errors = [];

  const validators = {
    cc: isCcValid,
    address: isAddressValid,
    // phone: isPhoneValid,
    gender: isGenderValid,
    ce: isCeValid,
  };

  for (const field in data) {
    if (field in validators) {
      const handler = validators[field];
      const error = handler(req, res);
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
