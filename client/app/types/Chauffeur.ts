export interface Chauffeur {
  DNI: string;
  address: string;
  deleted: boolean;
  email: string;
  history: {
    travels: string[];
  };
  img: string;
  license: string;
  name: string;
  ownerState: boolean;
  password: string;
  payments: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  };
  phone: string;
  vehicle: {
    patent: string;
    vehicleId: string;
  };
}

export interface ChauffeurFilters {
  name?: string;
  id?: string;
  cc?: string;
  ce?: string;
  patent?: string;
}
export interface FilteredChauffeurs {
  chauffeurs: Chauffeur[];
  currentPage: number;
  totalPages: number;
  activeFilters: ChauffeurFilters | null;
}
export type ChauffeurQueryParams = {
  name?: string;
  id?: string;
  cc?: string;
  ce?: string;
  patent?: string;
};
