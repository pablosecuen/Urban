import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUserById, getUserByName, getUserByPatent } from "./userActions";
import { User } from "../../app/types/User";
import { AxiosResponse } from "axios";
interface UserState {
  allUsers: User[]; // change any[] to your specific type
}

const initialState: UserState = {
  allUsers: [], // provide an empty array as the initial state value for allUsers
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
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });
  },
});

export default userSlice.reducer;
