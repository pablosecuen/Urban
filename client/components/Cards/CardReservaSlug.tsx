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
          className="group flex items-center justify-between gap-4 rounded-md border bg-white px-2 py-2 transition-all duration-200 hover:border-blue"
        >
          <div className="flex  items-center align-middle ">
            <div className="flex items-center px-1 align-middle">
              <small className="flex items-center justify-between px-1 align-middle font-bold capitalize  text-blueGray-700 ">
                <FaBus size="40" className=" w-auto pr-2 text-blue" />
                {passage.companyData?.name}
              </small>
            </div>
            <div className="flex flex-col">
              <small className="px-1">
                {passage.departureDate} {passage.departureTime}
              </small>
            </div>
            <div className="flex flex-col">
              <small className="flex items-center justify-around px-1">
                {passage.arrivalDate} {passage.arrivalTime}
              </small>
            </div>
            <div className="flex flex-row items-center justify-around px-1">
              <small>
                Pasajes:{" "}
                <small className="rounded-md bg-blue px-1.5 text-center text-sm font-bold text-white ">
                  {passage.stock}
                </small>
              </small>
            </div>
            <div className="flex items-center justify-around px-1">{passage.service}</div>
            <div className="flex items-center justify-around px-1">Precio: {passage.price}</div>
          </div>
        </Link>
      ))}
    </>
  );
}
