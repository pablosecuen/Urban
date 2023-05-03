"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { CredentialResponse } from "@react-oauth/google";

interface UserToRegister {
  name: string;
  email: string;
  password: string;
}

interface UserToLogin {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const router = useRouter();

  function onLogin(username: string, password: string) {
    if (username === "admin" && password === "password") {
      console.log("Login successful");
    } else {
      console.log("Invalid username or password");
    }
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const user: UserToLogin = {
      email,
      password,
    };
    try {
      const response = await axios.post<LoginResponse>("http://localhost:3000/login/user", user);
      const { token } = response.data;
      if (token) {
        console.log("Login successful");
        // store the user object in local storage
        router.push("/home");
        // Save the token to localStorage or a state variable
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error(error);
      console.log("Error al iniciar sesión");
    }
  };

  const createUser = async (userData: UserToRegister) => {
    try {
      const response = await axios.post("http://localhost:3000/user", userData);
      console.log(response.data); // the created user data
      router.push("/home");
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
    <div className="mt-12 flex h-full w-full items-center justify-center align-middle lg:mt-0 lg:h-screen">
      {isRegister ? (
        <form
          onSubmit={handleRegister}
          className="my-8 flex h-[450px] w-4/5 flex-col items-center justify-between rounded-3xl border-2 px-4 pb-4 align-middle shadow-lg shadow-black/40 lg:h-[600px] lg:w-1/2"
        >
          <div className="flex h-1/2 flex-col items-center justify-center align-middle">
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
          <div className="flex h-1/2 flex-col items-center justify-between align-middle">
            <button className="mx-auto w-1/2 py-2 font-semibold" onClick={handleRegister}>
              Register
            </button>
            {/* <button onClick={handleRegisterClick}>Apple Id</button>
            <button onClick={handleRegisterClick}>Facebook</button> */}
            <div className="flex w-auto flex-col items-center justify-center gap-3">
              <a
                className=" flex w-56 items-center justify-between gap-3 whitespace-nowrap rounded-sm border border-[#888] bg-white py-2 font-semibold text-[#757575] shadow-md shadow-black/30"
                href="http://localhost:3000/login/auth/google"
                rel="noopener noreferrer"
              >
                Login with google
              </a>
              <button className="bg-blue-700 hover:bg-blue-800 flex items-center whitespace-nowrap rounded px-4 py-2 font-semibold text-white shadow-md  shadow-black/30">
                <svg className="mr-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.02 0H3.98A3.98 3.98 0 0 0 0 3.98v16.04A3.98 3.98 0 0 0 3.98 24h8.22v-9.29H8.65v-3.62h3.55V9.02c0-3.52 2.14-5.44 5.28-5.44 1.54 0 2.87.12 3.26.18v3.66l-2.23.001c-1.75 0-2.09.83-2.09 2.05v2.69h4.19l-.55 3.62h-3.64V24h7.12A3.98 3.98 0 0 0 24 20.02V3.98C24 1.78 22.2 0 20.02 0z" />
                </svg>
                <span>Login with Facebook</span>
              </button>
            </div>
            <button
              className="w-1/2 py-2 text-xs font-semibold lg:mx-auto lg:mt-6"
              onClick={handleLoginClick}
            >
              <p>Ya tienes cuenta? ingresa aqui</p>
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleRegister}
          className="my-8 flex h-[450px] w-4/5 flex-col items-center justify-between rounded-3xl border-2 px-4 pb-4 align-middle shadow-lg shadow-black/40 lg:h-[600px]"
        >
          <div className="flex h-1/2 flex-col items-center justify-center gap-2 align-middle">
            <label className="text-center">
              Email: <br />
              <input className="lg:w-2/3" type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label className="text-center">
              Password: <br />
              <input
                className="lg:w-2/3"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <button className="mx-auto mt-6 w-1/2 py-2 font-semibold" onClick={handleLogin}>
              Login
            </button>
          </div>
          <span className="text-center text-gray-500">OR</span>
          <div className="mt-6 flex h-1/2 flex-col items-center justify-between align-middle ">
            {/* <button onClick={handleRegisterClick}>Apple Id</button> */}
            <div className="flex w-auto flex-col items-center justify-center gap-3">
              <a
                className=" flex w-56 items-center justify-between gap-3 whitespace-nowrap rounded-sm border border-[#888] bg-white py-2 font-semibold text-[#757575] shadow-md shadow-black/30"
                href="http://localhost:3000/login/auth/google"
                rel="noopener noreferrer"
              >
                Login with google
              </a>
              <button className="bg-blue-700 hover:bg-blue-800 flex items-center whitespace-nowrap rounded px-4 py-2 font-semibold text-white shadow-md  shadow-black/30">
                <svg className="mr-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.02 0H3.98A3.98 3.98 0 0 0 0 3.98v16.04A3.98 3.98 0 0 0 3.98 24h8.22v-9.29H8.65v-3.62h3.55V9.02c0-3.52 2.14-5.44 5.28-5.44 1.54 0 2.87.12 3.26.18v3.66l-2.23.001c-1.75 0-2.09.83-2.09 2.05v2.69h4.19l-.55 3.62h-3.64V24h7.12A3.98 3.98 0 0 0 24 20.02V3.98C24 1.78 22.2 0 20.02 0z" />
                </svg>
                <span>Login with Facebook</span>
              </button>
              <button
                className="py-2 text-xs font-semibold lg:mx-auto lg:mt-6"
                onClick={handleRegisterClick}
              >
                <p>No tienes cuenta? Registrate aqui</p>
              </button>
            </div>
            {/* <button onClick={handleRegisterClick}>Facebook</button> */}
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
