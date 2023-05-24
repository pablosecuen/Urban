"use client";
import React from "react";
import { CardProfilePropsEnabledSeats } from "@component/app/types/Passages";
import PlantaAlta from "@component/components/PlantaAlta/PlantaAlta";
import PlantaBaja from "@component/components/PlantaBaja/PlantaBaja";
import { useSelector } from "react-redux";

const SeatManagement: React.FC<CardProfilePropsEnabledSeats> = ({ enabledSeats }) => {
  const count = useSelector((state: any) => state.payment.passageById[0]);
  const passagerData = useSelector((state: any) => state.payment?.passengerData)
  const lengthData = passagerData.length
  console.log({longitud:passagerData.length});

  const passangers = count?.quantity 

  return (
    <div className="flex w-full flex-col  items-center justify-center gap-2 rounded-3xl border-2 border-gray-300 bg-white py-4 shadow-xl shadow-black/40 xl:h-[650px] xl:justify-between">
      <div className="relative  flex min-w-0 flex-col break-words rounded-lg bg-transparent ">
        <h2 className="py-4 text-center">Elige tus asientos </h2>
        <p className="italic text-gray-400">
          Al hacer click se te solicitara la informacion de los pasajeros
        </p>
        <p>Pasajeros restantes: {count?.quantity - lengthData}</p>
        <ul className="flex items-center justify-center gap-4 bg-transparent">
          <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
            <PlantaAlta enabledSeats={enabledSeats} passangers={passangers} />
          </li>
          <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
            <PlantaBaja enabledSeats={enabledSeats} passangers={passangers} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SeatManagement;
