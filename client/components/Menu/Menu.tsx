"use client";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-blue w-2/3 px-24 h-96 shadow-2xl shadow-black/40 gap-3 rounded-3xl flex flex-col justify-center items-center">
      <Link href="/home/reserva" className="link">
        Reserva tu viaje
      </Link>
      <Link href="/home/gestion" className="link">
        Gestiona tus viajes
      </Link>
      <Link href="/home/paqueteria" className="link">
        Envío de paquetes
      </Link>
      <Link href="/home/especiales" className="link">
        Tengo una necesidad especial
      </Link>
    </div>
  );
}
