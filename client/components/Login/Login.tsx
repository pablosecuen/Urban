"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

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
    const userData: UserToLogin = {
      email,
      password,
    };
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/login/user",
        userData
      );
      const {  token } = response.data;
      if ( token) {
        console.log("Login successful");
        router.push('/home');
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
      router.push('/home');
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
    <div className="h-screen flex justify-center align-middle items-center w-full">
      {isRegister ? (
        <form
          onSubmit={handleRegister}
          className="lg:w-1/2 w-4/5 my-8 h-[600px] border-2 rounded-3xl shadow-lg shadow-black/40 flex flex-col justify-between items-center align-middle pb-4 px-4"
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
            <p>Ya tienes cuenta?</p><p>ingresa aquí</p>
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleLogin}
          className="lg:w-1/2 w-4/5 my-8 h-[600px] border-2 rounded-3xl shadow-lg shadow-black/40 flex flex-col justify-between items-center align-middle p-4"
        >
          <div className="flex flex-col justify-center items-center align-middle h-1/2 ">
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
              <p>no tienes cuenta?</p> <p>registrate aqui</p>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
