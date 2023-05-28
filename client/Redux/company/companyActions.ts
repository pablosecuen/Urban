import { Company } from "@component/app/types/Company";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Hay que refactorizar el codigo, tiene que haber actions unicamente para GetAll, GetById, y GetByQueryParams

export const getAllCompanies = createAsyncThunk<Company[], void>(
  "companies/getAllCompanies",
  async () => {
    const response = await axios.get(`https://api-urban.onrender.com/company`);
    console.log(response.data.companies);
    return response.data.companies;
  }
);
