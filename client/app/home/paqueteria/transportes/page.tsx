import { FaMotorcycle, FaCar, FaTaxi } from "react-icons/fa";
import Link from "next/link";

export default function Transportes() {
  return (
    <div className=" mx-auto mt-10 rounded-3xl border-2 p-10 py-4 shadow-2xl shadow-black/40 lg:h-[510px]">
      <div className="flex scroll-my-10 flex-col gap-6">
        <h1 className="text-center text-xl font-semibold text-blue">
          Estas son las mejores opciones encontradas
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaCar size="30" className="w-20 text-blue" />
            <span className="text-xl font-semibold text-gray-600">Automovil privado</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaTaxi size="30" className="w-20 text-blue" />
            <span className="text-xl font-semibold text-gray-600">Taxi Publico</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaMotorcycle size="30" className="w-20 text-blue" />
            <span className="text-xl font-semibold text-gray-600">Motocicleta privada</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
      </div>
      <div className="flex gap-2 pt-10">
        <button className="w-1/2">Ver mas opciones</button>
        <Link
          href={"home/paqueteria/transportes/confirmacion"}
          className="w-1/2 rounded-lg bg-blue p-2 text-center text-white"
        >
          <span>Reservar</span>
        </Link>
      </div>
    </div>
  );
}
