export interface Travel {
  id: string;
  date: string;
  userId: string;
  destination: string;
  travel: TravelStatus;
  price: string;
  status: boolean;
  chauffeurId: string;
  origin: string;
}
export interface Data {
  travels: Travel[];
}

export enum TravelStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELED = "canceled",
}

export type Status = {
  [key in TravelStatus]: JSX.Element;
};


