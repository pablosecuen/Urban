export interface PassageToRegister {
  origin: string;
  stock: number;
  destination: string;
  description: string;
  departureDate: string;
  arrivalDate: string;
  duration: string;
  price: number;
  numberSeat: number;
  createdAt: string
}
export interface Passage extends PassageToRegister {
  deleted: boolean;
  status: boolean;
  id: string;
}


export interface PassageToUpdate extends Partial<PassageToRegister> {
  updatedAt: string;
}
