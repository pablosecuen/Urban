import { createSlice } from "@reduxjs/toolkit";
import { getAllPassages, getPassagesByQuery, getPassagesId } from "./passageActions";
import {  PassageToRegister, PassageResponse } from "../../app/types/Passages";
import { AxiosResponse } from "axios";

interface PassageState {
  allPassages: PassageResponse ;
  allPassagesByQuery: PassageResponse;
  passageById: { [key: string]: PassageToRegister | null };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PassageState = {
  allPassages: { passages: [], totalPages: 0 },
  allPassagesByQuery: { passages: [], totalPages: 0 },
  passageById: {},
  status: "idle",
  error: null,
};

type ResponseType = AxiosResponse<any, any>;

const passageSlice = createSlice({
  name: "passages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Handle the pending state
      .addCase(getAllPassages.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state

      .addCase(getAllPassages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPassages = action.payload;
      })

      // Handle the error state

      .addCase(getAllPassages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });


    builder
      // Handle the pending state
      .addCase(getPassagesId.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getPassagesId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.passageById[action.payload.id] = action.payload;
      })
      // Handle the error state

      .addCase(getPassagesId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

    builder
      // Handle the pending state
      .addCase(getPassagesByQuery.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getPassagesByQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPassagesByQuery = {
          passages: action.payload.passages,
          totalPages: action.payload.totalPages,
        };
      })
      // Handle the error state

      .addCase(getPassagesByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default passageSlice.reducer;
