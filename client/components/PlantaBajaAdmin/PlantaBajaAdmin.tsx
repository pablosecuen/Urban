import Seat from "@component/assets/icons/svg/Seat";
import React, { useState } from "react";
import { plantaBaja } from "../../assets/data";
import { CardProfilePropsPassage } from "@component/app/types/Passages";

const PlantaBajaAdmin: React.FC<CardProfilePropsPassage> = ({
  selectedPassage,
}) => {
  const [newSeats, setNewSeats] = useState<string[]>([]);
  const [disabledSeats, setDisabledSeats] = useState<string[]>([]);

  const handleClick = (index: number) => {
    if (selectedPassage?.numberSeat.includes((index + 1).toString())) {
      if (disabledSeats.includes((index + 1).toString())) {
        // Habilitar asiento
        setDisabledSeats((prevSeats) => prevSeats.filter((seat) => seat !== (index + 1).toString()));
      } else {
        // Deshabilitar asiento
        setDisabledSeats((prevSeats) => [...prevSeats, (index + 1).toString()]);
      }
      return; // No agregar asientos seleccionados por props a newSeats
    }

    setNewSeats((prevSeats) => {
      const seatIndex = prevSeats.indexOf((index + 1).toString());
      if (seatIndex === -1) {
        return [...prevSeats, (index + 1).toString()];
      } else {
        const updatedSeats = [...prevSeats];
        updatedSeats.splice(seatIndex, 1);
        return updatedSeats;
      }
    });
  };

  return (
    <div className="flex w-4/5 flex-col gap-4">
      <p className="text-center">Planta baja</p>
      <ul className="grid grid-cols-5 gap-2">
        {plantaBaja.map((seat, index) => {
          const seatNumber = index + 1;
          const isSelected = selectedPassage?.numberSeat.includes(seatNumber.toString());
          const isNewSeat = newSeats.includes(seatNumber.toString());
          const isDisabledSeat = disabledSeats.includes(seatNumber.toString());
          let seatColor = isSelected ? "#000000" : isNewSeat ? "#0000FF" : "#888888";
          const seatStyle = isSelected ? {} : { cursor: "pointer" };

          if (isDisabledSeat) {
            seatColor = "#FF0000";
          }

          return (
            <React.Fragment key={index}>
              {(index === 2 || (index - 2) % 4 === 0) && <li className="" />}
              <li className="relative" style={seatStyle}>
                <input
                  type="checkbox"
                  name={`checkbox-${seat}`}
                  id={`checkbox-${seat}`}
                  className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0"
                  onClick={() => handleClick(index)}
                />
                <label htmlFor={`checkbox-${seat}`} style={seatStyle}>
                  <Seat fill={seatColor} width="30px" height="36px" />
                </label>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
      <div className="mt-4">
        <p>Asientos seleccionados:</p>
        <ul>
          <p>Nuevos asientos:</p>
          {newSeats.map((seat, index) => (
            <li key={index}>{seat}</li>
          ))}
        </ul>
        <ul>
          <p>Asientos deshabilitados:</p>
          {disabledSeats.map((seat, index) => (
            <li key={index}>{seat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlantaBajaAdmin;
