"use client";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

export default function CardConfirmacionReserva(id: {id: string}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 py-4 shadow-2xl shadow-black/40">
      <p className="lg:text-center lg:text-3xl lg:font-bold">Viaje Confirmado</p>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-3xl lg:font-bold">Nombre del conductor</p>
        <p className=" lg:text-center lg:text-3xl">Luis martin</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-3xl lg:font-bold"> Hora de recogida</p>
        <p className=" lg:text-center lg:text-3xl">3:00 horas</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-3xl lg:font-bold">Lugar de recogida</p>
        <p className=" lg:text-center lg:text-3xl">la casa de ima</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:text-center lg:text-3xl lg:font-bold">Valor a pagar</p>
        <p className=" lg:text-center lg:text-3xl">un toco de plata</p>
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
