import { Payment } from "./chauffeur";
import { TypeVehicle } from "../types/types";
export interface DistributorToRegister {
  name: string;
  address: string;
  email: string;
  password: string;
  img: string;
  vehicleType: TypeVehicle;
  vehiclePatent?: string;
  DNI: string;
  license?: string;
  creadteAt: Date,
}

export interface Distributor extends DistributorToRegister {
  payments: Payment[];
  history: string[];
  deleted: boolean;
}

export interface DistributorToUpdate extends Partial<DistributorToRegister> {
  payments?: Payment;
  updateAt: Date,
  deleteAt: Date,
}
