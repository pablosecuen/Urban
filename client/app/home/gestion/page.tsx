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
    <section className="container mx-auto flex h-3/5 w-full lg:w-3/5 flex-col gap-10 border border-black lg:p-10">
      <h3 className="rounded-3xl bg-sky-600 p-4 text-center font-bold tracking-widest text-white">
        Historial de viajes
      </h3>
      <ul className="flex flex-col gap-3 ">p0
        {/* Usamos map para generar un li por cada objeto del array */}
        {viajesHardcodeados.map((viaje) => (
          <li key={viaje.id} className="flex items-center gap-4 px-4 border border-black">
            <article className="flex flex-col text-center">
              <small>{viaje.ruta}</small>
              <small>{viaje.fecha}</small>
            </article>
            <div className="w-1/4">
              {/* Usamos Link de Next para crear un enlace */}
              <Link href={`/home/gestion/${viaje.id}`} >
                <FiChevronRight size={25} className="text-blue rounded-full border border-blue"/>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
