"use client";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import bg from "../../assets/imagenes/city.webp";

export default function Menu() {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 750 });

  return (
    <>
      {!isMobile && (
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl pb-8 pt-10 lg:w-2/3 lg:items-center lg:justify-center lg:px-24 lg:py-8 lg:shadow-2xl lg:shadow-black/40 2xl:w-3/4 2xl:py-16">
          {" "}
          <Image
            className="absolute z-20 scale-125 contrast-150 saturate-150 backdrop-blur-lg "
            layout="fill"
            objectFit="cover"
            alt=""
            src={bg}
          />
          <div className="absolute left-0 top-0 z-30 h-full w-full bg-black/40"></div>
          <div className="z-50 flex h-full w-96 flex-col gap-4  p-8">
            <Link
              href="/home/reserva"
              className={` w-full rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
                pathname === "/home/reserva" && "!bg-verde "
              }`}
            >
              Reserva tu viaje
            </Link>
            <Link
              href="/home/gestion"
              className={`w-full rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
                pathname === "/home/gestion" && "!bg-verde "
              }`}
            >
              Gestiona tus viajes
            </Link>
            <Link
              href="/home/paqueteria"
              className={`w-full rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
                pathname === "/home/paqueteria" && "!bg-verde "
              }`}
            >
              Envío de paquetes
            </Link>
            <Link
              href="/home/especiales"
              className={`w-full rounded-2xl bg-white py-1 text-center hover:bg-verde 2xl:w-full 2xl:text-lg ${
                pathname === "/home/especiales" && "!bg-verde "
              }`}
            >
              Tengo una necesidad especial
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
