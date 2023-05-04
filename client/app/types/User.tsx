import { Address, Payment, Phone } from "../../../api/src/types/types.d";

export interface UserToRegister {
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface userData {
  name: string;
  img: string;
  email: string;
  adress: string;
}
export interface User extends UserToRegister {
  address: Address;
  payments: Payment[];
  history: {
    orders: string[];
    travels: string[];
  };
  phone: Phone;
  nationality: string;
  birthday: string;
  gender: string;
  img: string;
  cc?: string;
  ce?: string;
  deleted: boolean;
  createAt?: Date;
  id: string;
}

export interface UserToUpdate extends Partial<UserToRegister> {}
