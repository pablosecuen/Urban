import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllTravels = async () => {
  const data = await axios.get("http://localhost:3000/passage?pageSize=10000");
  const passages = data.data;
  return passages;
};

// export const getUserById = createAsyncThunk("users/getUserById", async (id: string) => {
//   const response = await fetch(`/api/user/${id}`);
//   const data = await response.json();
//   return data;
// });

// export const getUserByName = createAsyncThunk("users/getUserName", async (name: string) => {
//   const response = await fetch(`/api/users?name=${name}`);
//   const data = await response.json();
//   return data;
// });

// export const getUserByPatent = createAsyncThunk("users/getUserByPatent", async (patent: string) => {
//   const response = await fetch(`/api/users?patent=${patent}`);
//   const data = await response.json();
//   return data;
// });
