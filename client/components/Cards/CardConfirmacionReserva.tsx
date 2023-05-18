/* eslint-disable react-hooks/exhaustive-deps */
"use client";
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
    <>
      <article className="lg:flex">
        <div className="lg:max-w-[49%]">
          <section className=" flex justify-center gap-2 ">
            <h5 className="lg:text-right lg:text-lg lg:font-bold "> Hora de salida: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.departureTime}</p>
          </section>
          <section className="flex justify-center gap-2">
            <h5 className="lg:text-right lg:text-lg lg:font-bold">Origen: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.origin}</p>
          </section>
          <section className="flex justify-center gap-2">
            <h5 className="lg:text-right lg:text-lg lg:font-bold">Destino: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.destination}</p>
          </section>
          <section className="flex justify-center gap-2">
            <h5 className="lg:text-right lg:text-lg lg:font-bold">Fecha de salida: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.departureDate}</p>
          </section>
          <section className="flex justify-center gap-2">
            <h5 className="lg:text-right lg:text-lg lg:font-bold">Fecha de llegada: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.arrivalDate}</p>
          </section>
          <section className="flex justify-center gap-2">
            <h5 className="lg:text-right lg:text-lg lg:font-bold">Valor a pagar: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.price}</p>
          </section>
          <section className="flex justify-center gap-2">
            <h5 className="lg:text-right lg:text-lg lg:font-bold">Stock: </h5>
            <p className=" lg:text-left lg:text-lg">{passage?.stock}</p>
          </section>
          <div className="flex w-auto items-center justify-center text-center">
            <button onClick={handleDecrement} className="w-auto">
              -
            </button>
            <p className="p-4">{count}</p>
            <button onClick={handleIncrement} className="w-auto">
              +
            </button>
          </div>
        </div>
        <div className="lg:max-w-[49%]"></div>
      </article>
    </>
  );
}
