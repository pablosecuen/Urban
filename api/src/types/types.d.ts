export type TravelStatus = "pending" | "progress" | "finished" | "rejected";

export type OrderStatus = "pending" | "progress" | "finished" | "rejected";

export type TypeProduct = "food" | "drink" | "snack" | "other" | "all";

export type TypeVehicle = "motorcycle" | "car" | "bicycle" | "van" | "other" | "false";

export type TicketStatus = "pending" | "acepted" | "canceled";

export type Payment = {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
};

export type Address = {
    postalCode: string,
    location: string,
    state: string,
    street: string,
    number: string,
    department: string,
}

export type Phone = {
    areaCode: string,
    number: string,
    displayPhone: string,
}
