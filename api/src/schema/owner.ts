export interface OwnerToRegister {
  name: string;
  email: string;
  phone: string;
  DNI: string;
  vehiclesId: string[];
  creadteAt: Date,
}

export interface Owner extends OwnerToRegister {
  adress?: string;
  deleted?: boolean;
  updateAt: Date,
  deleteAt: Date,
}

export interface OwnerToUpdate extends Partial<OwnerToRegister> { }
