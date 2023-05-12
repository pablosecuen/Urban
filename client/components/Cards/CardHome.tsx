"use client";
import axios from "axios";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CardHome() {
  let token: any;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search); //fijarse problema de window
    token = urlParams.get("token");
  }

  const user = JSON.parse(localStorage.getItem("user")!);

  const notifySuccess = () =>
    //Aca es donde se define el funcionamiento de la notificacion, si dura mucho o poco, si es positiva o negativa
    //Si miran cada Toast solo con cambiar el success, error, warn o info, cambie su funcion
    //No hace falta cambiar el ToastContainer a la par si solo se cambia el Toast
    toast.success(`Bienvenido a ${user.name}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
    <div className="mb-8 mt-10 flex w-full flex-col items-center justify-evenly rounded-3xl border-2 px-4 py-4 shadow-2xl shadow-black/40 min-[420px]:mt-32 min-[420px]:w-4/5 lg:mt-10 lg:h-[400px] xl:h-[450px] xl:w-full 2xl:h-4/5">
      <p className="text-center text-xl font-bold xl:text-2xl 2xl:text-2xl">
        Bienvedios a <span className="text-verdeurban">U</span>
        <span className=" text-celeste">rban</span>!
      </p>
      <p className="w-full px-4 text-center lg:text-xs xl:text-base 2xl:text-lg ">
        Nuestra <b>misión</b> es entregar al usuario el poder de decidir su medio de transporte
        acercando a la oferta a la palma de su mano, <b>para empoderarte</b> con mayor información
        asistiendo en que tomes la mejor decision disponble dentro de tus necesidades, en nuestra
        app podras encontrar todo tipo de servicios de transporte, desde
        <b> buses intermunicipales, taxis publicos, transportes privados</b>, inclusive una
        <b> sección de cadeteria</b>, para que puedas encontrar <b>soluciones reales</b> a tus
        problemas cotidianos en la menor cantidad de tiempo posibles, entregando al cliente un poder
        increible para <b>gestionar</b> tu tiempo y tus días de la mejor manera posible
      </p>
      <p className="text-center text-lg font-bold 2xl:text-xl">
        {"<-- "}Selecciona el tipo de servicio para poder continuar
      </p>
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
