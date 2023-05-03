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

// 
export interface Passages {
  id: string,
  duration: string,
  deleted: boolean,
  price: number,
  origin: string,
  destination: string,
  description: string,
  departureDate: string,
  stock: number,
  arrivalDate: string,
  status: true
}
