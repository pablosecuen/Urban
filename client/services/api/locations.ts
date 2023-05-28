import axios from "axios";

const getLocations = async () => {
    const {data} = await axios.get("https://api-urban.onrender.com/passage/locations")
  return data.locations;
}
export default getLocations;