import { createAsyncThunk } from "@reduxjs/toolkit";

// Define async thunk actions to fetch user data
export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await fetch("http://localhost:3000/user?page=1&pageSize=10");
  const data = await response.json();
  console.log(data);
  return data;
});

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

export const getUserByPatent = createAsyncThunk("users/getUserByPatent", async (patent: string) => {
  const response = await fetch(`/api/users?patent=${patent}`);
  const data = await response.json();
  return data;
});
