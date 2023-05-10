import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Ticket } from "@component/app/types/Ticket";

export const getTicketsByUserId = createAsyncThunk<Ticket[], string>(
  "tickets/getTicketByUserId",
  async (userId) => {
    const response = await axios.get(`http://localhost:3000/ticket/user/${userId}`);
    return response.data.tickets;
  }
);
