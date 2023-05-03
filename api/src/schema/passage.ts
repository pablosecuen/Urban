export interface PassageToRegister {
  destination: string,
  stock: number,
  stop: string,
  description: string,
  departureDate: string,
  arrivalDate: string,
  duration: string,
  price: number,
  creadteAt: Date,
}

export interface Passage extends PassageToRegister {
  deleted: boolean,
  status: boolean,
}

export interface PassageToUpdate extends Partial<PassageToRegister> {
  updateAt: Date,
  deleteAt: Date,
}