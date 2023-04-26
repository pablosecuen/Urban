import {
  HiUserGroup,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { MdPets } from "react-icons/md";

export default function Reserva() {
  return (
    <div className="w-4/5 mx-auto border-2">
      <h1 className="text-blue text-center text-xl mt-12">
        Llena el formulario para encontrar tu viaje
      </h1>
      <form className="flex flex-col gap-5 pb-32 pt-12 items-center justify-center">
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
          <HiUserGroup className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Cantidad de pasajeros..." type="number" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineBriefcase className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Equipaje..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <MdPets className="w-10 text-blue" />
          <input className="pl-2 w-2/3" placeholder="Mascotas..." type="text" />
        </div>

        <button className="w-1/2">Buscar tu viaje!</button>
      </form>
    </div>
  );
}
