import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";

import { Travel } from "../../app/types/Travels";
import { getAllTravels } from "./travelActions";
import { AxiosResponse } from "axios";

interface TravelState {
  allTravels: Travel[]; // change any[] to your specific type
}

const initialState: TravelState = {
  allTravels: [], // provide an empty array as the initial state value for allUsers
};

type ResponseType = AxiosResponse<any, any>;

export const fetchAllTravels: AsyncThunk<Travel[], void, {}> = createAsyncThunk(
  "travels/fetchAllTravels",
  async () => {
    const response: ResponseType = await getAllTravels();
    return response.data.travels; // return the users array
  }
);

const travelSlice = createSlice({
  name: "travels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTravels.fulfilled, (state, action) => {
      state.allTravels = action.payload;
    });
  },
});

export default travelSlice.reducer;
