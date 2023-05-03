"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { User, userData } from "../../app/types/User";
import { links, linksMobile } from "../../assets/data";
import { HiMenuAlt1 } from "react-icons/hi";

import logo from "../../assets/imagenes/UrbanIso.png";


export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const pathname = usePathname();

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

  return (
    <header className="bg-verde">
      {isMobile ? (
        <nav className="flex h-12 w-full justify-between bg-verde ">
          <Image src={logo as StaticImageData} alt="logo" className="h-10 w-auto self-center" />

          <HiMenuAlt1
            onClick={toggleMenu}
            className="top-0 z-50 mr-4 h-full w-1/12 cursor-pointer  text-xl md:hidden"
          />

          <div
            className={`absolute left-0 top-12 h-full w-0 overflow-hidden  bg-white transition-all  duration-1000 ease-in-out md:hidden ${
              showMenu && "w-1/2 shadow-custom-md"
            }`}
          >
            <ul className="flex flex-col items-center p-4">
              {userData ? (
                <li className="my-2 flex items-center justify-between ">
                  <Image
                    src={userData?.img}
                    alt={userData?.name}
                    width={50}
                    height={50}
                    className=" w-96 rounded-full border-2 border-blue"
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
                  <Link href="/" className="rounded bg-blue px-2 py-1 text-center text-white">
                    Login
                  </Link>
                </li>
              )}
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
        <nav className="bg-verde py-2 ">
          <div className="container mx-auto flex justify-between">
            <Image src={logo as StaticImageData} alt="logo" className="h-10 w-auto self-center" />

            <ul className="flex w-1/3 items-center space-x-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`flex ${
                    pathname.includes(link.route) && "border-b   border-celeste "
                  } items-center justify-center px-2 py-1 transition-all duration-150 hover:border-b hover:border-celeste`}
                >
                  <Link
                    href={link.route}
                    className="flex items-center gap-1 text-sm font-semibold uppercase"
                  >
                    <link.icon className="h-6 w-5" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {userData ? (
                <li className="my-2 flex items-center justify-between ">
                  <Image
                    src={userData?.img}
                    alt={userData?.name}
                    width={50}
                    height={50}
                    className=" w-96 rounded-full border-2 border-blue"
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
                  <Link href="/" className="rounded bg-blue px-2 py-1 text-center text-white">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
