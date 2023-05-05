import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllUsers = async () => {
  const response = await axios.get("http://localhost:3000/user?page=1&pageSize=1000");
  return response;
};

export const getUserById = createAsyncThunk("users/getUserById", async (id: string) => {
  const response = await fetch(`/api/user/${id}`);
  const data = await response.json();
  return data;
});

export const getUserByName = createAsyncThunk("users/getUserName", async (name: string) => {
  const response = await fetch(`/api/users?name=${name}`);
  const data = await response.json();
  return data;
});

