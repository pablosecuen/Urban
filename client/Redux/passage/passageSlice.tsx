import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { getAllPassages, getPassagesByQuery, getPassagesId } from "./passageActions";
import { Passage } from "../../app/types/Passages";
import { AxiosResponse } from "axios";
import { QueryParams } from "@component/app/types/QueryParams";

interface PassageState {
  allPassages: Passage[];
  passageById: Passage | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null; 
}

const initialState: PassageState = {
  allPassages: [],
  passageById: null,
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
      .addCase(getAllPassages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllPassages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPassages = action.payload;
      })
      .addCase(getAllPassages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

      builder
      .addCase(getPassagesId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPassagesId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.passageById = action.payload;
      })
      .addCase(getPassagesId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

      builder
      .addCase(getPassagesByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPassagesByQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPassages = action.payload;
      })
      .addCase(getPassagesByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default passageSlice.reducer;
