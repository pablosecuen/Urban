import { TravelStatus } from "../types/types";

export interface Travel {
  userId: string;
  chauffeurId: string;
  creadteAt: Date,
  origin: string;
  destination: string;
  price: string;
  status: boolean;
  travel: TravelStatus;
}

export interface TravelToUpdate {
  travel?: TravelStatus;
  updateAt: Date,
  deleteAt: Date,
}
