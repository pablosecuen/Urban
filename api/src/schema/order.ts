import { OrderStatus } from "../types/types";

export interface Order {
  userId: string;
  dealersId: string;
  productId: string;
  localId: string;
  date: string;
  price: number;
  destination: string;
  status: boolean;
  order: OrderStatus;
  createdAt: string,
}

export interface OrderToUpdate {
  order?: OrderStatus;
  updatedAt?: string;
}
