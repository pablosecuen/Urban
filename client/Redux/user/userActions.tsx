import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get("http://localhost:3000/user?page=1&pageSize=1000");
  return response.data.users;
});

export const getUserById = createAsyncThunk("users/getUserById", async (id: string) => {
  const response = await axios.get(`http://localhost:3000/user/${id}`);
  return response.data.user;
});

export const getUsersByName = createAsyncThunk("users/getUsersByName", async (name: string) => {
  const response = await axios.get(`http://localhost:3000/user?name=${name}`);
  return response.data.users;
});

export const getUsersByCc = createAsyncThunk("users/getUsersByCc", async (cc: string) => {
  const response = await axios.get(`http://localhost:3000/user?dni=${cc}`);
  return response.data.users;
});

export const getUsersByEmail = createAsyncThunk("users/getUsersByEmail", async (email: string) => {
  const response = await axios.get(`http://localhost:3000/user?email=${email}`);
  return response.data.users;
});
