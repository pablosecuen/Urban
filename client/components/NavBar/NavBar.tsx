"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../assets/imagenes/UrbanIso.png";

import { useMediaQuery } from "react-responsive";
import { links } from "../../assets/data";
import { HiMenuAlt1 } from "react-icons/hi";

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
          <Image
            src={logo as StaticImageData}
            alt="logo"
            className="h-12 w-auto"
          />

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
        <nav className="w-full h-12 bg-verde">
          <div className="container mx-auto flex justify-between">
            <Image
              src={logo as StaticImageData}
              alt="logo"
              className="h-12 w-auto"
            />

            <ul className="flex space-x-4 w-1/3 items-center">
              {links.map((link) => (
                <div>
                  <li
                    key={link.route}
                    className="flex items-center justify-center"
                  >
                    <Link href={link.route} className="flex">
                      <link.icon className="w-5 h-6" />
                      {link.label}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
