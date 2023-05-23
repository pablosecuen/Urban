import React from "react";
import PlantaAltaAdmin from "../PlantaAltaAdmin/PlantaAltaAdmin";
import PlantaBajaAdmin from "../PlantaBajaAdmin/PlantaBajaAdmin";
import { CardProfilePropsPassage } from "@component/app/types/Passages";

const SeatManagement: React.FC<CardProfilePropsPassage>  = ({selectedPassage}) => {
  return (
    <div className="relative mb-6 mt-16 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
      <h2 className="py-4 text-center">Seat Management</h2>
      <ul className="flex items-center justify-center gap-4">
        <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
          <PlantaAltaAdmin selectedPassage={selectedPassage}/>
        </li>
        <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
          <PlantaBajaAdmin selectedPassage={selectedPassage}/>
        </li>
      </ul>
    </div>
  );
};

export default SeatManagement;
