"use client";
import Login from "@component/components/Login/Login";
import logo from "../assets/imagenes/UrbanLogo.png";
import { useEffect } from "react";
import Image from "next/image";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/router";

export default function LandingPage() {
  const userString = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = userString ? JSON.parse(userString) : null;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center  lg:flex-row">
      <GoogleOAuthProvider clientId="your-client-id">
        <div className="mx-auto flex w-1/2 justify-center lg:justify-end lg:pr-28 ">
          <Image
            src={logo}
            alt="logo"
            className="aspect-ratio-square h-40 w-40  sm:h-72 sm:w-72  lg:h-96 lg:w-96"
          />
        </div>
        <div className="lg:mx-auto lg:w-1/2">
          <Login />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}
