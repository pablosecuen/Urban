import { FaMotorcycle, FaCar, FaBus, FaTaxi } from "react-icons/fa";

import Link from "next/link";

export default function Viajes() {
  return (
    <div className="ml-12 mx-auto border-2 p-10 rounded-3xl shadow-2xl shadow-black/40">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-blue text-center font-semibold text-xl">
          Estas son las mejores opciones encontradas
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaBus size="30" className="text-blue w-20" />
            <span className="text-gray-600 font-semibold text-xl">Bus</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaCar size="30" className="text-blue w-20" />
            <span className="text-gray-600 font-semibold text-xl">Automovil privado</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaTaxi size="30" className="text-blue w-20" />
            <span className="text-gray-600 font-semibold text-xl">Taxi Publico</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaMotorcycle size="30" className="text-blue w-20" />
            <span className="text-gray-600 font-semibold text-xl">Motocicleta privada</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
      </div>
      <div className="flex pt-10 gap-2">
        <button className="w-1/2">Ver mas opciones</button>
        <Link href={'home/reserva/viajes/confirmacion'} className="w-1/2 bg-blue text-white rounded-lg p-2 text-center">
           <span>Reservar</span> 
        </Link>
      </div>
    </div>
  );
}
