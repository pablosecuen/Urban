import Link from "next/link";
import {
  HiUserGroup,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Especiales() {
  return (
    <div className="lg:w-4/5 lg:mx-auto border-2 rounded-3xl shadow-2xl shadow-black/40 mb-8 lg:mb-0">
      <h1 className="text-blue text-center text-xl mt-12">Llena el formulario para tu pedido</h1>
      <form className="flex flex-col gap-5 pb-32 pt-12 items-center justify-center">
        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Donde buscamos tu pedido..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineLocationMarker className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Hasta que lugar..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineBriefcase className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Que producto necesitas?..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineBriefcase className="w-10 text-blue" />
          <select className="pl-2 w-2/3 text-gray-400">
            <option hidden>Necesitas que paguemos tu pedido por vos?</option>
            <option>si</option>
            <option>no</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <HiUserGroup className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Comentarios para el cadete" type="text" />
        </div>

        <Link
          href="/home/especiales/confirmacion"
          className="w-1/2 bg-blue text-white rounded-lg p-2 text-center"
        >
          Confirma tu pedido!
        </Link>
      </form>
    </div>
  );
}
