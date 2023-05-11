import { TicketStatus } from "@component/../api/src/types/types";
import { Passage } from "./Passages";


export interface TicketToRegister {
  userId: string;
  passageId: string;
  price: number
}

export interface Ticket extends TicketToRegister {
  passageInfo: Passage;
  id: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
}

export interface TicketToUpdate {
  status: TicketStatus;
}
