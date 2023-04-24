interface Order {
  userId: string;
  distributorID: string;
  localId: string;
  date: string;
  price: number;
  destination: string;
  Status: boolean;
  Order: OrderStatus;
}

export default Order;
