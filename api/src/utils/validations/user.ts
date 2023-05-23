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
import createHttpError from "http-errors";
import Joi from "joi";

const messages = {
  "string.base": "El valor debe ser una cadena de texto",
  "string.email": "El correo electrónico no es válido",
  "string.max": "El valor no puede tener más de {#limit} caracteres",
  // Agrega aquí otros mensajes personalizados para las validaciones que necesites
};

export const newUserValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: UserToRegister = req.body;

    const schema = Joi.object({
      firstName: Joi.string().required().max(50).messages(messages),
      lastName: Joi.string().required().max(50).messages(messages),
      password: Joi.string().required().messages(messages),
      email: Joi.string().email().required().messages(messages),
    });

    const { error } = schema.validate(data);
    if (error) {
      throw createHttpError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
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
