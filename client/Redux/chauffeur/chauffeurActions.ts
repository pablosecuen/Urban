import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk actions to fetch user data
interface GetAllChauffeursArgs {
  page: number;
  pageSize: number;
}
export const getAllChauffeurs = async ({ page, pageSize }: GetAllChauffeursArgs) => {
  const response = await axios.get(
    `http://localhost:3000/chauffeur?page=${page}&pageSize=${pageSize}`
  );
  console.log(response);

  return response;
};
