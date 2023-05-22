"use client";
import Seat from "@component/assets/icons/svg/Seat";
import React, { useEffect, useState } from "react";
import { plantaBaja, plantaAlta } from "../../../assets/data";
const PlantaAlta = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatName: string) => {
    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatName));
    } else {
      setSelectedSeats([...selectedSeats, seatName]);
    }
  };

  const isSeatSelected = (seatName: string) => {
    return selectedSeats.includes(seatName);
  };

  useEffect(() => {
    console.log("Selected Seats:", selectedSeats);
  }, [selectedSeats]);

  return (
    <div className="flex w-4/5 flex-col  gap-4 ">
      <ul className="grid grid-cols-5 ">
        {plantaAlta.map((seat, index) => (
          <React.Fragment key={index}>
            {(index === 2 || (index - 2) % 4 === 0) && <li className=" " />}
            <li className="relative">
              <input
                type="checkbox"
                name={`checkbox-${seat}`}
                id={`checkbox-${seat}`}
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0"
                onChange={() => {
                  console.log("Checkbox clicked");
                  handleSeatClick(`checkbox-${seat}`);
                }}
              />
              <label className="hover:cursor-pointer" htmlFor={`checkbox-${seat}`}>
                <Seat
                  // fill={ejemplo.includes(i.toString()) ? "#A1A1A1" : "#000"}
                  fill={isSeatSelected(`checkbox-${seat}`) ? "#00FF00" : "#000"}
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

export default PlantaAlta;
