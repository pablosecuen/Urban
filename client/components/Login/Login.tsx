"use client";
import { useState } from "react";

import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  console.log(isRegister);
  return (
    <div className="relative mt-0 flex  items-center justify-center lg:h-screen ">
      <div
        className={` transition_all absolute bottom-0 left-0 right-0 top-56 m-auto grid w-96 place-content-center opacity-0 lg:top-0   ${
          isRegister && "z-10 opacity-100"
        }`}
      >
        <RegisterForm isRegister={isRegister} setIsRegister={setIsRegister} />
      </div>
      <div
        className={`transition_all absolute bottom-0 left-0 right-0 top-56 m-auto grid place-content-center opacity-0  lg:top-0  ${
          !isRegister && "z-10 opacity-100"
        }`}
      >
        <LoginForm isRegister={isRegister} setIsRegister={setIsRegister} />
      </div>
    </div>
  );
};

export default Login;
