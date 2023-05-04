import { TicketStatus } from "../types/types";

export interface TicketToRegister {
  userId: string;
  passageId: string;
}

export interface Ticket extends TicketToRegister {
  status: TicketStatus;
  createdAt: string;
  updateAt: string;
}

export interface TicketToUpdate {
  status: TicketStatus;
}
