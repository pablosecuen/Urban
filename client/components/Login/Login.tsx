"use client";
import { useState } from "react";

import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  const isRegisterFromSessionStorage = window?.sessionStorage.getItem("isRegister");
  const [isRegister, setIsRegister] = useState(Boolean(isRegisterFromSessionStorage) || false);

  const handleSetIsRegister = (value: boolean) => {
    setIsRegister(value);
    window && sessionStorage.setItem("isRegister", value.toString());
  };

  return (
    <div className="relative mt-0 flex  items-center justify-center lg:h-screen ">
      <div
        className={` transition_all absolute bottom-0 left-0 right-0 top-56 m-auto grid w-96 place-content-center opacity-0 lg:-left-96 lg:top-0   ${
          isRegister && "z-10 opacity-100"
        }`}
      >
        <RegisterForm isRegister={isRegister} setIsRegister={handleSetIsRegister} />
      </div>
      <div
        className={`transition_all absolute bottom-0 left-0 right-0 top-56 m-auto grid place-content-center opacity-0 lg:-left-96  lg:top-0  ${
          !isRegister && "z-10 opacity-100"
        }`}
      >
        <LoginForm isRegister={isRegister} setIsRegister={handleSetIsRegister} />
      </div>
    </div>
  );
};

export default Login;
