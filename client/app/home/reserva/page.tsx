import Link from "next/link";
import {
  HiUserGroup,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { MdPets } from "react-icons/md";

// const passageById: Passage | null = useSelector((state: RootState) => state.passage.passageById);

// useEffect(() => {
//   dispatch(fetchPassagesByQuery({ origin: "Medillin", destination: "Bolombolo" }));
// }, []);
//fido aca te dejo un ejemplo de como tenes que mandar las cosas a esta funcion del fetchPassagesByQuery, no tiene que ser objeto y que corresponda el nombre de la porpiedad del objeto del back, osea origin y destination son estos
// destination
//origin
//price
//departureDate
//arrivalDate

export default function Reserva() {
  return (
    <div className="mx-auto w-4/5 rounded-3xl border-2 shadow-2xl shadow-black/40 lg:h-[510px]">
      <h1 className="mt-12 text-center text-xl text-blue">
        Llena el formulario para encontrar tu viaje
      </h1>
      <form className="flex flex-col items-center justify-center gap-5 pb-32 pt-12">
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
          <input className="w-2/3 pl-2" placeholder="Cuando?..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <HiUserGroup className="w-10 text-blue" />
          <input className="w-2/3 pl-2" placeholder="Cantidad de pasajeros..." type="number" />
        </div>

        <div className="flex items-center justify-center">
          <HiOutlineBriefcase className="w-10 text-blue" />
          <input className="w-2/3 pl-2" placeholder="Equipaje..." type="text" />
        </div>

        <div className="flex items-center justify-center">
          <MdPets className="w-10 text-blue" />
          <input className="w-2/3 pl-2" placeholder="Mascotas..." type="text" />
        </div>
        <Link href="/home/reserva/viajes" className="flex justify-center">
          <button className="w-1/2 self-center">Buscar tu viaje!</button>
        </Link>
      </form>
    </div>
  );
}
