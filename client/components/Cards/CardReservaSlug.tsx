"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { getPassagesByQuery } from "../../Redux/passage/passageActions";
import { QueryParams } from "../../app/types/QueryParams";
import { FaBus } from "react-icons/fa";

interface CardReservaSlugProps {
  params: {
    slug: string;
  };
}

export default function CardReservaSlug({ params }: CardReservaSlugProps) {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const passages = useSelector((state: RootState) => state.passage.allPassagesByQuery);

  const query: QueryParams = {
    origin: params.slug[0],
    destination: params.slug[1],
    ...(params.slug[2] && { departureDate: params.slug[2].split("-").join("/") }),
    ...(params.slug[3] && { arrivalDate: params.slug[3] }),
    // armo la query y agrego las propiedades extras si las hay
  };

  useEffect(() => {
    dispatch(getPassagesByQuery(query));
  }, []);
  console.log(passages);

  return (
    <>
      {passages.map((passage) => (
        <Link
          href={`/home/reserva/${passage.id}`}
          key={passage.id}
          className="group flex items-center justify-between gap-4 rounded-md border bg-white px-10 py-2 transition-all duration-200 hover:border-blue"
        >
          <div className="flex  items-center justify-center align-middle ">
            <div>
              <small className="flex font-bold capitalize text-blueGray-700 ">
                <FaBus size="60" className=" w-auto pr-2 text-blue" />
                {passage.origin} - {passage.destination}
              </small>
            </div>
            <div>
              <small>
                {passage.departureDate} {passage.departureTime}
              </small>
            </div>
            <div>
              {" "}
              <small>
                {passage.arrivalDate} {passage.arrivalTime}
              </small>
            </div>
            <div>
              <small>Pasajes: {passage.stock}</small>
            </div>
            <div></div>
          </div>
        </Link>
      ))}
    </>
  );
}
