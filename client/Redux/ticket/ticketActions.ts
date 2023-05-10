import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Ticket } from "@component/app/types/Ticket";

export const getTicketsByUserId = createAsyncThunk<Ticket[], string>(
  "tickets/getTicketByUserId",
  async (userId: string) => {
    const response = await axios.get(`http://localhost:3000/ticket/user/${userId}`);
    return response.data.tickets;
  }
);

export const getTicketById = createAsyncThunk<Ticket, string>(
  "tickets/getTicketById",
  async (id: string) => {
    const response = await axios.get(`http://localhost:3000/ticket/${id}`);
    return response.data.ticket;
  }
);
