import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getUserById,
  getUsersByCc,
  getUsersByEmail,
  getUsersByName,
} from "./userActions";
import { User } from "../../app/types/User";
import { AxiosResponse } from "axios";
interface UserState {
  allUsers: User[];
  userByName: User[];
  userByCc: User | null;
  userByEmail: User | null;
  userById: { [key: string]: User | undefined };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null; // change any[] to your specific type
}

const initialState: UserState = {
  allUsers: [],
  userById: {},
  userByName: [],
  userByCc: null,
  userByEmail: null,
  status: "idle",
  error: null, // provide an empty array as the initial state value for allUsers
};


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          [
            getAllUsers.pending,
            getUserById.pending,
            getUsersByName.pending,
            getUsersByCc.pending,
            getUsersByEmail.pending,
          ].includes(action.type),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          [
            getAllUsers.fulfilled,
            getUsersByName.fulfilled,
            getUsersByCc.fulfilled,
            getUsersByEmail.fulfilled,
          ].includes(action.type),
        (state, action) => {
          state.status = "succeeded";
          state.allUsers = action.payload;
        }
      )
      .addMatcher(
        (action) => getUserById.fulfilled.match(action),
        (state, action) => {
          state.status = "succeeded";
          state.userById = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          [
            getAllUsers.rejected,
            getUserById.rejected,
            getUsersByName.rejected,
            getUsersByCc.rejected,
            getUsersByEmail.rejected,
          ].includes(action.type),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload as string;
        }
      );
  },
});

export default userSlice.reducer;
