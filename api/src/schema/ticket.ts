import { TypeTicket } from "../types/types";

export interface TicketToRegister {
  userId: string;
  passageId: string;
  type: TypeTicket;
  createdAt: Date;
}

export interface Ticket extends TicketToRegister {
  deleted: boolean;
  status: boolean;
  updateAt: Date;
  deleteAt: Date;
}

export interface TicketToUpdate extends Partial<TicketToRegister> {}
