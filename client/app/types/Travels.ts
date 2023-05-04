export enum TravelStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELED = "canceled",
}


export type Status = {
  [key in TravelStatus]: JSX.Element;
};

// 
export interface Passage {
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

export interface Passages {
  passages: Passage[];
}

export interface Travel {
  userId: string;
  chauffeurId: string;
  origin: string;
  destination: string;
  price: number;
  status: boolean;
  travel: TravelStatus;
  createAd: Date;
}

export interface TravelToUpdate {
  travel?: TravelStatus;
  updateAd?: Date;
}
