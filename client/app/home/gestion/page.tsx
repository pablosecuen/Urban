import Link from "next/link";

export default function Gestion() {
  // Array de objetos que representan los datos de cada viaje
  const viajes = [
    { id: 1, fecha: "12/01/23", ruta: "12:00-Medellin-La Ceja" },
    { id: 2, fecha: "13/01/23", ruta: "13:00-La Ceja-Medellin" },
    { id: 3, fecha: "14/01/23", ruta: "14:00-Medellin-La Ceja" },
    { id: 4, fecha: "15/01/23", ruta: "15:00-La Ceja-Medellin" },
    { id: 5, fecha: "16/01/23", ruta: "16:00-Medellin-La Ceja" },
    { id: 6, fecha: "17/01/23", ruta: "17:00-La Ceja-Medellin" },
  ];

  return (
    <div className="container mx-auto flex h-3/5 w-3/5 flex-col gap-10 border border-black lg:p-10">
      <h3 className="rounded-3xl bg-sky-600 p-4 text-center font-bold tracking-widest text-white shadow-xl shadow-black/40">
        Historial de viajes
      </h3>
      <ul className="flex flex-col gap-3">
        {/* Usamos map para generar un li por cada objeto del array */}
        {viajes.map((viaje) => (
          <li key={viaje.id} className="flex items-center gap-4 px-4">
            <div className="rounded-full border-2 border-blue p-2 text-center">
              <small>{viaje.fecha}</small>
              <small>{viaje.ruta}</small>
            </div>
            <div className="w-1/4">
              {/* Usamos Link de Next para crear un enlace */}
              <Link href={`/home/gestion/${viaje.id}`}>Gestionar</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
