import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { getAllPassages, getPassagesByQuery, getPassagesId } from "./passageActions";
import { Passage } from "../../app/types/Passages";
import { AxiosResponse } from "axios";
import { QueryParams } from "@component/app/types/QueryParams";

interface PassageState {
  allPassages: Passage[];
  passageById: Passage | null;
}

const initialState: PassageState = {
  allPassages: [],
  passageById: null,
};

type ResponseType = AxiosResponse<any, any>;

export const fetchAllPassages: AsyncThunk<Passage[], void, {}> = createAsyncThunk(
  "passage/fetchAllPassages",
  async () => {
    const response: ResponseType = await getAllPassages();
    return response.data.passages;
  }
);

export const fetchPassageById: AsyncThunk<Passage | null, string, {}> = createAsyncThunk(
  "passage/fetchPassageById",
  async (id: string) => {
    const response: ResponseType = await getPassagesId(id);
    return response.data;
  }
);

export const fetchPassagesByQuery: AsyncThunk<Passage[], QueryParams, {}> = createAsyncThunk(
  "passage/fetchPassagesByQuery",
  async (queryParams) => {
    const response: ResponseType = await getPassagesByQuery(queryParams);
    return response.data.passages;
  }
);

const passageSlice = createSlice({
  name: "passages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPassages.fulfilled, (state, action) => {
        state.allPassages = action.payload;
      })
      .addCase(fetchPassageById.fulfilled, (state, action) => {
        state.passageById = action.payload;
      })
      .addCase(fetchPassagesByQuery.fulfilled, (state, action) => {
        state.allPassages = action.payload;
      });
  },
});

export default passageSlice.reducer;
