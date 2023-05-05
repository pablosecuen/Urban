import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getUserById,
  getUsersByName,
  getUsersByCc,
  getUsersByEmail,
} from "./userActions";

import { User } from "../../app/types/User";
import { AxiosResponse } from "axios";
interface UserState {
  allUsers: User[];
  userById: User | null;
  usersByName: User[];
  usersByCc: User[];
  usersByEmail: User[];
}

const initialState: UserState = {
  allUsers: [],
  userById: null,
  usersByName: [],
  usersByCc: [],
  usersByEmail: [],
};
type ResponseType = AxiosResponse<any, any>;
export const fetchAllUsers: AsyncThunk<User[], void, {}> = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response: ResponseType = await getAllUsers();
    return response.data.users; // return the users array
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.userById = action.payload;
      })
      .addCase(getUsersByName.fulfilled, (state, action) => {
        state.usersByName = action.payload;
      })
      .addCase(getUsersByCc.fulfilled, (state, action) => {
        state.usersByCc = action.payload;
      })
      .addCase(getUsersByEmail.fulfilled, (state, action) => {
        state.usersByEmail = action.payload;
      });
  },
});

export default userSlice.reducer;
