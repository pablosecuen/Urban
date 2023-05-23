// PlantaAltaAdmin.tsx

import Seat from "@component/assets/icons/svg/Seat";
import { updateSeatEnabled, saveSeatEnabled } from "@component/Redux/seats/seatsSlice";
import { RootState } from "@component/Redux/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plantaAlta } from "../../assets/data";

const PlantaAltaAdmin = () => {
  const dispatch = useDispatch();
  const seatEnabled = useSelector((state: RootState) => state.seats.seatEnabled);

  const handleSeatToggle = (seatIndex: number) => {
    const updatedSeats = [...seatEnabled];
    updatedSeats[seatIndex] = !seatEnabled[seatIndex]; // Toggle the seat enabled state
    dispatch(updateSeatEnabled(updatedSeats));
  };

  const handleSaveSeats = () => {
    seatEnabled.forEach((enabled, index) => {
      dispatch(saveSeatEnabled({ seatIndex: index, enabled }));
    });
    console.log("Saved Seats:", seatEnabled); // Log saved seats
  };

  useEffect(() => {
    // Initialize the seatEnabled state from the Redux store
    dispatch(updateSeatEnabled(Array(plantaAlta.length).fill(false)));
  }, [dispatch]);

  console.log("Current Seats:", seatEnabled); // Log current seats

  return (
    <div className="flex w-4/5 flex-col gap-4">
      <ul className="grid grid-cols-5 gap-2">
        {seatEnabled.map((enabled, index) => (
          <React.Fragment key={index}>
            {(index === 2 || (index - 2) % 4 === 0) && <li className="" />}
            <li className="relative">
              <input
                type="checkbox"
                name={`checkbox-${plantaAlta[index]}`}
                id={`checkbox-${plantaAlta[index]}`}
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0"
                onClick={() => handleSeatToggle(index)}
              />
              <label
                className={`cursor-pointer ${enabled ? "hover:bg-blue-200" : "cursor-not-allowed"}`}
                htmlFor={`checkbox-${plantaAlta[index]}`}
              >
                <Seat fill={enabled ? "#0000FF" : "#C0C0C0"} width="30px" height="36px" />
              </label>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <button onClick={handleSaveSeats}>Save Seats</button>
      <div>
        <h2>Enabled Seats:</h2>
        {seatEnabled.map((enabled, index) => (
          <p key={index}>{enabled ? `Seat ${index + 1}` : ""}</p>
        ))}
      </div>
    </div>
  );
};

export default PlantaAltaAdmin;
