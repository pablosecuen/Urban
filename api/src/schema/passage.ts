export interface PassageToRegister {
  origin: string,
  stock: number,
  destination: string,
  description: string,
  departureDate: string,
  arrivalDate: string,
  duration: string,
  img: string,
  price: number,
  createAt: Date
}

export interface Passage extends PassageToRegister {
  deleted: boolean,
  status: boolean,
}

export interface PassageToUpdate extends Partial<PassageToRegister> {
}