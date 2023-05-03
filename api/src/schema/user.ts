export interface UserToRegister {
  name: string;
  email: string;
  password: string;
  creadteAt: Date,
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
  updateAt: Date,
  deleteAt: Date,
}

export interface UserToUpdate extends Partial<UserToRegister> {
  updateAt: Date,
  deleteAt: Date,
}
