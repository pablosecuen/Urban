import { Address, Payment, Phone } from "../types/types";

export interface ChauffeurToRegister {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: Phone,
  nationality: string,
  birthday: string,
  gender: string,
  cc?: string,
  ce?: string,
  passport?: string,
  license: string,
  img: string,
  typeChauffeur: string,
  address: Address,
  occupation: string,
}

export interface Chauffeur extends ChauffeurToRegister {
  payments: Payment,
  history: string[],
  ownerState: boolean,
  vehicle: VehicleForChauffeur,
  deleted: boolean,
  status: boolean,
  displayName: string,
  createAt: string;
  rating: number,
}

export interface ChauffeurToUpdate {
  typeChauffeur?: string,
  license?: string,
  occupation?: string,
  address?: Address,
  phone?: Phone,
  vehicle?: VehicleForChauffeur,
  payments?: Payment,
  updateAt: string;
  rating: number,
  status?: boolean,
}

export interface VehicleForChauffeur {
  vehicleId: string,
  patent: string,
}