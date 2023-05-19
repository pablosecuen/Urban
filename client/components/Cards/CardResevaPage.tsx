"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { HiOutlineLocationMarker, HiTag, HiTrendingUp, HiTrendingDown } from "react-icons/hi";
// import { MdPets } from "react-icons/md";
import { QueryParams } from "@component/app/types/QueryParams";
import Select, { SingleValue } from "react-select";
import getLocations from "../../services/api/locations";
import ToastComponent from "../00-Toastify/ToastComponent";

interface Location {
  label: string;
  value: string;
}

export default function Reserva() {
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10); // la fecha actual en formato YYYY-MM-DD

  // const locations = await getLocations();

  // - - - - - - - - - - - - - -  ESTADOS LOCALES - - - - - - - - - - - - - - -

  const [origin, setOrigin] = useState<string | null>();
  const [destination, setDestination] = useState<string | null>();
  // const [price, setPrice] = useState<number | undefined>();
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [locations, setLocations] = useState<Location[]>([]);

  const isFormValid = origin && destination ? true : false;

  // ------------ Handle Location Origin Selected -------------
  const handleOriginChange = (e: SingleValue<Location> | null ) => {
    const value = e?.value ?? null;
    setOrigin(value); 
  };
  // ---------- Handle Location Destination Selected ----------
  const handleDestinationChange = (e: SingleValue<Location> | null) => {
    const value = e?.value ?? null;
    setDestination(value)
  };
  // ------------------- Handle Departure ----------------------
  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };
  // --------------------- Handle Arrival ----------------------
  const handleArrivalDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(e.target.value);
  };

  // - - - - - - - - - - - - -  HANDLE SUBMIT - - - - - - - - - - - - -
  const handleSubmit = (e: any) => {
    e.preventDefault(); // evitar el envio del formulario predeterminado

    const query: QueryParams = {
      origin: origin?.toLowerCase(),
      destination: destination?.toLowerCase(),
      ...(departureDate && { departureDate: departureDate.split("-").reverse().join("-") }),
      ...(arrivalDate && { arrivalDate: arrivalDate.split("-").reverse().join("-") }),
      // ...(price && { price }),
      // armo la query y agrego las propiedades extras si las hay
    };
    const URL = Object.values(query).join("/");

    router.push(`/home/reserva/${URL}`);
  };

  useEffect(() => {
    const fetchLocations = async () => {
      const adapter: Location[] = [];

      const locations = await getLocations();
      locations.map((location: string) => {
        adapter.push({ label: location, value: location });
      });

      setLocations(adapter);
    };
    fetchLocations();
  }, []);

  return (
    <>
      <form className="flex flex-col items-center justify-center gap-5 pb-16 pt-12">
        <div className="flex items-center justify-center w-full">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <Select
            options={locations}
            placeholder="Origen..."
            className="capitalize w-2/3"
            onChange={handleOriginChange}
            isClearable
            value={origin ? { value: origin, label: origin } : null}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          {/* <div> */}
          <Select
            options={locations}
            placeholder="Destino..."
            className="capitalize w-2/3"
            onChange={handleDestinationChange}
            isClearable
            
            value={destination ? { value: destination, label: destination } : null}
          />
        </div>

        <div className="flex items-center justify-center w-full">
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
        <div className="flex items-center justify-center w-full">
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

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`transition_all w-1/2 self-center ${
            !isFormValid ? "!bg-gray-500" : "cursor-pointer"
          }`}
        >
          Buscar tu viaje!
        </button>
      </form>

      {/* Tostadora */}
      <ToastComponent />
    </>
  );
}
