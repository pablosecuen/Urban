"use client";
import React, { useEffect, useState } from "react";
import Seat from "@component/assets/icons/svg/Seat";
import { plantaBaja } from "../../assets/data";
import {  Passagers } from "@component/app/types/Passages";
import PassengerModal from "../modalPasajeros/ModalPasajeros";

const PlantaBajaAdmin: React.FC<Passagers> = ({ enabledSeats }) => {
  const [seatEnabled, setSeatEnabled] = useState<boolean[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeatToggle = (seatIndex: number) => {
    setSeatEnabled((prevSeats) => {
      const updatedSeats = [...prevSeats];
      updatedSeats[seatIndex] = !updatedSeats[seatIndex]; // Toggle the seat enabled state
      return updatedSeats;
    });
  };

  const handleSeatSelection = (seat: string) => {
    setSelectedSeat(seat);
    setIsModalOpen(true);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setSeatEnabled(Array(plantaBaja.length).fill(false));
  }, []);

  const numberSeat = enabledSeats?.numberSeat ?? [];
  const isSeatSelected = (index: number) => {
    return plantaBaja.includes(`${numberSeat}`);
  };

  if (!enabledSeats) {
    return <div>Loading</div>;
  }

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
                disabled={isSeatSelected(index)}
              />
              <label
                className={`cursor-pointer ${
                  seatEnabled[index] ? "hover:bg-blue-200" : "cursor-not-allowed"
                }`}
                htmlFor={`checkbox-${seat}`}
                onClick={() => handleSeatSelection(seat)}
              >
                <Seat
                  fill={
                    isSeatSelected(index) ? "#0000FF" : seatEnabled[index] ? "#000000" : "#C0C0C0"
                  }
                  width="30px"
                  height="36px"
                />
              </label>
            </li>
          </React.Fragment>
        ))}
      </ul>
      {isModalOpen && (
        <PassengerModal
          enabledSeats={enabledSeats}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          seat={selectedSeat}
     
        />
      )}
    </div>
  );
};

export default PlantaBajaAdmin;
