export interface Products {
  name: string;
  price: number;
  description: string;
  stock: number;
  type: TypeProduct;
  localId: string;
  img: string;
}

export interface ProductsToUpdate extends Partial<Products> {
  deleted: boolean;
}
