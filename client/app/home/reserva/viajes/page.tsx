import { FaMotorcycle, FaCar, FaBus, FaTaxi } from "react-icons/fa";
export default function Viajes() {
  return (
    <div className="w-4/5 mx-auto border-2 p-20">
      <div className="flex flex-col gap-10 border-2">
        <h1 className="text-blue text-center text-xl">
          Estas son las mejores opciones encontradas
        </h1>
        <div className="flex items-center justify-center">
          <FaMotorcycle size="x10" className="text-blue w-10" />
          <span className="text-center">
            Cootransandina - 1:00pm <br />
            Desde: Envigrado ST, Hasta: Lugar <br />
            tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <FaCar size="x10" className="text-blue w-10" />
          <span className="text-center">
            Cootransandina - 1:00pm <br />
            Desde: Envigrado ST, Hasta: Lugar <br />
            tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <FaBus size="x10" className="text-blue w-10" />
          <span className="text-center">
            Cootransandina - 1:00pm <br />
            Desde: Envigrado ST, Hasta: Lugar <br />
            tiempo estimado: 4 horas
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <FaTaxi size="x10" className="text-blue w-10" />
          <span className="text-center">
            Cootransandina - 1:00pm <br />
            Desde: Envigrado ST, Hasta: Lugar <br />
            tiempo estimado: 4 horas
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
