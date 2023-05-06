import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
// import { getAllPassages } from "./passageActions";
import { AxiosResponse } from "axios";
import { Chauffeur, ChauffeursArrayResponse } from "@component/app/types/Chauffeur";
import { getAllChauffeurs } from "./chauffeurActions";

interface ChauffeurInitialState {
  allChauffeurs: ChauffeursArrayResponse | null;
  chauffeurById: Chauffeur | null;
  chauffeurByCc: Chauffeur | null;
  chauffeurByCe: Chauffeur | null;
  chauffeurByPatent: Chauffeur | null;
  chauffeurByName: Chauffeur[];
  chauffeursPendingPayment: Chauffeur[];
}

const initialState: ChauffeurInitialState = {
  allChauffeurs: null,
  chauffeurById: null,
  chauffeurByCc: null,
  chauffeurByCe: null,
  chauffeurByPatent: null,
  chauffeurByName: [],
  chauffeursPendingPayment: [],
};

type ResponseType = AxiosResponse<any, any>;

export const fetchAllChauffeurs: AsyncThunk<ChauffeursArrayResponse, void, {}> = createAsyncThunk(
  "cahuffeur/fetchAllChauffeurs",
  async () => {
    const response: ResponseType = await getAllChauffeurs({ page: 1, pageSize: 10 });
    return response.data;
  }
);
export const getChauffeurById: AsyncThunk<Chauffeur, void, {}> = createAsyncThunk(
  "cahuffeur/getChauffeurById",
  async () => {
    const response: ResponseType = await getAllChauffeurs({ page: 1, pageSize: 10 });
    return response.data.chauffeur;
  }
);

const chauffeurSlice = createSlice({
  name: "chauffeurs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllChauffeurs.fulfilled, (state, action) => {
      state.allChauffeurs = action.payload;
    });
  },
});

export default chauffeurSlice.reducer;
