"use client";

import Link from "next/link";

export default function Confirmacion() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="lg:font-bold lg:text-3xl lg:text-center">Viaje Confirmado</p>
      <div className="flex justify-center">
        <p className="lg:font-bold lg:text-3xl lg:text-center">Nombre del conductor</p>
        <p className=" lg:text-3xl lg:text-center">Luis martin</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:font-bold lg:text-3xl lg:text-center"> Hora de recogida</p>
        <p className=" lg:text-3xl lg:text-center">3:00 horas</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:font-bold lg:text-3xl lg:text-center">Lugar de recogida</p>
        <p className=" lg:text-3xl lg:text-center">la casa de ima</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:font-bold lg:text-3xl lg:text-center">Valor a pagar</p>
        <p className=" lg:text-3xl lg:text-center">un toco de plata</p>
      </div>
      <p className="text-gray-400 text-center">
        tocando el boton para abonar el servicio aceptas nuestros terminos y condiciones de uso
      </p>
      <Link href="/home/reserva/viajes/confirmacion/pagos" className="flex justify-center">
      <button className="w-1/2 mt-10">Ir a pagar</button></Link>
    </div>
  );
}
