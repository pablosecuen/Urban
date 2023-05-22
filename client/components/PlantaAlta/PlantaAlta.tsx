import { plantaAlta } from "@component/assets/data";
import Seat from "@component/assets/icons/svg/Seat";
import React from "react";

interface PlantaAltaProps {
  seatEnabled: boolean[];
}

const PlantaAlta: React.FC<PlantaAltaProps> = ({ seatEnabled }) => {
  return (
    <div className="flex w-4/5 flex-col gap-4">
      <ul className="grid grid-cols-5 gap-2">
        {plantaAlta.map((seat: string, index: number) => (
          <React.Fragment key={index}>
            <li key={index} className="relative">
              <input
                type="checkbox"
                name={`checkbox-${seat}`}
                id={`checkbox-${seat}`}
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0"
                disabled={!seatEnabled[index]}
              />
              <label
                htmlFor={`checkbox-${seat}`}
                className={`cursor-pointer ${
                  seatEnabled[index] ? "hover:bg-blue-200" : "cursor-not-allowed"
                }`}
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

export default PlantaAlta;
