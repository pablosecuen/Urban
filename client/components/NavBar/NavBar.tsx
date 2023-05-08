"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { userData } from "../../app/types/User";
import { links, linksMobile } from "../../assets/data";
import { HiMenuAlt1 } from "react-icons/hi";
import { createPopper } from "@popperjs/core/lib/popper-lite.js";

import logo from "../../assets/imagenes/UrbanIso.png";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const [userData, setUserData] = useState<userData | null>(null);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.useRef<HTMLButtonElement>(null);
  const popoverDropdownRef = React.useRef<HTMLDivElement>(null);

  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
      });
      setDropdownPopoverShow(true);
    }
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

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
          <Image
            src={logo as StaticImageData}
            alt="logo"
            className="h-10 w-auto self-center"
            width={50}
            height={50}
          />

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
                  <div className="flex flex-col">
                    <span className="mx-auto text-center">{userData?.name}</span>
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
      ) : (
        <nav className="w-full bg-verde py-2 lg:py-0">
          <div className="container mx-auto flex justify-between ">
            <Image
              src={logo as StaticImageData}
              alt="logo"
              className="flex h-10 w-auto self-center"
              width={100}
              height={100}
            />

            <ul className="flex w-auto items-center justify-evenly  lg:gap-4 ">
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
              {userData ? (
                <>
                  <li
                    className="flex items-center justify-center px-2 py-1 transition-all duration-150 hover:border-b hover:border-celeste lg:w-auto lg:px-0"
                    onClick={(e) => {
                      e.preventDefault();
                      dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                    }}
                  >
                    <Image
                      src={userData?.img}
                      alt={userData?.name}
                      width={50}
                      height={50}
                      className=" rounded-full border-2 border-blue lg:h-14 lg:w-full"
                    />
                    <span className="mx-2 font-semibold lg:text-sm">{userData?.name}</span>
                    <button
                      className="rounded bg-blue px-4 py-2 text-center text-white lg:w-auto"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                  <div
                    ref={popoverDropdownRef}
                    className={
                      (dropdownPopoverShow ? "block " : "hidden ") +
                      " min-w-48 absolute right-0 top-24 z-50 float-left w-96 list-none rounded bg-white py-2 text-left text-base shadow-lg"
                    }
                  >
                    <a
                      href="#pablo"
                      className={
                        "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-white"
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </a>
                    <a
                      href="#pablo"
                      className={
                        "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </a>
                    <a
                      href="#pablo"
                      className={
                        "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else here
                    </a>
                    <div className="my-2 h-0 border border-solid border-blueGray-100" />
                    <a
                      href="#pablo"
                      className={
                        "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-blueGray-700"
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      Seprated link
                    </a>
                  </div>
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
          </div>
        </nav>
      )}
    </header>
  );
}
