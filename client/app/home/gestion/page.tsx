import axios from "axios";
import Link from "next/link";
import { TravelStatus, Travel, Status, Data } from "@component/app/types/Travels";
import { HiOutlineChevronRight, HiOutlinePause, HiOutlineCheck, HiOutlineX } from "react-icons/hi";

// Traigo todos los viajes del usuario
const getData = async (): Promise<Data> => {
  const data = await axios.get("http://localhost:3000/travels/user/uwK0sWKXcpiROc5owN37");
  const travels = data.data;
  return travels;
};

export default async function Gestion() {
  const data = await getData();
  const statusTravel: Status = {
    [TravelStatus.PENDING]: <HiOutlinePause className="h-5 w-10" />,
    [TravelStatus.COMPLETED]: <HiOutlineCheck className="h-5 w-10" />,
    [TravelStatus.CANCELED]: <HiOutlineX className=" h-5 w-10" />,
  };
  return (
    <section className="container flex h-auto w-full flex-col gap-2 rounded-3xl bg-slate-100 shadow-2xl shadow-black/40 lg:container lg:mx-auto lg:h-[500px] lg:p-10">
      <h3 className="rounded-3xl p-4  text-left font-bold tracking-widest">Historial de viajes</h3>
      <ul
        className={`flex h-full flex-col gap-3 ${
          data.travels.length > 5 && "scrollbar overflow-scroll overflow-x-hidden overflow-y-scroll"
        }`}
      >
        {/* Usamos map para generar un li por cada objeto del array */}
        {data?.travels.map((viaje: Travel) => (
          <Link key={viaje.id} href={`/home/gestion/${viaje.id}`}>
            <li className="group flex items-center justify-between gap-4 rounded-full border bg-white px-10 py-2 transition-all duration-200 hover:border-blue">
              <div className="flex items-center">
                <div>
                  <small className="font-bold ">{viaje.destination}</small>
                  <small className="flex">
                    <span>Fecha: {viaje.date.slice(0, 10).split("-").reverse().join("-")}</span>
                    <span>Horario: {viaje.date.slice(11, 16)}</span>
                  </small>
                </div>
                <small
                  className={`flex w-2/5 items-center justify-center text-center font-semibold uppercase tracking-wider ${
                    viaje.travel === TravelStatus.PENDING
                      ? "text-pending"
                      : viaje.travel === TravelStatus.COMPLETED
                      ? "text-completed"
                      : "text-canceled"
                  }`}
                >
                  {viaje.travel === TravelStatus.PENDING
                    ? "Pendiente"
                    : viaje.travel === TravelStatus.COMPLETED
                    ? "Completado"
                    : "Cancelado"}
                  {statusTravel[viaje.travel]}
                </small>
              </div>
              <HiOutlineChevronRight className="w-10 rounded-full text-2xl text-blue transition-all duration-200 lg:group-hover:scale-125" />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
