import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
} from "@reduxjs/toolkit";
import { getAllPassages } from "./passageActions";
import { Passage } from "../../app/types/Passages";
import { AxiosResponse } from "axios";

interface PassageState {
  allPassages: Passage[]; // change any[] to your specific type
}

const initialState: PassageState = {
  allPassages: [], // provide an empty array as the initial state value for allUsers
};

type ResponseType = AxiosResponse<any, any>;

export const fetchAllPassages: AsyncThunk<Passage[], void, {}> = createAsyncThunk(
  "passage/fetchAllPassages",
  async () => {
    const response: ResponseType = await getAllPassages();
    console.log({fetchAllPassages: response});
    return response.data.passages; // return the users array
  }
);

const passageSlice = createSlice({
  name: "passages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPassages.fulfilled, (state, action) => {
      state.allPassages = action.payload;
    });
  },
});

export default passageSlice.reducer;
