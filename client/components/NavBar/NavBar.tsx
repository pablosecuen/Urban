"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../assets/imagenes/UrbanIso.png";
import {
  HiMenuAlt1,
  HiUserCircle,
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineAnnotation,
} from "react-icons/hi";
import { IconType } from "react-icons";

import { useMediaQuery } from "react-responsive";

const links = [
  {
    label: "Home",
    route: "/",
    icon: HiOutlineHome,
    id: "1",
  },
  {
    label: "Perfil",
    route: "/perfil",
    icon: HiUserCircle,
    id: "2",
  },
  {
    label: "Notificaciones",
    route: "/notificaciones",
    icon: HiOutlineBell,
    id: "3",
  },
  {
    label: "Ayuda",
    route: "/ayuda",
    icon: HiOutlineAnnotation,
    id: "4",
  },
];

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <header>
      {isMobile ? (
        <nav className="w-full h-12 flex bg-verde justify-between ">
            <Image src={logo as StaticImageData} alt="logo" className="h-12 w-auto border" />

          <HiMenuAlt1
            onClick={toggleMenu}
            className="md:hidden text-xl mr-4 cursor-pointer w-1/12 h-full z-10"
          />

          <div
            className={`md:hidden absolute w-0 overflow-hidden top-12 left-0  h-full bg-white  transition-all ease-in-out duration-1000 ${
              showMenu && "w-1/2 shadow-custom-md"
            }`}
          >
            <ul className="flex flex-col items-center p-4">
              {links.map((link) => (
                <li key={link.id} className="my-2 flex items-center ">
                  <link.icon className="w-6 h-6" />
                  <Link href={link.label} onClick={toggleMenu}>
                    <span className="mx-2">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="w-full h-12 flex bg-verde justify-between overflow-hidden">

            <Image src={logo as StaticImageData} alt="logo" className="h-12 w-auto border" />

          <ul className="flex  w-2/3 lg:w-1/3 justify-between items-center ">
            {links.map((link) => (
              <div>
                <li key={link.route} className=" flex gap-2 text-center">
                  <link.icon className="w-6 h-8 " />
                  <Link href={link.route} className=" flex items-center">
                    {link.label}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
