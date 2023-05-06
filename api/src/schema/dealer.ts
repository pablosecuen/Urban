import { Address, Payment, Phone, TypeVehicle } from "../types/types";
export interface DealerToRegister {
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
  rating: number,
}
export interface Dealer extends DealerToRegister {
  displayName: string,
  license: string;
  payments: Payment;
  vehicle: VehicleForDealer
  history: string[];
  deleted: boolean;
  status: boolean,
  createdAt: string;
  rating: number,
  comments: object[],
}

export interface DealerToUpdate {
  img: string,
  phone: Phone;
  license: string;
  address: Address,
  payments: Payment;
  vehicleType?: TypeVehicle;
  updatedAt: string;
  status?: boolean,
  rating: number,
}

export interface VehicleForDealer {
  vehicleId: string,
  patent: string,
}