import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Vehicle } from "@component/app/types/Vehicle";
import { QueryParamsVehicle } from "@component/app/types/QueryParams";

export const getAllVehicles = createAsyncThunk<Vehicle[], void>(
  "vehicles/getAllVehicles",
  async () => {
    const response = await axios.get(`http://localhost:3000/vehicle?page=1&pageSize=1000`);
    return response.data.vehicles;
  }
);

export const getVehicleById = createAsyncThunk<Vehicle, string>(
  "vehicles/getVehicleByName",
  async (vechicleId) => {
    const response = await axios.get(`http://localhost:3000/vehicle/${vechicleId}`);
    return response.data;
  }
);

export const getVehicleByQuery = createAsyncThunk<Vehicle[], QueryParamsVehicle>(
  "vehicles/getVehicleByQuery",
  async (queryParams: QueryParamsVehicle) => {
    const urlSearchParams = new URLSearchParams(queryParams as Record<string, string>);
    const response = await axios.get(
      `http://localhost:3000/vehicle?page=1&pageSize=10000&${urlSearchParams.toString()}`
    );
    return response.data.vehicles;
  }
);

// export const getVehicleByPatent = createAsyncThunk<Vehicle, string>(
//   "vehicles/getVehicleByPatent",
//   async (patent) => {
//     const response = await axios.get(`http://localhost:3000/vehicle/patent/${patent}`);
//     return response.data.vehicle;
//   }
// );

// export const getVehicleByModel = createAsyncThunk<Vehicle, string>(
//   "vehicles/getVehicleByModel",
//   async (model) => {
//     const response = await axios.get(`http://localhost:3000/vehicle/model/${model}`);
//     return response.data.vehicle;
//   }
// );

// export const getVehicleByChauffeurId = createAsyncThunk<Vehicle, string>(
//   "vehicles/getVehicleByChauffeurId",
//   async (chauffeurId) => {
//     const response = await axios.get(`http://localhost:3000/vehicle/chauffeur/${chauffeurId}`);
//     return response.data.vehicle;
//   }
// );

// export const getVehicleByOwner = createAsyncThunk<Vehicle, string>(
//   "vehicles/getVehicleByOwner",
//   async (ownerId) => {
//     const response = await axios.get(`http://localhost:3000/vehicle/owner/${ownerId}`);
//     return response.data.vehicle;
//   }
// );

// export const getVehicleByBrand = createAsyncThunk<Vehicle, string>(
//   "vehicles/getVehicleByBrand",
//   async (brand) => {
//     const response = await axios.get(`http://localhost:3000/vehicle/brand/${brand}`);
//     return response.data.vehicle;
//   }
// );

// export const getVehicleByYear = createAsyncThunk<Vehicle, string>(
//   "vehicles/getVechicleByYear",
//   async (year) => {
//     const response = await axios.get(`http://localhost:3000/vehicle/year/${year}`);
//     return response.data.vehicle;
//   }
// );
