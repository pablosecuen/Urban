"use client";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const isMobile = useMediaQuery({ maxWidth: 750 });

  return (
    <>
      {!isMobile && (
        <div className="flex h-full w-full flex-col gap-3 pb-8 lg:w-full lg:items-center lg:justify-center lg:rounded-3xl lg:bg-blueGray-300 lg:px-6 lg:py-12 lg:shadow-2xl lg:shadow-black/40  2xl:py-16">
          <Link
            href="/home/reserva"
            className={`link w-72 hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/reserva" && "!bg-verde "
            }`}
          >
            Reserva tu viaje
          </Link>
          <Link
            href="/home/gestion"
            className={`link w-72 hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/gestion" && "!bg-verde "
            }`}
          >
            Gestiona tus viajes
          </Link>
          <Link
            href="/home/paqueteria"
            className={`link w-72 hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/paqueteria" && "!bg-verde "
            }`}
          >
            Envío de paquetes
          </Link>
          <Link
            href="/home/especiales"
            className={`link w-72 hover:bg-verde 2xl:w-full 2xl:text-lg ${
              pathname === "/home/especiales" && "!bg-verde "
            }`}
          >
            Tengo una necesidad especial
          </Link>
        </div>
      )}
    </>
  );
}
