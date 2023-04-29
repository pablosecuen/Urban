import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Gestion() {
  // Array de objetos que representan los datos de cada viaje
  const viajesHardcodeados = [
    { id: 1, fecha: "12/01/23 - 12:00hs", ruta: "Medellin-La Ceja" },
    { id: 2, fecha: "13/01/23 - 13:00hs", ruta: "La Ceja-Medellin" },
    { id: 3, fecha: "14/01/23 - 14:00hs", ruta: "Medellin-La Ceja" },
    { id: 4, fecha: "15/01/23 - 15:00hs", ruta: "La Ceja-Medellin" },
    { id: 5, fecha: "16/01/23 - 16:00hs", ruta: "Medellin-La Ceja" },
    { id: 6, fecha: "17/01/23 - 17:00hs", ruta: "La Ceja-Medellin" },
  ];

  return (
    <section className="container flex h-auto w-full flex-col gap-2  bg-slate-100 lg:container lg:mx-auto lg:bg-none lg:p-10">
      <h3 className="rounded-3xl p-4  text-left font-bold tracking-widest">Historial de viajes</h3>
      <ul className="flex flex-col gap-3 ">
        {/* Usamos map para generar un li por cada objeto del array */}
        {viajesHardcodeados.map((viaje) => (
          <Link href={`/home/gestion/${viaje.id}`}>
            <li
              key={viaje.id}
              className="group flex items-center gap-4 rounded-full border bg-white p-2 px-4 transition-all duration-200 hover:border-blue"
            >
              <article className="flex flex-col text-left ">
                <small className="font-bold ">{viaje.ruta}</small>
                <small>{viaje.fecha}</small>
              </article>
              {/* Usamos Link de Next para crear un enlace */}
              <FiChevronRight
                size={25}
                className="rounded-full text-blue transition-all duration-200 lg:group-hover:scale-125"
              />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
