export interface DistributorToRegister {
  name: string;
  address: string;
  email: string;
  password: string;
  img: string;
  vehicle: string;
  DNI: string;
  license: string;
}

export interface Distributor extends DistributorToRegister {
  payments: Object[]; //provisional
  history: string[];
  deleted: boolean;
}

export interface DistributorToUpdate extends Partial<DistributorToRegister> {
  payments: Object[];
}
