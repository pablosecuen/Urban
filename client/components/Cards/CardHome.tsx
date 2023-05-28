"use client";
import { User } from "@component/app/types/User";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfiniteSlider from "../InfiniteSlider/InfiniteSlider";

export default function CardHome() {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(null);
  useEffect(() => {
    if (window) {
      const urlParams = new URLSearchParams(window.location.search);
      const tokendata = urlParams.get("token");
      const userString = localStorage.getItem("user");
      const userData = userString ? JSON.parse(userString) : null;
      setUser(userData);
      setToken(tokendata);
    }
  }, []);

  const containerStyles =
    "mb-8 mt-10 flex w-full flex-col items-center justify-evenly rounded-3xl border-2 bg-white px-4 py-4 shadow-2xl shadow-black/40 min-[420px]:mt-32 min-[420px]:w-4/5 lg:mt-10 lg:h-[400px] xl:h-[450px] xl:w-full 2xl:h-4/5";
  const titleStyles = "py-4 text-center text-xl font-bold xl:text-2xl 2xl:text-2xl";
  const paragraphStyles = "w-full px-4 text-center lg:text-xs xl:text-base 2xl:text-lg";

  const notifySuccess = () => {
    if (!toast.isActive("success")) {
      toast.success(`Bienvenido ${user?.name} `, {
        toastId: "success",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  if (user) {
    notifySuccess();
  }
  useEffect(() => {
    token &&
      axios
        .get("http://localhost:3000/user/decoding", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((data) => {
          const userData = data.data;
          localStorage.setItem("user", JSON.stringify(userData));
          location.replace("/home");
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={containerStyles}>
      <p className={titleStyles}>
        Bienvedios a <span className="text-verdeurban">U</span>
        <span className=" text-celeste">rban</span>!
      </p>
      <p className={paragraphStyles}>
        Nuestra <b>misión</b> es entregar al usuario el poder de decidir su medio de transporte
        acercando a la oferta a la palma de su mano, <b>para empoderarte</b> con mayor información
        asistiendo en que tomes la mejor decision disponble dentro de tus necesidades, en nuestra
        app podras encontrar todo tipo de servicios de transporte, desde
        <b> buses intermunicipales, taxis publicos, transportes privados</b>, inclusive una
        <b> sección de cadeteria</b>, para que puedas encontrar <b>soluciones reales</b> a tus
        problemas cotidianos en la menor cantidad de tiempo posibles, entregando al cliente un poder
        increible para <b>gestionar</b> tu tiempo y tus días de la mejor manera posible
      </p>
      <InfiniteSlider />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        closeButton={false}
      />
    </div>
  );
}
