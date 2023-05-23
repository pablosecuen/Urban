import Seat from "@component/assets/icons/svg/Seat";
import React, { useEffect, useState } from "react";
import { plantaBaja } from "../../assets/data";

const PlantaBajaAdmin = () => {
  const [seatEnabled, setSeatEnabled] = useState<boolean[]>([]);

  const handleSeatToggle = (seatIndex: number) => {
    setSeatEnabled((prevSeats) => {
      const updatedSeats = [...prevSeats];
      updatedSeats[seatIndex] = !updatedSeats[seatIndex]; // Toggle the seat enabled state
      return updatedSeats;
    });
  };

  useEffect(() => {
    setSeatEnabled(Array(plantaBaja.length).fill(false));
  }, []);

  return (
    <div className="flex w-4/5 flex-col gap-4">
      <ul className="grid grid-cols-5 gap-2">
        {plantaBaja.map((seat, index) => (
          <React.Fragment key={index}>
            {(index === 2 || (index - 2) % 4 === 0) && <li className="" />}
            <li className="relative">
              <input
                type="checkbox"
                name={`checkbox-${seat}`}
                id={`checkbox-${seat}`}
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0"
                onClick={() => handleSeatToggle(index)}
              />
              <label
                className={`cursor-pointer ${
                  seatEnabled[index] ? "hover:bg-blue-200" : "cursor-not-allowed"
                }`}
                htmlFor={`checkbox-${seat}`}
              >
                <Seat
                  fill={seatEnabled[index] ? "#0000FF" : "#C0C0C0"}
                  width="30px"
                  height="36px"
                />
              </label>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default PlantaBajaAdmin;
