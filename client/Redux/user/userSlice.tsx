import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUserById, getUserByName, getUserByPatent } from "./userActions";
const initialState = {
  entities: [],
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.entities.push(...action.payload);
      }
    });
  },
});

export default userSlice.reducer;
