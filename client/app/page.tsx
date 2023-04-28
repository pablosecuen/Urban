"use client";
import Login from "@component/components/Login/Login";
import logo from "../assets/imagenes/UrbanLogo.png";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/user/userActions";
import { AppDispatch, RootState } from "@component/Redux/store/store";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onRegisterClick: () => void;
  onRegister: (name: string, email: string, password: string) => void;
  onLoginClick: () => void;
}

export default function LandingPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { entities } = useSelector((state: RootState) => state.user);

  console.log(entities);

  const handleGetAllUsers = () => {
    dispatch(getAllUsers())
      .then((data: any) => {
        console.log("Users: ", data.payload);
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      });
  };
  return (
    <>
      <div className="mx-auto flex h-full w-1/2 justify-center pl-24 sm:h-full">
        <Image
          src={logo as StaticImageData}
          alt="logo"
          className="aspect-ratio-square w-full lg:w-full "
        />
      </div>
      <div className="h-full   w-full lg:w-4/5">
        <button onClick={handleGetAllUsers}>Get All Users</button>
        <Login />
      </div>
    </>
  );
}
