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
export type LocalToRegister = Omit<Local, "id" | "payments" | "history" | "products" | "state">;
