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

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="h-full border-2 flex justify-center align-center items-center sm:h-full">
        <Image src={logo as StaticImageData} alt="logo" className="w-full aspect-ratio-square" />
      </div>
      <div className="h-full border-2 sm:h-full">
        <Login />
      </div>
    </>
  );
}
