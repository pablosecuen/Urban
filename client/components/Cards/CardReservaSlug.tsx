"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { getPassagesByQuery } from "../../Redux/passage/passageActions";
import { QueryParams } from "../../app/types/QueryParams";

interface CardReservaSlugProps {
  params: {
    slug: string;
  };
}

export default function CardReservaSlug({ params }: CardReservaSlugProps) {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const passages = useSelector((state: RootState) => state.passage.allPassagesByQuery.passages);

  const query: QueryParams = {
    origin: params.slug[0],
    destination: params.slug[1],
    departureDate: params.slug[2].split("-").join("/"),
    ...(params.slug[3] && { arrivalDate: params.slug[3] }),
    // armo la query y agrego las propiedades extras si las hay
  };

  useEffect(() => {
    dispatch(getPassagesByQuery(query));
  }, []);

  return (
    <>
      {passages.map((passage) => (
        <Link
          href={`/home/reserva/${passage.id}`}
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
