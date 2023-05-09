import { createSlice } from "@reduxjs/toolkit";
import {
  getAllVehicles,
  getVehicleById,
  getVehicleByPatent,
  getVehicleByChauffeurId,
  getVehicleByOwner,
  getVehicleByBrand,
  getVehicleByYear,
} from "./vehicleActions";
import { Vehicle } from "@component/app/types/Vehicle";

interface VehicleState {
  allVehicles: Vehicle[];
  vehicle: Vehicle[];
  vehicleById: Vehicle | null;
  vehicleByPatent: Vehicle | null;
  vehicleByChauffeurId: [] | {} | null;
  vehicleByOwner: Vehicle[];
  vehicleByBrand: Vehicle[];
  vehicleByYear: Vehicle[];
  userById: { [key: string]: Vehicle | undefined };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null; // change any[] to your specific type
}

const initialState: VehicleState = {
  allVehicles: [],
  vehicle: [],
  vehicleById: null,
  vehicleByPatent: null,
  vehicleByChauffeurId: null,
  vehicleByOwner: [],
  vehicleByBrand: [],
  vehicleByYear: [],
  userById: {},
  status: "idle",
  error: null,
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          [
            getAllVehicles.pending,
            getVehicleById.pending,
            getVehicleByPatent.pending,
            getVehicleByChauffeurId.pending,
            getVehicleByOwner.pending,
            getVehicleByBrand.pending,
            getVehicleByYear.pending,
          ].includes(action.type),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) =>
          [
            getAllVehicles.fulfilled,
            getVehicleByPatent.fulfilled,
            getVehicleByOwner.fulfilled,
            getVehicleByBrand.fulfilled,
            getVehicleByYear.fulfilled,
          ].includes(action.type),
        (state, action) => {
          state.status = "succeeded";
          state.allVehicles = action.payload;
        }
      )
      .addMatcher(
        (action) => getVehicleById.fulfilled.match(action),
        (state, action) => {
          state.status = "succeeded";
          state.vehicleById = action.payload;
        }
      )
      .addMatcher(
        (action) => getVehicleByChauffeurId.fulfilled.match(action),
        (state, action) => {
          state.status = "succeeded";
          state.vehicleByChauffeurId = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          [
            getAllVehicles.rejected,
            getVehicleByPatent.rejected,
            getVehicleByOwner.rejected,
            getVehicleByBrand.rejected,
            getVehicleByYear.rejected,
          ].includes(action.type),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload as string;
        }
      );
  },
});

export default vehicleSlice.reducer;
