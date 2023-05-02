export interface BusDriverToRegister {
  name: string;
  DNI: number;
  license: string;
}

export interface BusDriver {
  name: string;
  DNI: number;
  license: string;
  deleted: boolean;
}
