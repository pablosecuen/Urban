import { Address, Phone } from "../types/types";

export interface OwnerToRegister {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phone: Phone;
  address: Address;
  cc: string;
  ce?: string;
  vehiclesId?: string[];
  createAt?: Date;
}

export interface Owner extends OwnerToRegister {
  address: Address;
  deleted?: boolean;
}

export interface OwnerToUpdate {
  firstName?: string;
  lastName?: string;
  displayName?: string;
  email?: string;
  phone?: Phone;
  address?: Address;
  cc?: string;
  ce?: string;
  vehiclesId?: string[];
  updateAt?: Date;
}
