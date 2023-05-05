import {
  createSlice,
  createAsyncThunk,
  AsyncThunkPayloadCreator,
  AsyncThunk,
  ThunkDispatch,
} from "@reduxjs/toolkit";
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

type ResponseTypeAll = AxiosResponse<User[], any>;
type ResponseTypeId = AxiosResponse<User, any>;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the pending state
      .addCase(getAllUsers.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allUsers = action.payload;
      })
      // Handle the error state
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

    builder
      // Handle the pending state
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userById[action.payload.id] = action.payload;
      })
      // Handle the error state
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

    builder
      // Handle the pending state
      .addCase(getUsersByName.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getUsersByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userByName = action.payload;
      })
      // Handle the error state
      .addCase(getUsersByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

    builder
      // Handle the pending state
      .addCase(getUsersByCc.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getUsersByCc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userByCc = action.payload[0];
      })
      // Handle the error state
      .addCase(getUsersByCc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });

    builder
      // Handle the pending state
      .addCase(getUsersByEmail.pending, (state) => {
        state.status = "loading";
      })
      // Handle the success state
      .addCase(getUsersByEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userByEmail = action.payload[0];
      })
      // Handle the error state
      .addCase(getUsersByEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default userSlice.reducer;
