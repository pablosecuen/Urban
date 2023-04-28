"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../assets/imagenes/UrbanIso.png";
import { useMediaQuery } from "react-responsive";
import { links, linksMobile } from "../../assets/data";
import { HiMenuAlt1 } from "react-icons/hi";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setUserData(null);
  // };

  return (
    <header>
      {isMobile ? (
        <nav className="flex h-12 w-full justify-between bg-verde ">
          <Image src={logo as StaticImageData} alt="logo" className="h-10 w-auto self-center" />

          <HiMenuAlt1
            onClick={toggleMenu}
            className="z-10 mr-4 h-full w-1/12 cursor-pointer text-xl md:hidden"
          />

          <div
            className={`absolute left-0 top-12 h-full w-0 overflow-hidden  bg-white transition-all  duration-1000 ease-in-out md:hidden ${
              showMenu && "w-1/2 shadow-custom-md"
            }`}
          >
            <ul className="flex flex-col items-center p-4">
              {linksMobile.map((link) => (
                <li key={link.id} className="my-2 flex items-center ">
                  <link.icon className="h-6 w-6" />
                  <Link href={link.route} onClick={toggleMenu}>
                    <span className="mx-2">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="h-12 w-full bg-verde">
          <div className="container mx-auto flex justify-between">
            <Image src={logo as StaticImageData} alt="logo" className="h-10 w-auto self-center" />

            <ul className="flex w-1/3 items-center space-x-4">
              {links.map((link) => (
                <li key={link.id} className="flex items-center justify-center px-2">
                  <Link href={link.route} className="flex">
                    <link.icon className="h-6 w-5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
