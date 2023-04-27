import { FaMotorcycle, FaCar, FaBus, FaTaxi } from "react-icons/fa";
export default function Transportes() {
  return (
    <div className="ml-12 mx-auto border-2 p-10">
      <div className="flex flex-col gap-10 border-2">
        <h1 className="text-blue text-center text-xl">
          Estas son las mejores opciones encontradas
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaMotorcycle size="50" className="text-blue w-20" />
            <span className="text-gray-600 font-semibold text-xl">Motocicleta privada</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <FaCar size="50" className="text-blue w-20" />
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
            <FaTaxi size="50" className="text-blue w-20" />
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
            <FaMotorcycle size="50" className="text-blue w-20" />
            <span className="text-gray-600 font-semibold text-xl">Motocicleta privada</span>
          </div>
          <span className="pt-2 text-gray-600">
            Conductor: Luis G. Cootransandina - 1:00pm - Estrella St <br />
            Tiempo estimado: 4 horas
          </span>
        </div>
      </div>
      <div className="flex pt-10 gap-2">
        <button>Ver mas opciones</button>
        <button>Reservar</button>
      </div>
    </div>
  );
}
