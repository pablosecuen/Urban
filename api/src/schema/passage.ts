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
  createAt: string
}
export interface Passage extends PassageToRegister {
  deleted: boolean;
  status: boolean;
}


export interface PassageToUpdate extends Partial<PassageToRegister> {
  updateAt: string;
}
