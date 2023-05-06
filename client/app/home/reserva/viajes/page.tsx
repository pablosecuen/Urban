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

  return (
    <div className="mx-auto h-full rounded-3xl p-10 shadow-2xl shadow-black/40 lg:ml-12 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-center text-xl text-blue">
          Estas son las mejores opciones encontradas
        </h1>

        {allPassages.map((passage) => (
          <Link
            href={`/home/reserva/viajes/${passage.id}`}
            key={passage.id}
            className="group flex w-full flex-col rounded-xl border border-blueGray-300 bg-blueGray-100 px-3 py-1 transition-all duration-100 hover:border hover:border-blueGray-700"
          >
            <h3 className="font-bold capitalize text-blueGray-700 ">
              {passage.origin} - {passage.destination}
            </h3>
            <small>{passage.departureDate}</small>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 pt-10">
        <button>Ver mas opciones</button>
        {/* <Link href="/home/reserva/viajes/confirmacion"> */}
          {/* <button>Reservar</button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
