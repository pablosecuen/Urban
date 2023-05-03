export interface BusToRegister {
  patent: string;
  model: string;
  brand: string;
  year: string;
  number_bus: string;
  company: string;
  creadteAt: Date,
  updateAt: Date,
  deleteAt: Date,
  //chauffeurId: string;
}

export interface Bus extends BusToRegister {
  deleted: boolean;
  img: string
  history?: string[];
}

export interface BusToUpdate extends Partial<BusToRegister> {
  updateAt: Date,
  deleteAt: Date,
}
