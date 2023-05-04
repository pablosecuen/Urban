import { OrderStatus } from "../types/types";

export interface Order {
  userId: string;
  distributorId: string;
  productId: string;
  localId: string;
  date: string;
  price: number;
  destination: string;
  status: boolean;
  order: OrderStatus;
  createAt?: string,
}

export interface OrderToUpdate {
  order?: OrderStatus;
  updateAt?: string;
}
