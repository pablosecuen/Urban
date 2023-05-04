import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Google } from "@component/assets/icons/svg/Google";

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

function Register({ isRegister, setIsRegister }: { isRegister: boolean; setIsRegister: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const router = useRouter();

  const handleLoginClick = () => {
    setIsRegister(!isRegister);
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
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

  const handleRegister = async (e: any) => {
    e.preventDefault();
    console.log(password);
    console.log(repeatPassword);
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

  const createUser = async (userData: UserToRegister) => {
    try {
      const response = await axios.post("http://localhost:3000/user", userData);
      console.log(response.data); // the created user data
      router.push("/home");
    } catch (error) {
      console.log("salio todo mal");
    }
  };
  return (
    <form
      onSubmit={handleRegister}
      className="relative mx-2 h-[500px] max-w-md rounded-lg bg-slate-800 px-4 py-8 text-sm text-white/90 shadow-md shadow-black/40"
    >
      {/* div que contiene todos los labels e inputs */}
      <div className="flex h-[250px] flex-col gap-5 px-5 pb-5">
        {/* Name */}
        <div className="flex gap-1">
          <div className="w-1/2">
            <label className="">Name:</label>
            <input
              className="px-1 text-black"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="">Lastname:</label>
            <input
              type="text"
              className="px-1 text-black"
              value={lastname}
              onChange={handleLastnameChange}
            />
          </div>
        </div>
        {/* Email */}
        <div>
          <label className="">Email:</label>
          <input
            className="px-1 text-black"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* Password  */}
        <div>
          <label className="">Password:</label>
          <input
            className="px-1 text-black"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* Repeat Password   */}
        <div>
          <label className="">Repeat Password:</label>
          <input
            className="px-1 text-black"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
        </div>
      </div>
      {/*  Boton de registro */}
      <div className="py-4 text-center">
        <button className="mx-auto w-1/2" onClick={handleRegister}>
          Register
        </button>
      </div>

      {/*  */}
      <div className="mx-auto flex w-4/5 flex-col gap-2">
        <Link
          className="mx-auto flex w-2/3 items-center justify-center gap-2 rounded-md border border-[#888] bg-white py-2  font-semibold text-[#757575] shadow-md shadow-black/30"
          href="http://localhost:3000/login/auth/google"
          rel="noopener noreferrer"
        >
          <Google width="16" height="16" />
          Login with google
        </Link>
        <Link
          className="mx-auto flex w-2/3 items-center justify-center gap-2 rounded-md border border-[#888] bg-white py-2  font-semibold text-blue shadow-md shadow-black/30"
          href="http://localhost:3000/login/auth/google"
          rel="noopener noreferrer"
        >
          <svg className="mr-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M20.02 0H3.98A3.98 3.98 0 0 0 0 3.98v16.04A3.98 3.98 0 0 0 3.98 24h8.22v-9.29H8.65v-3.62h3.55V9.02c0-3.52 2.14-5.44 5.28-5.44 1.54 0 2.87.12 3.26.18v3.66l-2.23.001c-1.75 0-2.09.83-2.09 2.05v2.69h4.19l-.55 3.62h-3.64V24h7.12A3.98 3.98 0 0 0 24 20.02V3.98C24 1.78 22.2 0 20.02 0z" />
          </svg>
          Login with Facebook
        </Link>
      </div>
      <small className="absolute bottom-5 right-5 block pt-2 text-right">
        Ya tenes cuenta?{" "}
        <span
          onClick={handleLoginClick}
          className="font-semibold text-blue hover:cursor-pointer hover:underline"
        >
          Ingresa aqui
        </span>
      </small>
    </form>
  );
}

export default Register;
