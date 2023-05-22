"use client";
import Seat from "@component/assets/icons/svg/Seat";
import ModalPasajeros from "@component/components/modalPasajeros/ModalPasajeros";

import React, { useEffect, useState } from "react";
import { plantaAlta } from "../../../assets/data";
const PlantaAlta = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [currentPassengerData, setCurrentPassengerData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSeatClick = (seatName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatName));
    } else {
      setCurrentPassengerData(null); // Reset current passenger data
      setIsModalOpen(true); // Open the modal
    }
  };

  const isSeatSelected = (seatName: string) => {
    return selectedSeats.includes(seatName);
  };

  const handleFormSubmit = (formData: any) => {
    // Save passenger data to sessionStorage
    sessionStorage.setItem(selectedSeats[selectedSeats.length - 1], JSON.stringify(formData));

    setSelectedSeats([...selectedSeats, selectedSeats[selectedSeats.length - 1]]);
    setCurrentPassengerData(formData);
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    console.log("Selected Seats:", selectedSeats);
  }, [selectedSeats]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-4/5 flex-col gap-4">
      <ul className="grid grid-cols-5 gap-2">
        {plantaAlta.map((seat, index) => (
          <React.Fragment key={index}>
            {(index === 2 || (index - 2) % 4 === 0) && <li className="" />}
            <li className="relative">
              <input
                type="checkbox"
                name={`checkbox-${seat}`}
                id={`checkbox-${seat}`}
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-0"
                onChange={(e) => {
                  handleSeatClick(`checkbox-${seat}`, e);
                }}
              />
              <label className="hover:cursor-pointer" htmlFor={`checkbox-${seat}`}>
                <Seat
                  fill={isSeatSelected(`checkbox-${seat}`) ? "#00FF00" : "#000"}
                  width="30px"
                  height="36px"
                />
              </label>
            </li>
          </React.Fragment>
        ))}
      </ul>

      {isModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <ModalPasajeros
            isOpen={isModalOpen}
            onFormSubmit={handleFormSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default PlantaAlta;
