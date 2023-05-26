import Image from "next/image";
import Link from "next/link";
import { iconsData } from "../../assets/data";
import { HiPhone, HiDevicePhoneMobile, HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="flex h-full  flex-col justify-around gap-5 bg-black px-5 py-10 tracking-wide text-white lg:h-[400px]">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between ">
        <div className=" flex h-full w-full justify-around  gap-5  border-r-2 text-center lg:w-1/2">
          <div className="grid grid-cols-4 ">
            {/* Top Row */}
            {iconsData.map((icon, index) => (
              <div key={index} className="flex  items-center justify-center gap-2">
                <Image
                  src={icon.image}
                  alt={icon.alt}
                  width={50}
                  height={50}
                  className={icon.className}
                />
              </div>
            ))}
            {/* Bottom Row */}
            {iconsData.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start px-1 text-center"
              >
                <small className="font-light">{icon.description}</small>
              </div>
            ))}
          </div>

          {/* <h4 className="font-semibold uppercase">Nuestra misión</h4>
          <p className="text-sm font-light">
            Nuestra misión es hacer del transporte terrestre intermunicipal en Colombia una
            experiencia cómoda y segura, que permita generar eficiencias económicas y medio
            ambientales sostenibles en el tiempo.{" "}
          </p> */}
        </div>
        <hr className="h-[2px] bg-black/30 text-black md:hidden" />
        <div className="flex flex-col gap-3 md:w-1/4 lg:pl-8 ">
          <h3 className="px-2 font-semibold uppercase">Compañía</h3>
          <ul className=" flex flex-col gap-4">
            <li>
              <span className="transition_all rounded-md px-2 py-1 font-light hover:cursor-pointer hover:bg-celeste hover:text-white hover:shadow-md hover:shadow-black/30">
                <Link href="/empresa/#acerca-de-nosotros">Acerca de notrosos</Link>
              </span>
            </li>
            <li>
              <span className="transition_all rounded-md px-2 py-1 font-light hover:cursor-pointer hover:bg-celeste hover:text-white hover:shadow-md hover:shadow-black/30">
                <Link href="/empresa/#preguntas-frecuentes">Preguntas frecuentes</Link>
              </span>
            </li>
            <li>
              <span className="transition_all rounded-md px-2 py-1 font-light hover:cursor-pointer hover:bg-celeste hover:text-white hover:shadow-md hover:shadow-black/30">
                <Link href="/empresa/#ayuda-por-emergencia">Ayuda por emergencia</Link>
              </span>
            </li>
            <li>
              <span className="transition_all rounded-md px-2 py-1 font-light hover:cursor-pointer hover:bg-celeste hover:text-white hover:shadow-md hover:shadow-black/30">
                <Link href="/empresa/#terminos-y-condiciones">Terminos y condiciones</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:w-1/4 lg:pl-8 ">
          <h3 className="px-2 font-semibold uppercase">Contacto</h3>
          <ul className=" flex flex-col gap-2 px-2">
            <li className="flex gap-3">
              <HiPhone className="h-5 w-5" />
              <small>(+57) (604) 208 73 99</small>
            </li>
            <li className="flex gap-3">
              <HiDevicePhoneMobile className="h-5 w-5" /> <small>(+57) 311 319 68 55</small>
            </li>
            <li className="flex gap-3">
              <HiEnvelope className="h-5 w-5" /> <small>soporte@urban.com</small>
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-[2px] bg-white text-white" />

      <div className="mx-auto flex max-w-3xl items-center justify-center  text-center">
        <small>©copyright, todos los derechos reservados - 2023 Urban.</small>
      </div>
    </footer>
  );
}
