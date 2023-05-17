"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { HiOutlineLocationMarker, HiTag, HiTrendingUp, HiTrendingDown } from "react-icons/hi";
// import { MdPets } from "react-icons/md";
import { QueryParams } from "@component/app/types/QueryParams";
import axios from "axios";
import { toast } from "react-toastify";

import ToastComponent from "../00-Toastify/ToastComponent";

export default function Reserva() {
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10); // la fecha actual en formato YYYY-MM-DD

  // - - - - - - - - - - - - - -  ESTADOS LOCALES - - - - - - - - - - - - - - -

  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>();
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [locationOrigin, setLocationOrigin] = useState<any>([]);
  const [locationDestination, setLocationDestination] = useState<any>([]);
  const isFormValid = origin && destination ? true : false;

  //  - - - - - - - - - - - - -  ENDPOINT DE BACK - - - - - - - - - - - - -
  const locations = "http://localhost:3000/passage/locations?destination=";
  // - - - - - - - - - - - - -  HANDLERS DE LOS INPUTS - - - - - - - - - -

  // ------------------------- Handlers Origin ------------------------- //
  // --------- Handle Origin ----------
  const handleOriginChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOrigin(value);
    if (value.length < 3) {
      setLocationOrigin([]);
    }
  };
  let typingTimerOrigin: any;
  // ---------- Handle Key Up Origin ----------
  const handleKeyUpOrigin = () => {
    clearTimeout(typingTimerOrigin);
    if (origin.length >= 3) {
      typingTimerOrigin = setTimeout(() => {
        makeRequestOrigin();
      }, 200); // Cambia el tiempo de espera según tus necesidades al soltar una tecla
    }
  };
  const makeRequestOrigin = async () => {
    try {
      const response = await axios.get(locations + origin);
      const { data } = response;
      const locationArray = data.locations;
      setLocationOrigin(locationArray);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  // ---------- Handle Key Down Origin ----------
  const handleKeyDownOrigin = () => {
    clearTimeout(typingTimerOrigin);
  };

  // ------------------------- Handlers Location ------------------------- //
  // --------- Handle Location Selected ----------
  const handleLocationOriginSelected = (e: string) => {
    setOrigin(e);
    setLocationOrigin([]);
  };
  let typingTimerDestination: any;
  const handleKeyUpDestination = () => {
    clearTimeout(typingTimerDestination);
    if (destination.length >= 3) {
      typingTimerDestination = setTimeout(() => {
        makeRequestDestination();
      }, 200); // Cambia el tiempo de espera según tus necesidades al soltar una tecla
    }
  };
  const makeRequestDestination = async () => {
    try {
      const response = await axios.get(locations + destination);
      const { data } = response;
      const destinationArray = data.locations;
      setLocationDestination(destinationArray);
    } catch (error) {
      console.error(error);
    }
  };
  // ---------- Handle Key Down Origin ----------
  const handleKeyDownDestination = () => {
    clearTimeout(typingTimerDestination);
  };
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    if (value.length < 3) {
      setLocationDestination([]);
    }
  };
  // ---------- Handle Departure ----------
  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };
  // ---------- Handle Arrival ----------
  const handleArrivalDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalDate(e.target.value);
  };

  // - - - - - - - - - - - - -  HANDLE SUBMIT - - - - - - - - - - - - -
  const handleSubmit = (e: any) => {
    e.preventDefault(); // evitar el envio del formulario predeterminado

    const query: QueryParams = {
      origin: origin.toLowerCase(),
      destination: destination.toLowerCase(),
      ...(departureDate && { departureDate: departureDate.split("-").reverse().join("-") }),
      ...(arrivalDate && { arrivalDate: arrivalDate.split("-").reverse().join("-") }),
      ...(price && { price }),
      // armo la query y agrego las propiedades extras si las hay
    };
    const URL = Object.values(query).join("/");

    router.push(`/home/reserva/${URL}`);
  };

  return (
    <section className="mx-auto mt-5 w-11/12 rounded-3xl border-2 px-2 pt-10 shadow-2xl shadow-black/40 lg:mt-0 lg:h-[510px]">
      <h1 className="px-8 text-center text-blue lg:px-0 lg:text-xl">
        Llena el formulario para encontrar tu viaje
      </h1>
      <form className="flex flex-col items-center justify-center gap-5 pb-16 pt-12">
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <div className="relative w-2/3">
            <input
              name="origin"
              className="pl-2"
              placeholder="Desde que lugar..."
              type="text"
              value={origin}
              onChange={handleOriginChange}
              onKeyUp={handleKeyUpOrigin}
              onKeyDown={handleKeyDownOrigin}
              autoComplete="off"
            />

            <div
              className={`transition_all scrollbar absolute -left-[1px] top-[23px] mx-auto h-0 overflow-hidden rounded-b-md border border-[#0000ff] bg-white shadow-2xl xl:w-[429px] ${
                locationOrigin.length > 0 ? "h-max opacity-100" : "h-0 border-none opacity-0"
              } ${locationOrigin.length > 3 ? "h-36 overflow-y-scroll" : ""}  `}
            >
              {locationOrigin.map((item: string) => (
                <p
                  key={item}
                  className="px-4 text-black hover:cursor-pointer hover:bg-gray-300"
                  onClick={() => handleLocationOriginSelected(item)}
                >
                  {item}
                  <hr className="" />
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <div className="relative w-2/3">
            <input
              className="pl-2"
              placeholder="Hasta que lugar..."
              type="text"
              value={destination}
              onChange={handleDestinationChange}
              onKeyUp={handleKeyUpDestination}
              onKeyDown={handleKeyDownDestination}
              autoComplete="off"
            />

            <div
              className={`transition_all scrollbar absolute -left-[1px] top-[23px] mx-auto h-0 overflow-hidden rounded-b-md border border-[#0000ff] bg-white shadow-2xl xl:w-[429px] ${
                locationDestination.length > 0 ? "h-max opacity-100" : "h-0 border-none opacity-0"
              } ${locationDestination.length > 3 ? "h-36 overflow-y-scroll" : ""}  `}
            >
              {locationDestination.map((item: string) => (
                <p
                  key={item}
                  className="px-4 text-black hover:cursor-pointer hover:bg-gray-300"
                  onClick={() => handleLocationOriginSelected(item)}
                >
                  {item}
                  <hr className="" />
                </p>
              ))}
            </div>
          </div>
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
    </section>
  );
}
