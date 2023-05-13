
  import Link from "next/link";
import {
    HiUserGroup,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
  } from "react-icons/hi";


export default function Especiales() {
  
    return (
      <div className="mb-8 w-4/5 rounded-3xl border-2 shadow-2xl shadow-black/40 lg:mx-auto lg:mt-10 lg:h-[450px] lg:w-3/4">
        <h1 className="mt-12 text-center text-xl text-blue">Llena el formulario para tu pedido</h1>
        <form className="flex flex-col items-center justify-center gap-5 pb-32 pt-12">
          <div className="flex items-center justify-center">
            <HiOutlineLocationMarker className="w-10 text-blue" />
            <input className="w-2/3 pl-2" placeholder="Donde buscamos tu pedido..." type="text" />
          </div>
  
          <div className="flex items-center justify-center">
            <HiOutlineLocationMarker className="w-10 text-blue" />
            <input className="w-2/3 pl-2" placeholder="Hasta que lugar..." type="text" />
          </div>
  
          <div className="flex items-center justify-center">
            <HiOutlineBriefcase className="w-10 text-blue" />
            <input className="w-2/3 pl-2" placeholder="Que producto necesitas?..." type="text" />
          </div>
  
          <div className="flex items-center justify-center">
            <HiOutlineBriefcase className="w-10 text-blue" />
            <select className="w-2/3 rounded-md border-b-2 pl-2 text-gray-400">
              <option hidden>Necesitas que paguemos tu pedido por vos?</option>
              <option>si</option>
              <option>no</option>
            </select>
          </div>
  
          <div className="flex items-center justify-center">
            <HiUserGroup className="w-10 text-blue" />
            <input className="w-2/3 pl-2" placeholder="Comentarios para el cadete" type="text" />
          </div>
  
          <Link
            href="/home/especiales/confirmacion"
            className="w-1/2 rounded-lg bg-blue p-2 text-center text-white"
          >
            Confirma tu pedido!
          </Link>
        </form>
      </div>
    );
  }

