import { TravelStatus } from "../types/types";

export interface Travel {
  userId: string;
  chauffeurId: string;
  origin: string;
  destination: string;
  price: number;
  status: boolean;
  travel: TravelStatus;
}

export interface TravelToUpdate {
  travel?: TravelStatus;
}
