import { createSlice } from "@reduxjs/toolkit";
import { getTicketsByUserId } from "./ticketActions";
import { Ticket } from "@component/app/types/Ticket";

interface TicketState {
  allTickets: Ticket[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TicketState = {
  allTickets: [],
  status: "idle",
  error: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTicketsByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTicketsByUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allTickets = action.payload;
      })
      .addCase(getTicketsByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default ticketSlice.reducer;
