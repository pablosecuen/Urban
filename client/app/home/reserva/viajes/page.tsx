import axios from "axios";
import Link from "next/link";

import { Passages, Passage } from "@component/app/types/Travels";
import { FaMotorcycle, FaCar, FaBus, FaTaxi } from "react-icons/fa";

// Traigo los pasages de la API
const getPassages = async (): Promise<Passages> => {
  const data = await axios.get("http://localhost:3000/passage?pageSize=10000");
  const passages = data.data;
  return passages;
};

export default async function Viajes() {
  const data = await getPassages();
  console.log(data.passages);
  

  return (


    <div className="mx-auto h-full rounded-3xl p-10 shadow-2xl shadow-black/40 lg:ml-12 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-center text-xl text-blue">
          Estas son las mejores opciones encontradas
        </h1>

        {data?.passages.map((passage: Passage) => (

        <Link key={passage.id} href={`/home/viajes/${passage.id}`} className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaBus size="20" className="w-4 text-blue" />
            <span className="text-lg font-semibold text-gray-600 capitalize">{passage.origin} - {passage.destination}</span>
          </div>
          <small className="pt-2 text-sm text-gray-600">
            {passage.departureDate} - {passage.arrivalDate}
          </small>
        </Link>
        ))}


        {/* <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaCar size="20" className="w-4 text-blue" />
            <span className="text-lg font-semibold text-gray-600">Automovil privado</span>
          </div>
          <span className="pt-2 text-sm text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaTaxi size="20" className="w-4 text-blue" />
            <span className="text-lg font-semibold text-gray-600">Taxi Publico</span>
          </div>
          <span className="pt-2 text-sm text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <FaMotorcycle size="20" className="w-4 text-blue" />
            <span className="text-lg font-semibold text-gray-600">Motocicleta privada</span>
          </div>
          <span className="pt-2 text-sm text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div> */}
      </div>
      <div className="flex gap-2 pt-10">
        <button>Ver mas opciones</button>
        <Link href="/home/reserva/viajes/confirmacion">
          <button>Reservar</button>
        </Link>
      </div>
    </div>
  );
}
