import { Address, Payment, Phone, TypeVehicle } from "../types/types";
export interface DistributorToRegister {
  firstName: string,
  lastName: string,
  displayName: string,
  email: string;
  password: string;
  phone: Phone;
  nationality: string,
  birthday: string,
  cc?: string;
  ce?: string;
  passport?: string;
  img: string,
  address: Address,
}
export interface Distributor extends DistributorToRegister {
  license: string;
  payments: Payment;
  vehicleType?: TypeVehicle;
  history: string[];
  deleted: boolean;
}

export interface DistributorToUpdate {
  phone: Phone;
  license: string;
  address: Address,
  payments: Payment;
  vehicleType?: TypeVehicle;
}

