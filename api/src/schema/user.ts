import { Address, Payment, Phone } from "../types/types";

export interface UserToRegister {
  firstName: string,
  lastName: string,
  displayName: string,
  email: string,
  password: string,
}
export interface User extends UserToRegister {
  addres: Address
  payments: Payment[];
  history: {
    orders: string[];
    travels: string[];
  };
  phone: Phone,
  nationality: string,
  birthday: string,
  gender: string,
  img: string;
  cc?: string;
  ce?: string,
  deleted: boolean,
  createAt: string,
  updateAt: string,
}

export interface UserToUpdate{
  addres?: Address,
  phone?: Phone,
  img?: string,
  gender?: string
  payments?: Payment[],
}
