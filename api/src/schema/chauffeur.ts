interface Chauffeur {
  name: string;
  address: string;
  email: string;
  password: string;
  payments: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  };
  history: string[];
  img: string;
  DNI: string;
  license: string;
  vehicle: {
    vehicleId: string;
    patent: string;
  };
  ownerState: boolean;
}

export default Chauffeur;
