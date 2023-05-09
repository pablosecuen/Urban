import { Address, Payment, Phone } from "../../../api/src/types/types.d";

export interface UserToRegister {
  firstName: string;
  lastName: string;
  name: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface userData {
  firstName: string;
  lastName: string;
  name: string;
  img: string;
  email?: string;
  address?: Address;
}
export interface User extends UserToRegister {
  name: string;
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
