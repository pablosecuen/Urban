import { ChauffeurQueryParams, FilteredChauffeurs } from "@component/app/types/Chauffeur";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const getChauffeurs = createAsyncThunk<FilteredChauffeurs, ChauffeurQueryParams>(
  "chauffeur/getFilteredChauffeurs",
  async (queryParams: ChauffeurQueryParams): Promise<FilteredChauffeurs> => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    let URL = "http://localhost:3000/chauffeur?";
    URL += "page=1&pageSize=10";
    const URLParams = urlSearchParams.toString();
    if (URLParams) URL += "&" + URLParams;
    const response: AxiosResponse = await axios.get(URL);

    const formatedRes: FilteredChauffeurs = {
      data: response.data.chauffeur,
      activeFilters: response.data.activeFilters,
      currentPage: response.data.currentPage,
      totalPages: response.data.totalPages,
    };
    return formatedRes; // data formateada para usar el spred al agregar al state
  }
);
