import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineBriefcase } from "react-icons/hi";
import Link from "next/link";

export default function CardPaqueteriaPage() {
  return (
    <form className="flex flex-col items-center justify-center gap-5 pb-20 pt-12">
      <article className="flex items-center justify-center">
        <label htmlFor="origin" className="w-10">
          <HiOutlineLocationMarker className="w-full text-blue" />
        </label>
        <input id="origin" className="w-2/3 pl-2" placeholder="Desde qué lugar..." type="text" />
      </article>

      <div className="flex items-center justify-center">
        <label htmlFor="destination" className="w-10">
          <HiOutlineLocationMarker className="w-full text-blue" />
        </label>
        <input
          id="destination"
          className="w-2/3 pl-2"
          placeholder="Hasta qué lugar..."
          type="text"
        />
      </div>

      <div className="flex items-center justify-center">
        <label htmlFor="departureDate" className="w-10">
          <HiOutlineCalendar className="w-full text-blue" />
        </label>
        <input
          id="departureDate"
          className="w-2/3 pl-2"
          placeholder="Fecha"
          type="date"
          // value={departureDate}
          // min={today}
          // onChange={handleDepartureDateChange}
        />
      </div>

      <div className="flex items-center justify-center">
        <label htmlFor="items" className="w-10">
          <HiOutlineBriefcase className="w-full text-blue" />
        </label>
        <input id="items" className="w-2/3 pl-2" placeholder="Items a transportar..." type="text" />
      </div>

      <Link
        href={"home/paqueteria/transportes"}
        className="w-1/2 rounded-lg bg-blue p-2 text-center text-white"
      >
        <span>Buscar a tu cadete!</span>
      </Link>
    </form>
  );
}
