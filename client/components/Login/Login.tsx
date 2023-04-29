"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

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

  function handleSuccess(credentialResponse: CredentialResponse) {
    console.log("CredentialResponse", credentialResponse);
  }
  function handleErorr() {
    console.log("no funca");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center align-middle">
      {isRegister ? (
        <form
          onSubmit={handleRegister}
          className="my-8 flex h-[600px] w-4/5 flex-col items-center justify-between rounded-3xl border-2 px-4 pb-4 align-middle shadow-lg shadow-black/40 lg:w-1/2"
        >
          <div className="flex h-1/2 flex-col items-center justify-center align-middle">
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
          <div className="flex h-1/2 flex-col items-center justify-between align-middle">
            {" "}
            <button onClick={handleRegister}>Register</button>
            {/* <button onClick={handleRegisterClick}>Apple Id</button>
            <button onClick={handleRegisterClick}>Facebook</button> */}
            <div className="flex w-auto items-center justify-center">
              <GoogleLogin onError={handleErorr} onSuccess={handleSuccess} />
            </div>
            <button onClick={handleLoginClick} className="mt-6">
              <p>Ya tienes cuenta? ingresa aqui</p>
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleRegister}
          className="my-8 flex h-[600px] w-4/5 flex-col items-center justify-between rounded-3xl border-2 px-4 pb-4 align-middle shadow-lg shadow-black/40 lg:w-1/2"
        >
          <div className="flex h-1/2 flex-col items-center justify-center align-middle">
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
          <div className="flex h-1/2 flex-col items-center justify-between align-middle ">
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleRegisterClick}>Apple Id</button> */}
            <div className="flex w-auto items-center justify-center">
              <GoogleLogin onError={handleErorr} onSuccess={handleSuccess} />
            </div>
            {/* <button onClick={handleRegisterClick}>Facebook</button> */}

            <button className="mt-6" onClick={handleRegisterClick}>
              <p>no tienes cuenta? registrate aqui</p>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
