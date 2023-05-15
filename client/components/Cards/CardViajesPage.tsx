"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

export default function CardViajesPage() {
  const passages = useSelector((state: RootState) => state.passage.allPassagesByQuery);
  const status = useSelector((state: RootState) => state.passage.status);
  const error = useSelector((state: RootState) => state.passage.error);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {passages.map((passage) => (
        <Link
          href={`/home/reserva/viajes/${passage.id}`}
          key={passage.id}
          className="group flex items-center justify-between gap-4 rounded-full border bg-white px-10 py-2 transition-all duration-200 hover:border-blue"
        >
          <small className="font-bold capitalize text-blueGray-700 ">
            {passage.origin} - {passage.destination}
          </small>
          <small>{passage.departureDate}</small>
        </Link>
      ))}
    </>
  );
}
