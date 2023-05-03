"use client";
import { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="mt-12 flex h-full w-full items-center justify-center align-middle lg:mt-0 lg:h-screen">
      {isRegister ? (
        <RegisterForm isRegister={isRegister} setIsRegister={setIsRegister} />
      ) : (
        <LoginForm isRegister={isRegister} setIsRegister={setIsRegister} />
      )}
    </div>
  );
};

export default Login;
