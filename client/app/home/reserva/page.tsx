"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import PickDate from "@component/components/PickDate/PickDate";
import { validateQuery } from "./Validation";

import {
  HiUserGroup,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiTag,
  HiTrendingUp,
  HiTrendingDown,
} from "react-icons/hi";
// import { MdPets } from "react-icons/md";
import { getPassagesByQuery } from "@component/Redux/passage/passageActions";
import { Query } from "@component/app/types/Passages";

export default function Reserva() {
  const dispatch = useDispatch<Dispatch<any>>(); // idea de chatGPT

  const today = new Date().toISOString().slice(0, 10); // la fecha actual en formato YYYY-MM-DD
  // const [currentDate, setCurrentDate] = useState(today); // aun no esstoy seguro si es necesario pasar por este paso

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  
  const isFormValid = origin && destination && departureDate;

  function formatDate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(e.target.value);
  };
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };

  const handleArrivalDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(e.target.value);
  };
  
  
  const handleSubmit = (e: any) => {
    e.preventDefault(); // evitar el envio del formulario predeterminado
    
    
    try {
      const query : Query = {
        origin: origin.toLowerCase(),
        destination: destination.toLowerCase(),
        departureDate: departureDate.split('-').reverse().join('/'),
        ...(arrivalDate && { arrivalDate: departureDate.toLowerCase() }),
        // agrego al form SOLO las propiedades que contengan valor
      };
      dispatch(getPassagesByQuery(query));
    } catch (error) {
      throw new Error("algo salio mal");
    }
  };
  

  return (
    <section className="mx-auto w-4/5 rounded-3xl border-2 shadow-2xl shadow-black/40 lg:h-[510px]">
      <h1 className="mt-12 text-center text-xl text-blue">
        Llena el formulario para encontrar tu viaje
      </h1>
      <form className="flex flex-col items-center justify-center gap-5 pb-32 pt-12">
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input
            className="w-2/3 pl-2"
            placeholder="Desde que lugar..."
            type="text"
            value={origin}
            onChange={handleOriginChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input
            className="w-2/3 pl-2"
            placeholder="Hasta que lugar..."
            type="text"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>


        <div className="flex items-center justify-center">
          <HiTrendingUp className="w-10 text-blue" />
          <input
            className="w-2/3 pl-2"
            placeholder="Fecha de salida"
            type="date"
            value={departureDate}
            min={today}
            onChange={handleDepartureDateChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <HiTrendingDown className="w-10 text-blue" />
          <input
            className="w-2/3 pl-2"
            placeholder="Fecha de llegada"
            type="date"
            value={arrivalDate}
            min={departureDate ? departureDate : today}
            onChange={handleArrivalDateChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <HiTag className="w-10 text-blue" />
          <input
            className="w-2/3 pl-2"
            placeholder="Precio"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        <button onClick={handleSubmit} disabled={!isFormValid} className="w-1/2 self-center cursor-pointer">
          Buscar tu viaje!
        </button>
      </form>
    </section>
  );
}