export interface Passage {
    id: string,
    duration: string,
    deleted: boolean,
    price: number,
    origin: string,
    destination: string,
    description: string,
    departureDate: string,
    stock: number,
    arrivalDate: string,
    status: true
  }
  
  export interface Passages {
    passages: Passage[];
  }
  