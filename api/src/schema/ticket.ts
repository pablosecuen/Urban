import { TicketStatus } from "../types/types";

export interface TicketToRegister {
  userId: string;
  passageId: string;
  price: number;
  quantity: number;
}

export interface Ticket extends TicketToRegister {
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
}

export interface TicketToUpdate {
  status: TicketStatus;
}
