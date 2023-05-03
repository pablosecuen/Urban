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
  creadteAt: Date,
}

export interface OrderToUpdate {
  order?: OrderStatus;
  updateAt: Date,
  deleteAt: Date,
}
