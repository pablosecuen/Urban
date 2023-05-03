import { Request, Response, NextFunction } from "express";
import { Products, ProductsToUpdate } from "../../schema/products";
import {
  isDescriptionValid,
  isImgValid,
  isLocalIdValid,
  isNameValid,
  isPriceValid,
  isProductTypeValid,
  isStockValid,
} from "./validators";

export const newProductValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: Products = req.body;
    if (
      !data.name ||
      !data.price ||
      !data.description ||
      !data.img ||
      !data.type ||
      !data.stock ||
      !data.localId
    )
      throw Error("Datos incompletos");
    if (
      !isNameValid(data.name) ||
      !isDescriptionValid(data.description) ||
      !isImgValid(data.img) ||
      !isProductTypeValid(data.type) ||
      !isStockValid(data.stock) ||
      // !isPriceValid(data.price) ||
      !isLocalIdValid(data.localId)
    ) {
      throw new Error("Datos no validos");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const updateProductValidated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: ProductsToUpdate = req.body;
    const allowProperties = ["name", "price", "description", "img", "type", "stock", "deleted"];
    if (Object.keys(data).some((key) => !allowProperties.includes(key)))
      throw Error("Datos no permitidos");
    if (
      (data?.name && !isNameValid(data.name)) ||
      (data?.description && !isDescriptionValid(data.description)) ||
      (data?.img && !isImgValid(data.img)) ||
      (data?.type && !isProductTypeValid(data.type)) ||
      (data?.stock && !isStockValid(data.stock)) ||
      (data?.localId && !isLocalIdValid(data.localId)) ||
      (data?.price && !isPriceValid(data.price))
    ) {
      throw new Error("Datos incompletos o no válidos");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
