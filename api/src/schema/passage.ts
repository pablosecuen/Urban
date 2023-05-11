export interface PassageToRegister {
  origin: string;
  stock: number;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  duration: string;
  img: string;
  price: number;
  numberSeat: number;
  arrivalTime: string;
  departureTime: string;
  createdAt: string;
}
export interface Passage extends PassageToRegister {
  deleted: boolean;
  status: boolean;
}

export interface PassageToUpdate extends Partial<PassageToRegister> {
  updatedAt: string;
}
