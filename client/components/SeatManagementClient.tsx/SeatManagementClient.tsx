"use client";
import React from "react";
import { CardProfilePropsPassage } from "@component/app/types/Passages";
import PlantaAlta from "@component/components/PlantaAlta/PlantaAlta";
import PlantaBaja from "@component/components/PlantaBaja/PlantaBaja";
import { useSelector } from "react-redux";

const SeatManagement: React.FC<CardProfilePropsPassage> = ({ selectedPassage }) => {
  const count = useSelector((state: any) => state.payment.passageById);
  console.log(count);

  return (
    <div className="relative mb-6 mt-16 flex min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
      <h2 className="py-4 text-center">Seat Management</h2>
      <ul className="flex items-center justify-center gap-4">
        <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
          <PlantaAlta selectedPassage={selectedPassage} />
        </li>
        <li className="flex w-1/2 items-center justify-center rounded-xl border-2 border-blue p-4">
          <PlantaBaja selectedPassage={selectedPassage} />
        </li>
      </ul>
    </div>
  );
};

export default SeatManagement;
