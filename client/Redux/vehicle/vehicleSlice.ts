import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
  getAllVehicles,
  getVehicleById,
  getVehicleByPatent,
  getVehicleByChauffeurId,
  getVehicleByOwner,
  getVehicleByBrand,
  getVehicleByYear,
} from "./vehicleActions";
import { Vehicle } from "@component/app/types/vehicle";

interface VehicleState {
  allVehicles: Vehicle[];
  vehicles: Vehicle[];
  vehicleById: Vehicle | null;
  vehicleByPatent: Vehicle | null;
  vehicleByChauffeurId: Vehicle | null;
  vehicleByOwner: Vehicle[];
  vehicleByBrand: Vehicle[];
  vehicleByYear: Vehicle[];
}

const initialState: VehicleState = {
  allVehicles: [],
  vehicles: [],
  vehicleById: null,
  vehicleByPatent: null,
  vehicleByChauffeurId: null,
  vehicleByOwner: [],
  vehicleByBrand: [],
  vehicleByYear: [],
};

type ResponseType = AxiosResponse<any, any>;

export const takeAllVehicles: AsyncThunk<Vehicle[], void, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async () => {
    const response: ResponseType = await getAllVehicles();
    return response.data.vehicles;
  }
);

export const takeVehicleById: AsyncThunk<Vehicle | null, string, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async (id: string) => {
    const response: ResponseType = await getVehicleById(id);
    return response.data;
  }
);

export const takeVehicleByPatent: AsyncThunk<Vehicle | null, string, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async (patent: string) => {
    const response: ResponseType = await getVehicleByPatent(patent);
    return response.data.vehicles;
  }
);

export const takeVehicleByChauffeurId: AsyncThunk<Vehicle | null, string, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async (chauffeurId: string) => {
    const response: ResponseType = await getVehicleByChauffeurId(chauffeurId);
    return response.data.vehicles;
  }
);

export const takeVehicleByOwner: AsyncThunk<Vehicle[], string, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async (ownerId: string) => {
    const response: ResponseType = await getVehicleByOwner(ownerId);
    return response.data.vehicles;
  }
);

export const takeVehicleByBrand: AsyncThunk<Vehicle[], string, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async (brand: string) => {
    const response: ResponseType = await getVehicleByBrand(brand);
    return response.data.vehicles;
  }
);

export const takeVehicleByYear: AsyncThunk<Vehicle[], string, {}> = createAsyncThunk(
  "vehicle/takeAllVehicles",
  async (year: string) => {
    const response: ResponseType = await getVehicleByYear(year);
    return response.data.vehicles;
  }
);

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(takeAllVehicles.fulfilled, (state, action) => {
        state.vehicles = action.payload;
      })
      .addCase(takeVehicleById.fulfilled, (state, action) => {
        state.vehicleById = action.payload;
      })
      .addCase(takeVehicleByPatent.fulfilled, (state, action) => {
        state.vehicleByPatent = action.payload;
      })
      .addCase(takeVehicleByChauffeurId.fulfilled, (state, action) => {
        state.vehicleByChauffeurId = action.payload;
      })
      .addCase(takeVehicleByOwner.fulfilled, (state, action) => {
        state.vehicleByOwner = action.payload;
      })
      .addCase(takeVehicleByBrand.fulfilled, (state, action) => {
        state.vehicleByBrand = action.payload;
      })
      .addCase(takeVehicleByYear.fulfilled, (state, action) => {
        state.vehicleByYear = action.payload;
      });
  },
});
