import React, { useState } from "react";
import axios from "axios";
import PlantaAltaAdmin from "../PlantaAltaAdmin/PlantaAltaAdmin";
import PlantaBajaAdmin from "../PlantaBajaAdmin/PlantaBajaAdmin";
import { CardProfilePropsPassage } from "@component/app/types/Passages";

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
      console.log("Todo Ok");
    } catch (error) {
      console.error("Error", error);
    }
  };

  if (!selectedPassage) {
    return <div>Aún no has seleccionado ningún pasaje</div>;
  }

  return (
    <div className='relative mb-6 mt-16 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-xl'>
      <h2 className='py-4 text-center'>Seat Management</h2>

      {newSeats.length === 0 ? (
        <div>No se han seleccionado asientos</div>
      ) : (
        <div>
          <h3>Asientos seleccionados:</h3>
          <ul>
            {newSeats.map((seat, index) => (
              <li key={index}>{seat}</li>
            ))}
          </ul>
          <button onClick={enableSeats}>Habilitar asientos</button>
        </div>
      )}

      <ul className='flex items-center justify-center gap-4'>
        <li className='flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4'>
          <PlantaAltaAdmin
            selectedPassage={selectedPassage}
            newSeats={newSeats}
            onSeatToggle={handleSeatToggle}
          />
        </li>
        <li className='flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4'>
          <PlantaBajaAdmin
            selectedPassage={selectedPassage}
            newSeats={newSeats}
            onSeatToggle={handleSeatToggle}
          />
        </li>
      </ul>
    </div>
  );
};

export default SeatManagement;
