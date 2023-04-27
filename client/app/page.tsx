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
      <div className="align-center flex h-full items-center justify-center border-2 sm:h-full">
        <Image src={logo as StaticImageData} alt="logo" className="aspect-ratio-square w-full" />
      </div>
      <div className="h-full border-2 sm:h-full  lg:w-4/5">
        <Login />
      </div>
    </>
  );
}
