export interface VehicleToRegister {
  patent: string;
  brand: string;
  model: string;
  year: string;
  img: string[];
  ownerId: string;
  chauffeurId: string;
  creadteAt: Date,  
}

export interface Vehicle extends VehicleToRegister {
  deleted?: boolean;
}

export interface VehicleToUpdate extends Partial<Vehicle> {
  updateAt: Date,
  deleteAt: Date,
}
