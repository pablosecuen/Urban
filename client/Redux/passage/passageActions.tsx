import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllPassages = async () => {
  const response = await axios.get("http://localhost:3000/passage?page=1&pageSize=10000");
  return response;
};

export const getPassagesId = async (id:any) => {
  const response = await axios.get(`http://localhost:3000/passage/${id}`);
  return response;
};

type QueryParams = {
  destination?: string;
  origin?: string;
  price?: number;
  departureDate?: string;
  arrivalDate?: string;
}

export const getPassagesByQuery = async (queryParams: QueryParams) => {
  const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
  const response = await axios.get(`http://localhost:3000/passage?page=1&pageSize=10000&${urlSearchParams.toString()}`);
  console.log(response.data.passages);
  return response.data;
}



