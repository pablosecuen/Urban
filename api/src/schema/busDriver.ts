export interface BusDriverToRegister {
  name: string;
  DNI: string;
  license: string;
  creadteAt: Date,
}

export interface BusDriver {
  name: string;
  DNI: string;
  license: string;
  deleted: boolean;
  creadteAt: Date,
  updateAt: Date,
  deleteAt: Date,
}
