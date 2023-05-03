export interface BusDriverToRegister {
  name: string;
  DNI: string;
  license: string;
}

export interface BusDriver {
  name: string;
  DNI: string;
  license: string;
  deleted: boolean;
}
