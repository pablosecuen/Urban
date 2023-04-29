"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../assets/imagenes/UrbanIso.png";
import { useMediaQuery } from "react-responsive";
import { links, linksMobile } from "../../assets/data";
import { HiMenuAlt1 } from "react-icons/hi";
import { User } from "../../app/types/User";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [showMenu, setShowMenu] = useState(false);
  const [userData, setUserData] = useState<userData | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData(null);
  };

  interface userData {
    name: string;
    img: string;
  }

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
              {userData ? (
                <li className="my-2 flex items-center ">
                  <Image
                    src={userData?.img}
                    alt={userData?.name}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="mx-2">{userData?.name}</span>
                  <button className="text-blue-500" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className="my-2 flex items-center ">
                  <Image
                    src="/placeholder.png"
                    alt="placeholder"
                    width={50}
                    height={50}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="mx-2">Guest</span>
                </li>
              )}
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
