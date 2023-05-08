import { ChauffeurQueryParams, FilteredChauffeurs } from "@component/app/types/Chauffeur";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const getChauffeurs = createAsyncThunk<FilteredChauffeurs, ChauffeurQueryParams>(
  "chauffeur/getFilteredChauffeurs",
  async (queryParams: ChauffeurQueryParams): Promise<FilteredChauffeurs> => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/chauffeur?page=1&pageSize=10${urlSearchParams.toString()}`
    );

    const formatedRes: FilteredChauffeurs = {
      data: response.data.chauffeur,
      activeFilters: response.data.activeFilters,
      currentPage: response.data.currentPage,
      totalPages: response.data.totalPages,
    };
    return formatedRes; // data formateada para usar el spred al agregar al state
  }
);
