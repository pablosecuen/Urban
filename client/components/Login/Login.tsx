"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CredentialResponse } from "@react-oauth/google";

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

  const handleLoginGoogle = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get<LoginResponse>("http://localhost:3000/login/auth/google");
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
            <button className="mx-auto w-1/2 py-2 font-semibold" onClick={handleRegister}>
              Register
            </button>
            {/* <button onClick={handleRegisterClick}>Apple Id</button>
            <button onClick={handleRegisterClick}>Facebook</button> */}
            <div className="flex w-auto flex-col items-center justify-center gap-3">
              <button
                className=" flex w-56 items-center justify-between gap-3 whitespace-nowrap rounded-sm border border-[#888] bg-white py-2 font-semibold text-[#757575] shadow-md shadow-black/30"
                onClick={handleLoginGoogle}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                  data-name="Layer 1"
                  id="Layer_1"
                  fill="#000000"
                  className="w-auto"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
                      fill="#00ac47"
                    ></path>
                    <path
                      d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
                      fill="#ffba00"
                    ></path>
                    <polygon
                      fill="#2ab2db"
                      points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
                    ></polygon>
                    <path
                      d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
                      fill="#ea4435"
                    ></path>
                    <polygon
                      fill="#2ab2db"
                      points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
                    ></polygon>
                    <path
                      d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
                      fill="#4285f4"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
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
          className="my-8 flex h-[450px] w-4/5 flex-col items-center justify-between rounded-3xl border-2 px-4 pb-4 align-middle shadow-lg shadow-black/40 lg:h-[600px] lg:w-1/2"
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
            <button className="mx-auto w-1/2 py-2 font-semibold" onClick={handleLogin}>
              Login
            </button>
            {/* <button onClick={handleRegisterClick}>Apple Id</button> */}
            <div className="flex w-auto flex-col items-center justify-center gap-3">
              <button
                className=" flex w-56 items-center justify-between gap-3 whitespace-nowrap rounded-sm border border-[#888] bg-white py-2 font-semibold text-[#757575] shadow-md shadow-black/30"
                onClick={handleLoginGoogle}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                  data-name="Layer 1"
                  id="Layer_1"
                  fill="#000000"
                  className=" w-auto"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
                      fill="#00ac47"
                    ></path>
                    <path
                      d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
                      fill="#4285f4"
                    ></path>
                    <path
                      d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
                      fill="#ffba00"
                    ></path>
                    <polygon
                      fill="#2ab2db"
                      points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
                    ></polygon>
                    <path
                      d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
                      fill="#ea4435"
                    ></path>
                    <polygon
                      fill="#2ab2db"
                      points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
                    ></polygon>
                    <path
                      d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
                      fill="#4285f4"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 flex items-center whitespace-nowrap rounded px-4 py-2 font-semibold text-white shadow-md  shadow-black/30">
                <svg className="mr-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.02 0H3.98A3.98 3.98 0 0 0 0 3.98v16.04A3.98 3.98 0 0 0 3.98 24h8.22v-9.29H8.65v-3.62h3.55V9.02c0-3.52 2.14-5.44 5.28-5.44 1.54 0 2.87.12 3.26.18v3.66l-2.23.001c-1.75 0-2.09.83-2.09 2.05v2.69h4.19l-.55 3.62h-3.64V24h7.12A3.98 3.98 0 0 0 24 20.02V3.98C24 1.78 22.2 0 20.02 0z" />
                </svg>
                <span>Login with Facebook</span>
              </button>
            </div>
            {/* <button onClick={handleRegisterClick}>Facebook</button> */}

            <button
              className="w-1/2 py-2 text-xs font-semibold lg:mx-auto lg:mt-6"
              onClick={handleRegisterClick}
            >
              <p>no tienes cuenta? registrate aqui</p>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
