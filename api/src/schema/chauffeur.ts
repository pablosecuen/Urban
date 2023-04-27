export interface ChauffeurToRegister {
  name: string;
  email: string;
  password: string;
  phone: string;
  DNI: string;
  license: string;
  address: string;
}

export interface Chauffeur extends ChauffeurToRegister {
  deleted: boolean;
  ownerState: boolean;
  vehicle: {
    vehicleId: string;
    patent: string;
  };
  payments: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  };
  img: string;
  history?: string[];
}

export interface ChauffeurToUpdate extends Partial<ChauffeurToRegister> {

}
