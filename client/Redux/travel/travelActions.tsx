import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Define async thunk actions to fetch user data
export const getAllTravels = async () => {
  const response = await axios.get("http://localhost:3000/travels?page=1&pageSize=10000");
  return response;
};

export const getTravelsById = createAsyncThunk("travels/getTravelsById", async (id: string) => {
  const response = await fetch(`/api/travels/${id}`);
  const data = await response.json();
  return data;
});
