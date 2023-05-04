import { Address, Payment, Phone, TypeVehicle } from "../types/types";
export interface DistributorToRegister {
  firstName: string,
  lastName: string,
  address: Address,
  email: string;
  password: string;
  phone: Phone;
  nationality: string,
  birthday: string,
  cc?: string;
  ce?: string;
  passport?: string;
  license: string;
  img: string,
}
export interface Distributor extends DistributorToRegister {
  displayName: string,
  license: string;
  payments: Payment;
  vehicleType?: TypeVehicle;
  history: string[];
  deleted: boolean;
  status: boolean,
  createAt: Date;
}

export interface DistributorToUpdate {
  img: string,
  phone: Phone;
  license: string;
  address: Address,
  payments: Payment;
  vehicleType?: TypeVehicle;
  updateAt: Date;
}

