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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const groupContainerStyles =
    "group flex items-center justify-between gap-4 rounded-md border bg-white px-2 py-2 transition-all duration-200 hover:border-blue";
  const companyContainerStyles = "flex items-center justify-between gap-4 align-middle";
  const companyTextStyles =
    "flex items-center justify-between px-1 text-left align-middle font-bold capitalize text-blueGray-700";
  const smallTextStyles = "flex items-center justify-between px-1 text-left";
  const stockContainerStyles = "flex flex-row items-center justify-around px-1";
  const stockTextStyles = "rounded-md bg-blue px-1.5 text-center text-sm font-bold text-white";
  const serviceContainerStyles = "flex w-24 items-center justify-around px-1 text-center";
  const priceContainerStyles = "flex items-center justify-around px-1 text-right";

  return (
    <>
      {passages.map((passage) => (
        <Link
          href={`/home/reserva/${passage.id}`}
          key={passage.id}
          className={groupContainerStyles}
        >
          <div className={companyContainerStyles}>
            <div className="flex items-center px-1 align-middle">
              <small className={companyTextStyles}>
                <FaBus size="40" className="w-auto pr-2 text-blue" />
                {passage.companyData?.name}
              </small>
            </div>
            <div className="flex w-auto flex-col">
              <small className={smallTextStyles}>
                {passage.departureDate} {passage.departureTime}
              </small>
            </div>
            <div className="flex w-20 flex-col">
              <small className={smallTextStyles}>
                {passage.arrivalDate} {passage.arrivalTime}
              </small>
            </div>
            <div className={stockContainerStyles}>
              <small>
                Pasajes:
                <small className={stockTextStyles}>{passage.stock}</small>
              </small>
            </div>
            <div className={serviceContainerStyles}>{passage.service}</div>
            <div className={priceContainerStyles}>Precio: {passage.price}</div>
          </div>
        </Link>
      ))}
    </>
  );
}
