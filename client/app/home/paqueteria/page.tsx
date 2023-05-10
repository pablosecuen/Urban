import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineBriefcase } from "react-icons/hi";
import Link from "next/link";

export default function Paqueteria() {
  return (
    <div className="mx-auto mb-8 w-4/5 rounded-3xl border-2 shadow-2xl shadow-black/40 lg:mb-0">
      <h1 className="mt-12 text-center text-xl text-blue">
        Llena el formulario para encontrar tu cadete
      </h1>
      <form className="flex flex-col items-center justify-center gap-5 pb-20 pt-12">
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input className="w-2/3 pl-2" placeholder="Desde que lugar..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input className="w-2/3 pl-2" placeholder="Hasta que lugar..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineCalendar className="w-10 text-blue" />
          <input
            className="w-2/3 pl-2"
            placeholder="Fecha"
            type="date"
            // value={departureDate}
            // min={today}
            // onChange={handleDepartureDateChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineBriefcase className="w-10 text-blue" />
          <input className="w-2/3 pl-2" placeholder="Items a transportar..." type="text" />
        </div>

        <Link
          href={"home/paqueteria/transportes"}
          className="w-1/2 rounded-lg bg-blue p-2 text-center text-white"
        >
          <span>Buscar a tu cadete!</span>
        </Link>
      </form>
    </div>
  );
}
