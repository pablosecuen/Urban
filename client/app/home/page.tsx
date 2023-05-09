"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  let token: any;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search); //fijarse problema de window
    token = urlParams.get("token");
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
          console.log(data.data);
        });
  }, [token]);

  useEffect(() => {
    token &&
      axios
        .get("http://localhost:3000/user/decoding", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((data) => {
          console.log(data.data);
          const userData = data.data;
          localStorage.setItem("user", JSON.stringify(userData));
        });
  }, [token]);

  return (
    <div className="shadow/30 mb-8 flex w-full flex-col items-center justify-evenly rounded-3xl border-2 px-4 py-4 shadow-lg min-[420px]:mt-32 min-[420px]:w-4/5 lg:h-[380px] xl:h-[450px] xl:w-full 2xl:h-4/5">
      <p className="text-center text-xl font-bold xl:text-2xl 2xl:text-3xl">
        Bienvedios a <span className="text-verdeurban">U</span>
        <span className=" text-celeste">rban</span>!
      </p>
      <p className="w-full text-center lg:text-xs xl:text-base 2xl:text-xl ">
        Nuestra <b>misión</b> es entregar al usuario el poder de decidir su medio de transporte
        acercando a la oferta a la palma de su mano, <b>para empoderarte</b> con mayor información
        asistiendo en que tomes la mejor decision disponble dentro de tus necesidades, en nuestra
        app podras encontrar todo tipo de servicios de transporte, desde
        <b> buses intermunicipales, taxis publicos, transportes privados</b>, inclusive una
        <b>seccion de cadeteria</b>, para que puedas encontrar <b>soluciones reales</b> a tus
        problemas cotidianos en la menor cantidad de tiempo posibles, acercando a tu mano un poder
        increible para <b>gestionar</b> tu tiempo y tus días de la mejor manera posible
      </p>
      <p className="text-center text-lg font-bold 2xl:text-2xl">
        {"<-- "}Selecciona el tipo de servicio para poder continuar
      </p>
    </div>
  );
}
