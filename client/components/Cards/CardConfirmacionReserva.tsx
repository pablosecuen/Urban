/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { getPassagesId } from "@component/Redux/passage/passageActions";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getPassagesIdForPayment } from "@component/Redux/payment/paymentActions";

export default function CardConfirmacionReserva({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const passage = useSelector((state: RootState) => state.passage.passageById);
  const stock: any = passage?.stock; // Stock disponible del objeto (ejemplo)
  const router = useRouter();
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    dispatch(getPassagesIdForPayment([{ passageId: id, quantity: count }]));
    router.push(`/home/reserva/${id}}/buslayout`);
  };
  useEffect(() => {
    dispatch(getPassagesId(id));
  }, [id]); // Include 'count' and 'id' in the dependency array

  return (
    <>
      <article className="bg-white  lg:flex">
        <div className="flex flex-col p-2 lg:w-1/2 lg:p-4">
          <section className="flex p-2 lg:p-4">
            <div className=" mx-auto flex w-20 flex-col text-center">
              <small className=" font-semibold">Origen: </small>
              <small className="">{passage?.origin}</small>
            </div>
            <div className=" mx-auto flex w-20 flex-col">
              <small className="text-center font-semibold">Destino: </small>
              <small className="text-center">{passage?.destination}</small>
            </div>
          </section>
          <hr className="mx-auto w-3/4 bg-black/70 " />
          <section className="flex flex-col gap-2">
            <div className=" flex flex-col">
              <small className="text-center font-semibold">Salida: </small>
              <small className="text-center">
                {passage?.departureTime}, {passage?.departureDate}
              </small>
            </div>
            <div className=" flex flex-col">
              <small className="text-center font-semibold">Llegada: </small>
              <small className="text-center">
                {passage?.arrivalTime}, {passage?.arrivalDate}
              </small>
            </div>
            <hr className="mx-auto w-3/4 bg-black/70" />
          </section>
          <section className="flex p-2 lg:p-4">
            <div className=" mx-auto flex w-20 flex-col text-center">
              <small className=" font-semibold">Valor unitario: </small>
              <small className="">${passage?.price}</small>
            </div>
            <div className=" mx-auto flex w-20 flex-col">
              <small className="text-center font-semibold">Pasajes disponibles: </small>
              <small className="text-center">{passage?.stock}</small>
            </div>
          </section>
          <div className="flex w-auto items-center justify-center px-28 text-center">
            <button onClick={handleDecrement} className="w-auto">
              -
            </button>
            <small className="p-4">{count}</small>
            <button onClick={handleIncrement} className="w-auto">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <section className="mx-auto flex h-1/3 w-64 justify-center">
            <div className="flex h-32 w-64  items-center justify-center overflow-hidden ">
              <Image
                onClick={handleOpenModal}
                src={passage?.img !== undefined ? passage.img : ""}
                alt="amaga-bolombolo"
                className="transition_all  cursor-zoom-in hover:scale-125"
                width={250}
                height={250}
              />
            </div>
            {isModalOpen && (
              <>
                <div
                  onClick={closeModal}
                  className="absolute left-0 top-0 h-screen bg-black/30 transition-opacity duration-700"
                ></div>
                <div
                  className=" fixed inset-0 z-50 flex items-center justify-center  "
                  onClick={closeModal}
                >
                  <div className="flex w-[800px] items-center justify-center ">
                    <Image
                      onClick={handleOpenModal}
                      src={passage?.img !== undefined ? passage.img : ""}
                      alt="amaga-bolombolo"
                      className="w-full rounded-3xl shadow-2xl shadow-black/40"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </>
            )}
          </section>
          <div className="flex flex-col gap-2">
            <section className="text-center text-xl font-semibold text-amber-700">
              5 ESTRELLAS
            </section>
            <section className="mx-auto flex w-11/12 flex-col items-center justify-center gap-2">
              {passage?.companyData?.evaluation?.map((e, i) => {
                return (
                  <article
                    key={i}
                    className="flex w-full flex-col rounded-md bg-gray-100 px-2 py-1 text-left"
                  >
                    <div className="flex gap-2">
                      <p className="text-sm font-semibold text-slate-800">USUARIO</p>
                      <span className="text-sm font-semibold text-amber-700	">
                        {e.rating} estrellas
                      </span>
                    </div>
                    <small className="text-slate-800">{e.comment}</small>
                  </article>
                );
              })}
            </section>
          </div>
        </div>

        <button onClick={handleClick}>Siguiente paso</button>
      </article>
    </>
  );
}
