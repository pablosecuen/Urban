"use client";
import { useState } from "react";

type LoginFormProps = {
  onLogin: (email: string, password: string) => void;
  onRegisterClick: () => void;
};

type RegisterFormProps = {
  onRegister: (name: string, email: string, password: string) => void;
  onLoginClick: () => void;
};

type FormProps = LoginFormProps | RegisterFormProps;

const Login: React.FC<LoginFormProps & RegisterFormProps> = ({
  onLogin,
  onRegisterClick,
  onRegister,
  onLoginClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === repeatPassword) {
      onRegister(name, email, password);
    } else {
      alert("Passwords do not match");
    }
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

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
  };

  const handleLoginClick = () => {
    setIsRegister(false);
  };

  return (
    <div className="h-[100vh] flex justify-center align-middle items-center">
      {isRegister ? (
        <form
          onSubmit={handleRegister}
          className="w-8/12 my-8 h-[600px] border-2 flex flex-col justify-between items-center align-middle "
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
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <label className="text-center">
              Repeat Password:
              <input
                type="password"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between items-center align-middle h-1/2 border-2">
            {" "}
            <button onClick={handleRegisterClick}>Register</button>
            <button onClick={handleRegisterClick}>Apple Id</button>
            <button onClick={handleRegisterClick}>Google</button>
            <button onClick={handleRegisterClick}>Facebook</button>
            <button onClick={handleLoginClick} className="mt-10">
              Ya tienes cuenta? ingresa aquí
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleLogin}
          className="w-8/12 my-8 h-[600px] border-2 flex flex-col justify-between items-center align-middle "
        >
          <div className="flex flex-col justify-center items-center align-middle h-1/2">
            {" "}
            <label className="text-center">
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label className="text-center">
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between items-center align-middle h-1/2 border-2">
            <button type="submit">Login</button>

            <button onClick={handleRegisterClick}>Login</button>
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
