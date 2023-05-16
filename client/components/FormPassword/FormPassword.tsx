"use client";
import { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/navigation";
import setValidate from "./Validate";
import Link from "next/link";

export default function FormPassword() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const visiblePassword = (e) => {
    e.preventDefault();
    setShowPassword1(!showPassword1);
  };

  const visiblePassword2 = (e) => {
    e.preventDefault();
    setShowPassword2(!showPassword2);
  };

  return (
    <form
      //   onSubmit={handleLogin}
      className="flex h-1/2 w-1/3 items-center justify-center rounded-lg border-2 px-20 text-lg shadow-xl shadow-black/40"
    >
      <div className="flex h-full flex-col justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="" className="text-center">
            Email:
          </label>
          <input type="text" name="email" className="pl-2" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="text-center">Contraseña:</label>
          <div className="relative flex">
            <input
              type={showPassword1 ? "text" : "password"}
              name="password"
              className="pl-2"
              // value={userData.password}
              // onChange={handleInputChange}
            />
            <button
              onClick={visiblePassword}
              className="absolute right-1 flex w-8 justify-center bg-transparent px-0 text-center text-blue shadow-none"
            >
              {!showPassword1 ? <HiEyeOff className="w-full" /> : <HiEye className="w-full" />}
            </button>
          </div>
          {/* <small
            className={`transition_all text-right ${
              errores.messagePassword ? "opacity-100" : "opacity-0"
            } absolute -bottom-6 left-0 text-left font-medium text-red-500`}
          >
            {errores.messagePassword}
          </small> */}
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="text-center">Confirme la contraseña:</label>
          <div className="relative flex">
            <input
              type={showPassword2 ? "text" : "password"}
              name="password"
              className="pl-2"
              // value={userData.password}
              // onChange={handleInputChange}
            />
            <button
              onClick={visiblePassword2}
              className="absolute right-1 flex w-8 justify-center bg-transparent px-0 text-center text-blue shadow-none"
            >
              {!showPassword2 ? <HiEyeOff className="w-full" /> : <HiEye className="w-full" />}
            </button>
          </div>
          {/* <small
            className={`transition_all text-right ${
              errores.messagePassword ? "opacity-100" : "opacity-0"
            } absolute -bottom-6 left-0 text-left font-medium text-red-500`}
          >
            {errores.messagePassword}
          </small> */}
        </div>
        <div>
          <button>Guardar contraseña</button>
        </div>
        <small>
          Quieres volver al inicio?{" "}
          <Link href={"http://localhost:3001"}>
            <span className="text-blue hover:cursor-pointer hover:underline">Click aqui</span>
          </Link>
        </small>
      </div>
    </form>
  );
}
