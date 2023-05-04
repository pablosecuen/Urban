"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { fetchAllPassages } from "@component/Redux/passage/passageSlice";

export default function Viajes() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const allPassages = useSelector((state: RootState) => state.passage.allPassages);

  useEffect(() => {
    dispatch(fetchAllPassages());
  }, []);

  console.log(allPassages);

  return (
    <div className="mx-auto h-full rounded-3xl p-10 shadow-2xl shadow-black/40 lg:ml-12 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-center text-xl text-blue">
          Estas son las mejores opciones encontradas
        </h1>

        {allPassages.map((passage) => (
          <section key={passage.id} className="flex w-full flex-col border border-black">
            <h1 className="border capitalize">
              {passage.origin} - {passage.destination}
            </h1>
            <small>
              {passage.departureDate} - {passage.arrivalDate}
            </small>
          </section>
        ))}
      </div>
      <div className="flex gap-2 pt-10">
        <button>Ver mas opciones</button>
        <Link href="/home/reserva/viajes/confirmacion">
          <button>Reservar</button>
        </Link>
      </div>
    </div>
  );
}
