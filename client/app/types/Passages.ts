
export interface Passage  {
  id: string;
  origin: string;
  destination: string;
  description: string;
  duration: string;
  arrivalDate: string;
  departureDate: string;
  departureTime: string;
  
  numberSeat: number;
  price: number;
  stock: number;
  img: string;
  
  createdAt: string;
  deleted: boolean;
  status: boolean;
}

export interface PassageResponse   {
  passages: Passage[];
  totalPages: number;
  
}
export interface PassageToRegister extends Passage {

  departureTime: string;

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

