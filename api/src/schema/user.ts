export interface UserToRegister {
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User extends UserToRegister {
  adress: string;
  payments: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  };
  history: {
    orders: string[];
    travels: string[];
  };
  img: string;
  DNI: string;
  deleted: boolean;
}

export interface UserToUpdate extends Partial<UserToRegister> {
}
