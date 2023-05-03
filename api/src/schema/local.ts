export interface LocalToRegister {
  name: string;
  address: string;
  email: string;
  password: string;
  img: string;
}

export interface Local extends LocalToRegister {
  payments: Object[]; //provisional
  history: string[];
  state: boolean;
  deleted: boolean;
}

// Partial hace que las props extendidas sean opcionales
export interface LocalToUpdate extends Partial<LocalToRegister> {
  payments: Object[]; // provisional
}
