import axios from "axios";

// Define async thunk actions to fetch user data
export const getAllPassages = async () => {
  const response = await axios.get("http://localhost:3000/passage?page=1&pageSize=10000");

  return response;
};
