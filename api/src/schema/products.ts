import { TypeProduct } from "../types/types";

export interface Products {
  name: string;
  price: number;
  description: string;
  stock: number;
  type: TypeProduct;
  localId: string;
  img: string;
  creadteAt: Date,
}

export interface ProductsToUpdate extends Partial<Products> {
  deleted: boolean
  updateAt: Date,
  deleteAt: Date,
}
