"use client";

import Link from "next/link";

export default function Confirmacion() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-20 lg:py-0">
      <p className="font-bold lg:text-3xl text-center">Pedido especial confirmado</p>
      <div className="flex justify-center">
        <p className="font-bold lg:text-3xl text-center">Nombre del cadete</p>
        <p className=" lg:text-3xl text-center">Luis martin</p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold lg:text-3xl text-center"> Hora de recogida</p>
        <p className=" lg:text-3xl text-center">3:00 horas</p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold lg:text-3xl text-center">Lugar de recogida</p>
        <p className=" lg:text-3xl text-center">Lugar indicado</p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold lg:text-3xl text-center">Valor a pagar</p>
        <p className=" lg:text-3xl text-center">un toco de plata</p>
      </div>
      <p className="text-gray-400 text-center">
        {" "}
        tocando el boton para abonar el servicio aceptas nuestros terminos y condiciones de uso
      </p>
      <Link
        href="/home/especiales/confirmacion/pagos"
        className="w-2/3 text-center bg-blue text-white rounded-md p-2"
      >
        Ir a pagar
      </Link>
    </div>
  );
}
