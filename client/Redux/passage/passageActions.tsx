import { Passage, PassageResponse } from "@component/app/types/Passages";
import { QueryParams } from "@component/app/types/QueryParams";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllPassages = createAsyncThunk<PassageResponse[], void>(
  "passage/getAllPassages",
  async () => {
    const response = await axios.get("http://localhost:3000/passage?page=1&pageSize=10000");
    return response.data.passages;
  }
);

export const getPassagesId = createAsyncThunk<Passage, string>(
  "passage/getPassagesId",
  async (id: string) => {
    const response = await axios.get(`http://localhost:3000/passage/${id}`);
    console.log(response.data);

    return response.data;
  }
);

export const getPassagesByQuery = createAsyncThunk<PassageResponse[], QueryParams, {}>(
  "passage/fetchPassagesByQuery",
  async (queryParams: QueryParams) => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    const response = await axios.get(
      `http://localhost:3000/passage?page=1&pageSize=10000&${urlSearchParams.toString()}`
    );
    return response.data;
  }
);
