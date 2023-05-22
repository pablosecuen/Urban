import { TicketStatus } from "../types/types";

export interface TicketToRegister {
  userId: string;
  passageId: string;
  price: number;
  quantity: number;
  numberSeat: string[];
  paymentId: number;
  merchantOrden: number;
  statusMp: string;
  passengersData: [{}];
}

export interface Ticket extends TicketToRegister {
  status: TicketStatus;
  reviewSent: Boolean;
  createdAt: string;
  updatedAt: string;
  passengersData: [{}];
}

export interface TicketToUpdate {
  status: TicketStatus;
}
