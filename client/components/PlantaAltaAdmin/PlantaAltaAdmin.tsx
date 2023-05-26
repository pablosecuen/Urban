import Seat from "@component/assets/icons/svg/Seat";
import React, { useEffect, useState } from "react";
import { plantaAlta } from "../../assets/data";
import { CardProfilePropsPassage } from "@component/app/types/Passages";

const PlantaAltaAdmin: React.FC<CardProfilePropsPassage> = ({
  selectedPassage,
  newSeats,
  onSeatToggle,
}) => {
  const [seatEnabled, setSeatEnabled] = useState<boolean[]>([]);

  const handleSeatToggle = (seatIndex: number) => {
    const seatNumber = seatIndex + 41;
    onSeatToggle?.(seatNumber.toString());
    setSeatEnabled((prevSeats) => {
      const updatedSeats = [...prevSeats];
      updatedSeats[seatIndex] = !updatedSeats[seatIndex];
      return updatedSeats;
    });
  };

  useEffect(() => {
    setSeatEnabled(Array(plantaAlta.length).fill(false));
  }, []);

  const isSeatSelected = (seatIndex: number) => {
    const seatNumber = seatIndex + 41;
    return selectedPassage?.numberSeat.includes(`${seatNumber}`);
  };

  if (!selectedPassage) {
    return <div>Aun no has seleccionado ningún pasaje</div>;
  }

  return (
    <div className='flex w-4/5 flex-col gap-4'>
      <p className='text-center'>Planta alta</p>
      <ul className='grid grid-cols-5 gap-2'>
        {plantaAlta.map((seat, index) => {
          const seatNumber = index + 41;
          return (
            <React.Fragment key={seatNumber}>
              {(index === 2 || (index - 2) % 4 === 0) && <li className='' />}
              <li className='relative'>
                <input
                  type='checkbox'
                  name={`checkbox-${seatNumber}`}
                  id={`checkbox-${seatNumber}`}
                  className='absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0'
                  onClick={() => handleSeatToggle(index)}
                  disabled={isSeatSelected(index)}
                />
                <label
                  className={`cursor-pointer ${
                    seatEnabled[index] ? "hover:bg-blue-200" : "cursor-not-allowed"
                  }`}
                  htmlFor={`checkbox-${seatNumber}`}
                >
                  <Seat
                    fill={
                      isSeatSelected(index) ? "#000000" : seatEnabled[index] ? "#0000FF" : "#C0C0C0"
                    }
                    width='30px'
                    height='36px'
                  />
                </label>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default PlantaAltaAdmin;
