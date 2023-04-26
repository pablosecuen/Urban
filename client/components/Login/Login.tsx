"use client";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface UserToRegister {
  name: string;
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

interface UserToLogin {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  function onLogin(username: string, password: string) {
    if (username === "admin" && password === "password") {
      console.log("Login successful");
    } else {
      console.log("Invalid username or password");
    }
  }

  const handleLogin = (e: any) => {
    e.preventDefault();
    async function loginUser(userData: UserToLogin): Promise<LoginResponse> {
      try {
        const response: AxiosResponse = await axios.post("http://localhost:3000/user", userData);
        if (response.status >= 200 && response.status < 300) {
          const token = response.data.token;
          return {
            success: true,
            token,
          };
        } else {
          const message = response.data.message || "Error al iniciar sesión";
          return {
            success: false,
            message,
          };
        }
      } catch (error) {
        console.error(error);
        return {
          success: false,
          message: "Error al iniciar sesión",
        };
      }
    }
  };

  const createUser = async (userData: UserToRegister) => {
    try {
      const response = await axios.post("http://localhost:3000/user", userData);
      console.log(response.data); // the created user data
    } catch (error) {
      console.log("salio todo mal");
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const userData: UserToRegister = {
        name,
        email,
        password,
      };
      await createUser(userData);
    } else {
      alert("Passwords do not match");
    }
  };

  const handleLoginClick = () => {
    setIsRegister(false);
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <div className="h-[100vh] flex justify-center align-middle items-center">
      {isRegister ? (
        <form
          onSubmit={handleRegister}
          className="w-1/2 my-8 h-[600px] border-2 flex flex-col justify-between items-center align-middle p-4"
        >
          <div className="flex flex-col justify-center items-center align-middle h-1/2">
            {" "}
            <label className="text-center">
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label className="text-center">
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label className="text-center">
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <label className="text-center">
              Repeat Password:
              <input type="password" value={repeatPassword} onChange={handleRepeatPasswordChange} />
            </label>
          </div>
          <div className="flex flex-col justify-between items-center align-middle h-1/2">
            {" "}
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleRegisterClick}>Apple Id</button>
            <button onClick={handleRegisterClick}>Google</button>
            <button onClick={handleRegisterClick}>Facebook</button>
            <button onClick={handleLoginClick} className="mt-6">
              Ya tienes cuenta? ingresa aquí
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleLogin}
          className="w-1/2 my-8 h-[600px] border-2 flex flex-col justify-between items-center align-middle p-4"
        >
          <div className="flex flex-col justify-center items-center align-middle h-1/2">
            {" "}
            <label className="text-center">
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label className="text-center">
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
          </div>
          <div className="flex flex-col justify-between items-center align-middle h-1/2 ">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegisterClick}>Apple Id</button>
            <button onClick={handleRegisterClick}>Google</button>
            <button onClick={handleRegisterClick}>Facebook</button>

            <button className="mt-6" onClick={handleRegisterClick}>
              no tienes cuenta? registrate aqui
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
