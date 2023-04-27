"use client";
import Login from "@component/components/Login/Login";
import logo from "../assets/imagenes/UrbanLogo.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onRegisterClick: () => void;
  onRegister: (name: string, email: string, password: string) => void;
  onLoginClick: () => void;
}

export default function LandingPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="flex h-full mx-auto w-1/2 sm:h-full pl-24 justify-center">
        <Image src={logo as StaticImageData} alt="logo" className="aspect-ratio-square lg:w-full w-full " />
      </div>
      <div className="h-full   lg:w-4/5 w-1/2">
        <Login />
      </div>
    </>
  );
}
