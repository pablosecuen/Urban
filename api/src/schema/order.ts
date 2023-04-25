interface Order {
  userId: string;
  distributorId: string;
  localId: string;
  date: string;
  price: number;
  destination: string;
  status: boolean;
  order: OrderStatus;
}

export default Order;
