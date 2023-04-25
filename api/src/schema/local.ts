export interface LocalToRegister {
  name: string;
  adress: string;
  email: string;
  password: string;
  img: string;
}

export interface Local extends LocalToRegister {
  payments: string[]; //provisional
  history: string[]; //provisional
  state: boolean;
  deleted: boolean;
}

// Partial hace que las props extendidas sean opcionales
export interface LocalToUpdate extends Partial<LocalToRegister> {
  payments: string[]; // provisional
}
