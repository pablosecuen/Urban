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
}

export interface TravelToUpdate {
  order?: OrderStatus;
}