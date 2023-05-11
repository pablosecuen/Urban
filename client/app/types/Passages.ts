export interface PassageToRegister {
  id: string;
  duration: string;
  numberSeat: number;
  createdAt: string;
  deleted: boolean;
  price: number;
  origin: string;
  destination: string;
  description: string;
  departureDate: string;
  stock: number;
  arrivalDate: string;
  status: boolean;
}

export interface PassageResponse {
  passages: PassageToRegister[];
  totalPages: number;
}

export interface Passage extends PassageToRegister {
  deleted: boolean;
  status: boolean;
  id: string;
}

export interface PassageToUpdate extends Partial<PassageToRegister> {
  updatedAt: string;
}

export interface Query {

  origin: string,
  destination: string,
  departureDate: string,
  arrivalDate?: string,
  price?: number,
}

export interface CardProfilePropsPassage {
  selectedPassage: Passage | null;  
}

