export interface User {
  name: string;
  address: string;
  email: string;
  password: string;
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
}

export interface UserToRegister
  extends Omit<User, 'address' | 'history' | 'img' | 'DNI'> {
  address: string;
  img: string;
  DNI: string;
}
