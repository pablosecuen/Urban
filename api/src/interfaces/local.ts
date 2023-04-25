export interface Local {
  id: string;
  name: string;
  adress: string;
  email: string;
  password: string;
  payments: string[]; // provisional
  history: string[]; // provisional
  img: string;
  products: string[];
  state: boolean;
}

// Omit copia la interface omitiendo las propiedades especificadas
export interface LocalToRegister
  extends Omit<Local, "id" | "payments" | "history" | "products" | "state"> {}

// Partial hace que las props extendidas sean opcionales
export interface LocalToUpdate extends Partial<LocalToRegister> {}
