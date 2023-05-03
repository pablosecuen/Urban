export interface BusDriverToRegister {
  name: string;
  DNI: number;
  license: string;
  creadteAt: Date,
}

export interface BusDriver {
  name: string;
  DNI: number;
  license: string;
  deleted: boolean;
  creadteAt: Date,
  updateAt: Date,
  deleteAt: Date,
}
