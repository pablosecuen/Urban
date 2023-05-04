import { TravelStatus } from "../types/types";

export interface Travel {
  userId: string;
  chauffeurId: string;
  origin: string;
  destination: string;
  price: number;
  status: boolean;
  travel: TravelStatus;
  createAt: string,
}

export interface TravelToUpdate {
  travel?: TravelStatus;
  updateAt?: string;
}
