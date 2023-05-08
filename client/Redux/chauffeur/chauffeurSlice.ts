import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { Chauffeur, FilteredChauffeurs } from "@component/app/types/Chauffeur";
import { getFilteredChauffeurs } from "./chauffeurActions";

interface ChauffeurInitialState {
  filteredChauffeurs: FilteredChauffeurs | null;
  chauffeursPendingPayment: Chauffeur[]; // van a traer el balance desde el back? sino adaptar
  status: "idle" | "loading" | "succeeded" | "failed"; // verificar si funciona el mismo status para todas las actions
  error: string | null;
}

const initialState: ChauffeurInitialState = {
  filteredChauffeurs: null,
  chauffeursPendingPayment: [],
  status: "idle",
  error: null,
};

const chauffeurSlice = createSlice({
  name: "chauffeurs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => [getFilteredChauffeurs.pending].includes(action.type),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => [getFilteredChauffeurs.fulfilled].includes(action.type),
        (state, action) => {
          state.status = "succeeded";
          state.filteredChauffeurs = {
            // ...action.payload, // esto es igual a lo de abajo pero puede cambiar desde el backend
            chauffeurs: action.payload.chauffeurs,
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
            activeFilters: action.payload.activeFilters,
          };
        }
      )
      .addMatcher(
        (action) => [getFilteredChauffeurs.rejected].includes(action.type),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload as string;
        }
      );
  },
});

export default chauffeurSlice.reducer;
