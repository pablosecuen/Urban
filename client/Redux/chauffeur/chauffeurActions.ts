import { Chauffeur, ChauffeurQueryParams } from "@component/app/types/Chauffeur";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const getFilteredChauffeurs = createAsyncThunk<AxiosResponse, ChauffeurQueryParams>(
  "chauffeur/getFilteredChauffeurs",
  async (queryParams: ChauffeurQueryParams): Promise<AxiosResponse> => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/cahuffeur?page=1&pageSize=10&${urlSearchParams.toString()}`
    );
    return response.data; // podriamos usar un adapter para asignar en el state toda la info con el spred
  }
);
