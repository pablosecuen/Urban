"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { userData } from "../../app/types/User";
import { links, linksMobile } from "../../assets/data";
import { HiMenuAlt1 } from "react-icons/hi";

import logo from "../../assets/imagenes/UrbanIso.png";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState<userData | null>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const pathname = usePathname();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userDataObject = JSON.parse(userDataString);
      setUser(userDataObject);
    }
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="bg-verde">
      {isMobile ? (
        <>
          <h1>
            <Image
              src={logo}
              alt="logo"
              className="absolute left-0 top-1 z-50 h-10 w-auto  self-center"
              width={50}
              height={50}
            />
          </h1>
          <nav className="relative flex h-12 w-full justify-between bg-verde ">
            <HiMenuAlt1
              onClick={toggleMenu}
              className="absolute right-0 top-0  z-50 mr-4 h-full w-1/12 cursor-pointer  text-xl md:hidden"
            />
            <div
              className={`absolute left-0 top-12 h-screen w-0 overflow-hidden  bg-white transition-all  duration-1000 ease-in-out md:hidden ${
                showMenu && "w-1/2 shadow-custom-md"
              }`}
            >
              <ul className="flex flex-col items-center p-4">
                {user ? (
                  <li className="my-2 flex items-center justify-between ">
                    <Image
                      src={user?.img}
                      alt={user?.name}
                      width={50}
                      height={50}
                      className=" w-96 rounded-full border-2 border-blue"
                    />
                    <div className="flex flex-col">
                      <span className="mx-auto text-center">{user?.name}</span>
                      <button className="text-blue-500 text-sm" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
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
        </>
      ) : (
        <div className="flex w-full justify-between bg-verde px-4 py-2 lg:py-0">
          <nav className=" ">
            <h1>
              {" "}
              <Image
                src={logo}
                alt="logo"
                className="absolute top-2  z-50 flex h-10 w-auto self-center"
                width={100}
                height={100}
              />
            </h1>
            <ul className="flex w-auto items-center justify-end  lg:gap-4 ">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`flex ${
                    pathname?.includes(link.route) && "border-b   border-celeste "
                  } items-center justify-center px-2 py-1 transition-all duration-150 hover:border-b hover:border-celeste lg:w-auto lg:px-0`}
                >
                  <Link
                    href={link.route}
                    className="flex items-center gap-1 text-sm font-semibold uppercase"
                  >
                    <link.icon className="h-6 w-5 " />
                    {link.label}
                  </Link>
                </li>
              ))}
              {user ? (
                <>
                  <li className="flex items-center justify-center px-2 py-1 transition-all duration-150 hover:border-b hover:border-celeste lg:w-auto lg:px-0">
                    <Image
                      src={user?.img}
                      alt={user?.name}
                      width={50}
                      height={50}
                      className=" rounded-full border-2 border-blue lg:h-12 lg:w-12"
                    />
                    <span className="mx-2 font-semibold lg:text-sm">{user?.name}</span>
                    <button
                      className="rounded bg-blue px-2 py-1 text-center text-white lg:w-auto"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="my-2 flex w-auto items-center">
                  <span className="mx-2 font-semibold lg:w-auto">GUEST</span>
                  <Link
                    href="/"
                    className="rounded bg-blue px-4 py-2 text-center text-white lg:w-auto"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
