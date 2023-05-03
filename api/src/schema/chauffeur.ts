import { Payment } from "../types/types";

export interface ChauffeurToRegister {
  name: string;
  email: string;
  password: string;
  phone: string;
  DNI: string;
  license: string;
  address: string;
}

export interface Chauffeur extends ChauffeurToRegister {
  deleted: boolean;
  ownerState: boolean;
  vehicle: VehicleForChauffeur;
  payments: Payment[];
  img: string;
  history?: string[];
}
export interface ChauffeurToUpdate extends Partial<ChauffeurToRegister> {
  vehicle: VehicleForChauffeur;
  payments: Payment;
}

export interface VehicleForChauffeur {
  vehicleId: string;
  patent: string;
}