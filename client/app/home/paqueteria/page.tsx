import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineBriefcase } from "react-icons/hi";
import Link from "next/link";


export default function Paqueteria() {
  return (
    <div className="w-4/5 mx-auto border-2 rounded-3xl shadow-2xl shadow-black/40 mb-8 lg:mb-0">
      <h1 className="text-blue text-center text-xl mt-12">
        Llena el formulario para encontrar tu cadete
      </h1>
      <form className="flex flex-col gap-5 pb-20 pt-12 items-center justify-center">
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Desde que lugar..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Hasta que lugar..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineCalendar className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Cuando?..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineBriefcase className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Items a transportar..." type="text" />
        </div>

        <Link href={'home/paqueteria/transportes'} className="w-1/2 bg-blue text-white rounded-lg p-2 text-center">
           <span>Buscar a tu cadete!</span> 
        </Link>
      </form>
    </div>
  );
}
