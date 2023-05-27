"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantaAltaAdmin from "../PlantaAltaAdmin/PlantaAltaAdmin";
import PlantaBajaAdmin from "../PlantaBajaAdmin/PlantaBajaAdmin";
import { CardProfilePropsPassage } from "@component/app/types/Passages";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SeatManagement: React.FC<CardProfilePropsPassage> = ({ selectedPassage }) => {
  const [newSeats, setNewSeats] = useState<string[]>([]);

  const handleSeatToggle = (seat: string) => {
    if (newSeats.includes(seat)) {
      setNewSeats((prevSeats) => prevSeats.filter((s) => s !== seat));
    } else {
      setNewSeats((prevSeats) => [...prevSeats, seat]);
    }
  };

  const enableSeats = async () => {
    try {
      await axios.put(`http://localhost:3000/admin/enableSeats/${selectedPassage?.id}`, {
        numberSeat: newSeats,
      });
      toastSuccess();
      setNewSeats([]); // Clean selected seats
      console.log("Todo Ok");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const toastSuccess = () => {
    toast.success("Asientos habilitados exitosamente", {
      position: "top-center",
      autoClose: 5000, //Con autoClose={false} no se cierra automaticamente
      hideProgressBar: false, //Para que se vea o no el progreso
      closeOnClick: true,
      pauseOnHover: false, //Se pondra en pausa, o no, si el mouse esta encima
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (!selectedPassage) {
    return <div>Aún no has seleccionado ningún pasaje</div>;
  }

  return (
    <div className="relative mb-6 mt-16 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false} //Con esto quitamos o habilitamos la X para cerrar
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        //Light, dark o colored... elijan el mas conveniente, recuerden cambiar esto tambien en el toast
        theme="light"
        closeButton={false}
      />
      <h2 className="py-2 text-center text-xl text-gray-700">Seat Management</h2>
      <ul className="flex items-center justify-center gap-4">
        <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
          <PlantaAltaAdmin
            selectedPassage={selectedPassage}
            newSeats={newSeats}
            onSeatToggle={handleSeatToggle}
          />
        </li>
        <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
          <PlantaBajaAdmin
            selectedPassage={selectedPassage}
            newSeats={newSeats}
            onSeatToggle={handleSeatToggle}
          />
        </li>
      </ul>
      <button onClick={enableSeats} className="mx-auto mt-4 w-1/2">
        Habilitar asientos
      </button>
      {newSeats.length === 0 ? (
        <div>No se han seleccionado asientos</div>
      ) : (
        <div className="flex w-full flex-wrap ">
          <h3 className="mx-auto py-2 text-center italic">Asientos seleccionados:</h3>
          <ul className="flex w-full flex-wrap ">
            {newSeats.map((seat, index) => (
              <li
                key={index}
                className="mx-1 mt-2 w-10 rounded-xl border-b-2 border-r-2 border-blue px-2 text-center text-blue"
              >
                {seat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SeatManagement;
