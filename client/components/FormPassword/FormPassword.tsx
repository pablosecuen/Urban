import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import setValidate from "./Validate";
import Link from "next/link";

export default function FormPassword() {
  return (
    <form
      //   onSubmit={handleLogin}
      className=""
    >
      {/* div que contiene Password */}
      <h1 className="">Cambie su contraseña</h1>
      <div>
        {/* password  */}
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            // value={userData.password}
            // onChange={handleInputChange}
          />
          {/* <small
            className={`transition_all text-right ${
              errores.messagePassword ? "opacity-100" : "opacity-0"
            } absolute -bottom-6 left-0 text-left font-medium text-red-500`}
          >
            {errores.messagePassword}
          </small> */}
        </div>
        <div className="relative">
          <label>Confirme la contraseña:</label>
          <input
            type="password"
            name="password"
            // value={userData.password}
            // onChange={handleInputChange}
          />
          {/* <small
            className={`transition_all text-right ${
              errores.messagePassword ? "opacity-100" : "opacity-0"
            } absolute -bottom-6 left-0 text-left font-medium text-red-500`}
          >
            {errores.messagePassword}
          </small> */}
        </div>
      </div>
      {/* div que contiene boton de login  */}
      <div>
        <button>Guardar contraseña</button>
      </div>
    </form>
  );
}
