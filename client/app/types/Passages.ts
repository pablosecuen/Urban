interface PassageToRegister {
  id: string;
  duration: string;
  numberSeat: number;
  createdAt: string;
  deleted: boolean;
  price: number;
  origin: string;
  destination: string;
  description: string;
  departureDate: string;
  stock: number;
  arrivalDate: string;
  status: boolean;
}
// export interface PassageToRegister {
//   origin: string;
//   stock: number;
//   destination: string;
//   description: string;
//   departureDate: string;
//   arrivalDate: string;
//   duration: string;
//   price: number;
//   numberSeat: number;
//   createdAt: string
// }
export interface Passage extends PassageToRegister {
  deleted: boolean;
  status: boolean;
  id: string;
}


export interface PassageToUpdate extends Partial<PassageToRegister> {
  updatedAt: string;
}
