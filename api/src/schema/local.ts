export interface LocalToRegister {
  name: string;
  adress: string;
  email: string;
  password: string;
  img: string;
}

export interface Local extends LocalToRegister {
  id: string;
  payments: string[]; //provisional
  history: string[]; //provisional
  products: string[]; //provisional
  state: boolean;
}

// Partial hace que las props extendidas sean opcionales
export interface LocalToUpdate extends Partial<LocalToRegister> {}
