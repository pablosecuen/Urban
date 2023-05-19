import axios from "axios";

const getLocations = async () => {
    const {data} = await axios.get("http://localhost:3000/passage/locations")
  return data.locations;
}
export default getLocations;