import axios, { AxiosResponse } from "axios";

export const getAllVehicles = async (): Promise<AxiosResponse> => {
  const response = await axios.get("http://localhost:3000/vehicle?page=1&pageSize=1000");
  console.log(response.data);
  return response;
};

export const getVehicleById = async (id: string): Promise<AxiosResponse> => {
  const response = await axios.get(`http://localhost:3000/vehicle/${id}`);
  console.log(response.data);
  return response;
};

export const getVehicleByPatent = async (patent: string): Promise<AxiosResponse> => {
  const response = await axios.get(`http://localhost:3000/vehicle/patent/${patent}`);
  console.log(response.data);
  return response;
};

export const getVehicleByChauffeurId = async (chauffeurId: string): Promise<AxiosResponse> => {
  const response = await axios.get(`http://localhost:3000/vehicle/chauffeur/${chauffeurId}`);
  console.log(response.data);
  return response;
};

export const getVehicleByOwner = async (ownerId: string): Promise<AxiosResponse> => {
  const response = await axios.get(`http://localhost:3000/vehicle/owner/${ownerId}`);
  console.log(response.data);
  return response;
};

export const getVehicleByBrand = async (brand: string): Promise<AxiosResponse> => {
  const response = await axios.get(
    `http://localhost:3000/vehicle/brand/${brand}?page=1&pageSize=1000`
  );
  console.log(response.data);
  return response;
};

export const getVehicleByYear = async (year: string): Promise<AxiosResponse> => {
  const response = await axios.get(
    `http://localhost:3000/vehicle/year/${year}?page=1&pageSize=1000`
  );
  console.log(response.data);
  return response;
};
