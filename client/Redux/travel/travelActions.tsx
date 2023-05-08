import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryParams } from "@component/app/types/QueryParams";
import { Travel } from "@component/app/types/Travels";

// Define async thunk actions to fetch user data
export const getAllTravels = createAsyncThunk("travels/getAllTravels", async () => {
  const response = await axios.get("http://localhost:3000/travels?page=1&pageSize=10000");
  return response.data; // return only the data from the response
});

export const getTravelsById = createAsyncThunk("travels/getTravelsById", async (id: string) => {
  const response = await fetch(`/api/travels/${id}`);
  const data = await response.json();
  return data;
});

export const getTravelsByQuery = createAsyncThunk<Travel[], QueryParams, {}>(
  "passage/fetchPassagesByQuery",
  async (queryParams: QueryParams) => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    const response = await axios.get(
      `http://localhost:3000/travels?page=1&pageSize=10000&${urlSearchParams.toString()}`
    );
    return response.data;
  }
);
