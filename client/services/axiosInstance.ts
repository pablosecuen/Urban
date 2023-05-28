import axios from "axios";

const axiosInstance = axios.create({
  // Aquí puedes configurar las opciones de tu instancia de Axios
  baseURL: "https://api-urban.onrender.com",
  // Otros opciones...
});

export default axiosInstance;
