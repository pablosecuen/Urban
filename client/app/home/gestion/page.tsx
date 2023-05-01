import axios from "axios";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface Travel {
  id: string;
  date: string;
  userId: string;
  destination: string;
  travel: string;
  price: string;
  status: boolean;
  chauffeurId: string;
  origin: string;
}
interface Data {
  travels:  Travel[];
}

const getData = async (): Promise<Data> => {
  return fetch("http://localhost:3000/travels/user/uwK0sWKXcpiROc5owN37")
    .then((res) => res.json())
    .then((data) => data);
};


export default async function Gestion() {
  const data = await getData();

  return (
    <section className="container flex h-auto lg:h-96 w-full flex-col gap-2  bg-slate-100 lg:container lg:mx-auto lg:bg-none lg:p-10">
      <h3 className="rounded-3xl p-4  text-left font-bold tracking-widest">Historial de viajes</h3>
      <ul className= {` h-full flex flex-col gap-3 ${data.travels.length > 1 && "overflow-y-scroll overflow-scroll overflow-x-hidden"}`}>
        {/* Usamos map para generar un li por cada objeto del array */}
        {data.travels.map((viaje: any) => (
          <Link href={`/home/gestion/${viaje.id}`}>
            <li
              key={viaje.id}
              className="group flex items-center gap-4 rounded-full border bg-white p-2 px-4 transition-all duration-200 hover:border-blue"
            >
              <article className="flex flex-col text-left ">
                <small className="font-bold ">{viaje.destination}</small>
                <small>
                  {viaje.date.slice(0, 10)} {viaje.date.slice(11, 16)}
                </small>
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
