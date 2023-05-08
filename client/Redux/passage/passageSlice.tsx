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
      .addMatcher(
        (action) => [getAllPassages.pending, getPassagesId.pending, getPassagesByQuery.pending].includes(action.type),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => [getAllPassages.fulfilled, getPassagesByQuery.fulfilled].includes(action.type),
        (state, action) => {
          state.status = "succeeded";
          state.allPassages = action.payload;
        }
      )
      .addMatcher(
        (action) => getPassagesId.fulfilled.match(action),
        (state, action) => {
          state.status = "succeeded";
          state.passageById = action.payload;
        }
      )
      .addMatcher(
        (action) => [getAllPassages.rejected, getPassagesId.rejected, getPassagesByQuery.rejected].includes(action.type),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload as string;
        }
      );
  },
});


export default passageSlice.reducer;
