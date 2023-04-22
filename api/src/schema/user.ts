interface User {
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
    searches: string[];
  };
  img: string;
  DNI: string;
}

export default User