"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { userData } from "../../app/types/User";
import { links, linksMobile } from "../../assets/data";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

import logo from "../../assets/imagenes/UrbanIso.png";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState<userData | null>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const pathname = usePathname();
  const router = useRouter();
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
    router.push("/");
  };

  return (
    <header className="bg-verde">
      <nav className="flex w-full justify-between bg-verde px-4 py-2 lg:py-0 ">
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
              <Link href="/" className="rounded bg-blue px-4 py-2 text-center text-white lg:w-auto">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
