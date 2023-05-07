import { Passage } from "@component/app/types/Passages";
import { QueryParams } from "@component/app/types/QueryParams";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllPassages = createAsyncThunk<Passage[], void, {}>("passage/getAllPassages", async () => {
  const response = await axios.get("http://localhost:3000/passage");
  return response.data.passages;
})

export const getPassagesId = createAsyncThunk<Passage | null, string, {}>("passage/getPassagesId", async (id: string) => {
    const response = await axios.get(`http://localhost:3000/passage/${id}`);
    return response.data;
})

export const getPassagesByQuery = createAsyncThunk<Passage[], QueryParams, {}>("passage/fetchPassagesByQuery", async (queryParams: QueryParams) => {
  const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
  const response = await axios.get(
    `http://localhost:3000/passage?page=1&pageSize=10000&${urlSearchParams.toString()}`
  );
  console.log(response.data.passages);
  return response.data;
})

