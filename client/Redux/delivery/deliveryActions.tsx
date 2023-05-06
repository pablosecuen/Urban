import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Distributor } from "../../app/types/Distributor";

// Define async thunk actions to fetch user data
// export const getAllUsers = async () => {
//   const response = await axios.get("http://localhost:3000/user?page=1&pageSize=1000");
//   return response;
// };

export const getAllDeliveries = createAsyncThunk<Distributor[], void>(
  "delivery/getAllDeliveries",
  async () => {
    const response = await axios.get(`http://localhost:3000/distributor?page=1&pageSize=1000`);
    return response.data.distributors;
  }
);

export const getDeliveryById = createAsyncThunk<Distributor, string>(
  "delivery/getDeliveryById",
  async (userId) => {
    const response = await axios.get(`http://localhost:3000/distributor/${userId}`);
    return response.data;
  }
);

export const getDeliveryByName = createAsyncThunk(
  "delivery/getDeliveryByName",
  async (name: string) => {
    const response = await axios.get(`http://localhost:3000/distributor?name=${name}`);
    return response.data.distributors;
  }
);

export const getDeliveryByCc = createAsyncThunk("delivery/getUsersByCc", async (cc: string) => {
  const response = await axios.get(`http://localhost:3000/distributor?cc=${cc}`);
  return response.data.distributors;
});

export const getDeliveryByEmail = createAsyncThunk(
  "delivery/getDeliveryByEmail",
  async (email: string) => {
    const response = await axios.get(`http://localhost:3000/distributor?email=${email}`);
    return response.data.distributors;
  }
);
