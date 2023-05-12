"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit"
import { getPassagesId } from "@component/Redux/passage/passageActions";
import { useEffect } from "react";
;

export default function CardConfirmacionReserva({id}: {id: string}) {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const passage = useSelector((state: RootState) => state.passage.passageById);

  useEffect(() => {
    dispatch(getPassagesId(id))
  },[])

  console.log(passage);
  
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 py-4 shadow-2xl shadow-black/40">
      <p className="lg:text-center lg:text-3xl lg:font-bold">Pasaje disponible!</p>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold">Nombre del conductor</p>
        <p className=" lg:text-center lg:text-xl">Hardcodeado</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold"> Hora de salida</p>
        <p className=" lg:text-center lg:text-xl">{passage?.departureTime}</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold">Origen</p>
        <p className=" lg:text-center lg:text-xl">{passage?.origin}</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold">Destino</p>
        <p className=" lg:text-center lg:text-xl">{passage?.destination}</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold">Fecha de salida</p>
        <p className=" lg:text-center lg:text-xl">{passage?.departureDate}</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold">Fecha de llegada</p>
        <p className=" lg:text-center lg:text-xl">{passage?.arrivalDate}</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-xl lg:font-bold">Valor a pagar</p>
        <p className=" lg:text-center lg:text-xl">{passage?.price}</p>
      </div>
      <p className="text-center text-gray-400">
        tocando el boton para abonar el servicio aceptas nuestros terminos y condiciones de uso
      </p>
      <Link href="/home/reserva/viajes/confirmacion/pagos" className="flex justify-center">
        <button className="mt-10 w-1/2">Ir a pagar</button>
      </Link>
    </div>
  );
}
