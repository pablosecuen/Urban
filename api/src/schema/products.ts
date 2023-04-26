export interface Products {
  name: string;
  price: string;
  description: string;
  stock: number;
  type: TypeProduct;
  localId: string[];
  img: string;
  deleted: boolean;
}

export interface ProductsToUpdate extends Partial<Products> {
  deleted?: boolean;
  name?: string;
  price?: string;
  description?: string;
  stock?: number;
  img?: string;
}