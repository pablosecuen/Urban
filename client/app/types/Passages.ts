export interface Passage {
  companyId: string;
  companyData: object;
  id: string;
  origin: string;
  destination: string;
  description: string;
  duration: string;
  arrivalDate: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  quantity: number;
  numberSeat: number;
  price: number;
  stock: number;
  img: string;

  createdAt: string;
  deleted: boolean;
  status: boolean;
}

export interface PassagePayload {
  passageId: string;
  quantity: number;
}

export interface PassageResponse {
  passages: Passage[];
  totalPages: number;
}
export interface PassageToRegister extends Passage {
  departureTime: string;
}

export interface PassageToUpdate extends Partial<PassageToRegister> {
  updatedAt: string;
}

export interface CardProfilePropsPassage {
  selectedPassage: Passage | null;
}
