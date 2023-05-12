/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@component/Redux/store/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { getPassagesId } from "@component/Redux/passage/passageActions";
import { useEffect, useState } from "react";
import { getPassagesIdForPayment } from "@component/Redux/payment/paymentActions";
export default function CardConfirmacionReserva({ id }: { id: string }) {
  const [count, setCount] = useState(0);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const passage = useSelector((state: RootState) => state.passage.passageById);
  const stock: any = passage?.stock; // Stock disponible del objeto (ejemplo)

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

  useEffect(() => {
    dispatch(getPassagesId(id));
    dispatch(getPassagesIdForPayment([{ passageId: id, quantity: count }]));
  }, [count, id]); // Include 'count' and 'id' in the dependency array

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 py-4 shadow-2xl shadow-black/40">
      <h3 className="lg:text-center lg:text-3xl lg:font-bold">Pasaje disponible!</h3>

      <div className=" flex justify-center gap-2 ">
        <p className="lg:text-right lg:text-lg lg:font-bold "> Hora de salida: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.departureTime}</p>
      </div>
      <div className="flex justify-center gap-2">
        <p className="lg:text-right lg:text-lg lg:font-bold">Origen: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.origin}</p>
      </div>
      <div className="flex justify-center gap-2">
        <p className="lg:text-right lg:text-lg lg:font-bold">Destino: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.destination}</p>
      </div>
      <div className="flex justify-center gap-2">
        <p className="lg:text-right lg:text-lg lg:font-bold">Fecha de salida: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.departureDate}</p>
      </div>
      <div className="flex justify-center gap-2">
        <p className="lg:text-right lg:text-lg lg:font-bold">Fecha de llegada: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.arrivalDate}</p>
      </div>
      <div className="flex justify-center gap-2">
        <p className="lg:text-right lg:text-lg lg:font-bold">Valor a pagar: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.price}</p>
      </div>
      <div className="flex justify-center gap-2">
        <p className="lg:text-right lg:text-lg lg:font-bold">Stock: </p>
        <p className=" lg:text-left lg:text-lg">{passage?.stock}</p>
      </div>
      <div className="flex w-auto items-center justify-center text-center">
        <button onClick={handleDecrement} className="w-auto">
          -
        </button>
        <p className="p-4">{count}</p>
        <button onClick={handleIncrement} className="w-auto">
          +
        </button>
      </div>

      <p className="w-4/5 text-center text-gray-400">
        tocando el boton para abonar el servicio aceptas nuestros terminos y condiciones de uso
      </p>
      <Link href="/home/reserva/viajes/confirmacion/pagos" className="flex justify-center">
        <button className="mt-10 w-1/2">Ir a pagar</button>
      </Link>
    </div>
  );
}
