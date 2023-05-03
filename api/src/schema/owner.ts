export interface OwnerToRegister {
  name: string;
  email: string;
  phone: string;
  cc?: string;
  ce?: string;
  vehiclesId: string[];
}

export interface Owner extends OwnerToRegister {
  address?: string;
  deleted?: boolean;
}

export interface OwnerToUpdate extends Partial<OwnerToRegister> {
  address?: string;
}
