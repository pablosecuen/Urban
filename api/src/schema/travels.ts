export interface Travel {
    userId: string;
    chauffeurId: string;
    date: Date;
    origin: string;
    destination: string;
    price: string;
    status: boolean;
    travel: TravelStatus;
}

export interface TravelToUpdate {
    travel?: TravelStatus;
}



