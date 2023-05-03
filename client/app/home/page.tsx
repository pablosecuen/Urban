"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  let token: any;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search); //fijarse problema de window
    token = urlParams.get("token");
  }
  if (token) {
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
    }, []);
  }

  return (
    <div className="shadow/30 mb-8 w-full justify-center rounded-3xl border-2 px-4 py-4 shadow-lg xl:mb-0 xl:flex xl:w-4/5 xl:flex-col xl:px-24">
      <p className="my-2 text-center text-2xl font-bold">
        Bienvedios a <span className="text-verdeurban">U</span>
        <span className=" text-celeste">rban</span>!
      </p>
      <p className="w-full text-center lg:text-xs ">
        Nuestra <b>misión</b> es entregar al usuario el poder de decidir su medio de transporte
        acercando a la oferta a la palma de su mano, <b>para empoderarte</b> con mayor información
        asistiendo en que tomes la mejor decision disponble dentro de tus necesidades, en nuestra
        app podras encontrar todo tipo de servicios de transporte, desde
        <b> buses intermunicipales, taxis publicos, transportes privados</b>, inclusive una
        <b>seccion de cadeteria</b>, para que puedas encontrar <b>soluciones reales</b> a tus
        problemas cotidianos en la menor cantidad de tiempo posibles, acercando a tu mano un poder
        increible para <b>gestionar</b> tu tiempo y tus días de la mejor manera posible
      </p>
      <p className="mt-8 text-center text-lg font-bold">
        Selecciona el tipo de servicio para poder continuar
      </p>
    </div>
  );
}
