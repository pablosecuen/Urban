import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
} from "@reduxjs/toolkit";
import { getAllPassages } from "./passageActions";
import { Passage } from "../../app/types/Passages";
import { AxiosResponse } from "axios";

interface PassageState {
  allPassages: Passage[]; 
}

const initialState: PassageState = {
  allPassages: [], 
};

type ResponseType = AxiosResponse<any, any>;

export const fetchAllPassages: AsyncThunk<Passage[], void, {}> = createAsyncThunk(
  "passage/fetchAllPassages",
  async () => {
    const response: ResponseType = await getAllPassages();
    return response.data.passages; 
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
