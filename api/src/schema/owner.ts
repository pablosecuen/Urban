export interface OwnerToRegister {
  name: string;
  email: string;
  phone: string;
  DNI: string;
  vehiclesId: string[];
}

export interface Owner extends OwnerToRegister {
  adress?: string;
  deleted?: boolean;
}

export interface OwnerToUpdate extends Partial<OwnerToRegister> { }
