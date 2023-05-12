import { Passage } from "@component/app/types/Passages";
import { createSlice } from "@reduxjs/toolkit";
import { getPassagesIdForPayment } from "./paymentActions";



interface PassageState {
  payment: Passage[];
  passageById: Passage[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PassageState = {
    payment: [],
    passageById: [],
    status: "idle",
    error: null
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
    // Handle the pending state
    .addCase(getPassagesIdForPayment.pending, (state) => {
      state.status = "loading";
    })
    // Handle the success state
    .addCase(getPassagesIdForPayment.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.passageById = action.payload;
    })
    // Handle the error state

    .addCase(getPassagesIdForPayment.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export default paymentSlice.reducer;
