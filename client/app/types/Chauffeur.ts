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