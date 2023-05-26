"use client";
import React, { useEffect } from "react";
import { CardProfilePropsEnabledSeats } from "@component/app/types/Passages";
import PlantaAlta from "@component/components/PlantaAlta/PlantaAlta";
import PlantaBaja from "@component/components/PlantaBaja/PlantaBaja";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const SeatManagement: React.FC<CardProfilePropsEnabledSeats> = ({ enabledSeats }) => {
  const router = useRouter();
  const count = useSelector((state: any) => state.payment.passageById[0]);
  const passagerData = useSelector((state: any) => state.payment?.passengerData);
  const lengthData = passagerData.length;

  const passangers = count?.quantity;
  useEffect(() => {
    if (count?.quantity - lengthData === 0) {
      router.push("/home/reserva/viajes/confirmacion/pagos");
    }
  }, [count, lengthData, router]);
  return (
    <div className="flex w-full flex-col  items-center justify-center gap-2 rounded-3xl border-2 border-gray-300 bg-white py-4 shadow-xl shadow-black/40 xl:h-[650px] xl:justify-between">
      <div className="relative  mt-4 flex min-w-0 flex-col break-words rounded-lg bg-transparent">
        <h2 className="flex text-center text-xl text-gray-700">
          Elige tus asientos{" "}
          <p className="text-bas ml-20 flex items-center text-center align-middle">
            Pasajeros restantes: {count?.quantity - lengthData}
          </p>
        </h2>

        <p className="pb-2 text-center text-sm italic text-gray-400">
          Al hacer click se te solicitara la informacion de los pasajeros
        </p>
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
