"use client";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function Menu() {
const isMobile = useMediaQuery({maxWidth: 750})

  return (
    <>
    {!isMobile &&
        <div className="lg:bg-blue lg:w-2/3 lg:px-24 lg:h-96 lg:shadow-2xl lg:shadow-black/40 gap-3 lg:rounded-3xl flex flex-col lg:justify-center lg:items-center w-full h-full pb-8 lg:pb-0">
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
    </div>}
    </>
  );
}
