import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import setValidate from "./Validate";
import Link from "next/link";
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

interface LoginError {
  messageEmail?: string;
  messagePassword?: string;
}
const LoginForm = ({ isRegister, setIsRegister }: { isRegister: boolean; setIsRegister: any }) => {
  const [userData, setUserData] = useState<UserToLogin>({} as UserToLogin);
  const [errores, setErrores] = useState<LoginError>({} as LoginError);
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    const name = e.target.name.toString();

    setUserData({ ...userData, [name]: value });
    setErrores({ ...errores, ...setValidate({ [name]: value }) });
  };
  const handleRegisterClick = () => {
    setIsRegister(!isRegister);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const user: UserToLogin = userData;
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

  return (
    <form
      onSubmit={handleLogin}
      className="my-8 flex h-[450px] w-4/5 flex-col items-center justify-between rounded-3xl border-2 px-4 pb-4 align-middle shadow-lg shadow-black/40 lg:ml-20 lg:h-4/5 lg:w-4/5"
    >
      <div className="flex h-1/2 flex-col items-center justify-center gap-6 ">
        <label
          className={`transition_all relative text-center ${
            errores.messageEmail ? "text-red-500" : ""
          }`}
        >
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className={`transition_all mt-1 ${
              errores.messageEmail && "focus-visible:outline-red-500 "
            }`}
          />
          <small
            className={`transition_all absolute ${
              errores.messageEmail ? "opacity-100" : "opacity-0"
            } -bottom-6 left-0 text-left font-medium text-red-500`}
          >
            {errores.messageEmail}
          </small>
        </label>
        <label
          className={`relative text-center ${
            errores.messagePassword ? "text-red-500" : ""
          } transition_all`}
        >
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={`transition_all mt-1  ${
              errores.messagePassword && " focus-visible:outline-red-500"
            }`}
          />
          <small
            className={`transition_all ${
              errores.messagePassword ? "opacity-100" : "opacity-0"
            } absolute -bottom-6 left-0 text-left font-medium text-red-500`}
          >
            {errores.messagePassword}
          </small>
        </label>
      </div>
      <div className="flex h-1/2 flex-col items-center justify-between align-middle ">
        <button className="mx-auto mt-2 w-1/2 py-2 font-semibold" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="flex h-1/2 flex-col items-center justify-between align-middle ">
        {/* <button onClick={handleRegisterClick}>Apple Id</button> */}
        <div className="flex w-1/2 flex-col items-center justify-center gap-3">
          <Link
            className=" flex  items-center justify-center gap-3 whitespace-nowrap rounded-sm border border-[#888] bg-white py-2 font-semibold text-[#757575] shadow-md shadow-black/30"
            href="http://localhost:3000/login/auth/google"
            rel="noopener noreferrer"
          >
            <Google width="24" height="24" />
            Login with google
          </Link>
          <button className="bg-blue-700 hover:bg-blue-800 flex items-center whitespace-nowrap rounded px-4 py-2 font-semibold text-white shadow-md  shadow-black/30">
            <svg className="mr-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M20.02 0H3.98A3.98 3.98 0 0 0 0 3.98v16.04A3.98 3.98 0 0 0 3.98 24h8.22v-9.29H8.65v-3.62h3.55V9.02c0-3.52 2.14-5.44 5.28-5.44 1.54 0 2.87.12 3.26.18v3.66l-2.23.001c-1.75 0-2.09.83-2.09 2.05v2.69h4.19l-.55 3.62h-3.64V24h7.12A3.98 3.98 0 0 0 24 20.02V3.98C24 1.78 22.2 0 20.02 0z" />
            </svg>
            <span>Login with Facebook</span>
          </button>
          <button
            className="py-3 text-xs font-semibold lg:mx-auto lg:mt-6"
            onClick={handleRegisterClick}
          >
            <p>No tienes cuenta? Registrate aqui</p>
          </button>
        </div>
        {/* <button onClick={handleRegisterClick}>Facebook</button> */}
      </div>
    </form>
  );
};

export default LoginForm;
