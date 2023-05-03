export interface LocalToRegister {
  name: string;
  adress: string;
  email: string;
  password: string;
  img: string;
  createAt: Date,
}

export interface Local extends LocalToRegister {
  payments: Object[]; //provisional
  history: string[];
  state: boolean;
  deleted: boolean;
  updateAt: Date,
  deleteAt: Date,
}

// Partial hace que las props extendidas sean opcionales
export interface LocalToUpdate extends Partial<LocalToRegister> {
  payments: Object[]; // provisional
}
