import Link from "next/link";
import { FaMotorcycle, FaCar, FaBus, FaTaxi } from "react-icons/fa";


export default function Viajes() {
  return (
    <div className="lg:ml-12 mx-auto p-10 h-full rounded-3xl shadow-2xl shadow-black/40 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-blue text-center text-xl">
          Estas son las mejores opciones encontradas
        </h1>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex gap-2 items-center">
            <FaBus size="20" className="text-blue w-4" />
            <span className="text-gray-600 font-semibold text-lg">Bus</span>
          </div>
          <span className="pt-2 text-gray-600 text-sm">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaCar size="20" className="text-blue w-4" />
            <span className="text-gray-600 font-semibold text-lg">Automovil privado</span>
          </div>
          <span className="pt-2 text-gray-600 text-sm">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaTaxi size="20" className="text-blue w-4" />
            <span className="text-gray-600 font-semibold text-lg">Taxi Publico</span>
          </div>
          <span className="pt-2 text-gray-600 text-sm">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaMotorcycle size="20" className="text-blue w-4" />
            <span className="text-gray-600 font-semibold text-lg">Motocicleta privada</span>
          </div>
          <span className="pt-2 text-gray-600 text-sm">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
      </div>
      <div className="flex pt-10 gap-2">
        <button>Ver mas opciones</button>
        <Link href="/home/reserva/viajes/confirmacion">
        <button>Reservar</button></Link>
      </div>
    </div>
  );
}
