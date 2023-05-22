"use client";
import Seat from "@component/assets/icons/svg/Seat";
import ModalPasajeros from "@component/components/modalPasajeros/ModalPasajeros";
import { RootState } from "@component/Redux/store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { plantaBaja } from "../../assets/data";
const PlantaBaja = () => {
  const cuantity = useSelector((state: RootState) => state.payment.passageById[0]?.quantity);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [currentPassengerData, setCurrentPassengerData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [seatEnabled, setSeatEnabled] = useState<boolean[]>(Array(plantaBaja.length).fill(false));

  const handleSeatClick = (seatName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatName));
    } else {
      setCurrentPassengerData(null); // Reset current passenger data
      setIsModalOpen(true); // Open the modal
      const seatIndex = parseInt(seatName.split("-")[1]);
      setSeatEnabled((prevSeats) => {
        const updatedSeats = [...prevSeats];
        updatedSeats[seatIndex] = true; // Enable the selected seat
        return updatedSeats;
      });
    }
  };

  const isSeatSelected = (seatName: string) => {
    const seatIndex = parseInt(seatName.split("-")[1]);
    return selectedSeats.includes(seatName) && seatEnabled[seatIndex];
  };

  const handleFormSubmit = (formData: any) => {
    // Save passenger data to sessionStorage
    sessionStorage.setItem(selectedSeats[selectedSeats.length - 1], JSON.stringify(formData));

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
        {plantaBaja.map((seat, index) => (
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
              <label
                className={`hover:${seatEnabled[index] ? "cursor-pointer" : ""}`}
                htmlFor={`checkbox-${seat}`}
              >
                <Seat
                  fill={
                    isSeatSelected(`checkbox-${seat}`)
                      ? "#00FF00" // Green color for selected and enabled seat
                      : seatEnabled[index]
                      ? "#0000FF" // Blue color for enabled seat
                      : "#C0C0C0" // Light grey color for disabled seat
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
        <>
          <div
            className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <ModalPasajeros
            isOpen={isModalOpen}
            onFormSubmit={handleFormSubmit}
            onCancel={() => setIsModalOpen(false)}
            seat={selectedSeats[0]}
          />
        </>
      )}
    </div>
  );
};

export default PlantaBaja;
