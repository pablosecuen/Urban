"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
//import CardCheckout from "@component/components/Cards/CardCheckout";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  //datos mercadopago
  const queryParams = new URLSearchParams(location.search);
  const paymentId: string | null = queryParams.get("payment_id"); //id del usuario de mp
  const merchantOrder: string | null = queryParams.get("merchant_order_id"); //codigo factura
  const status: string | null = queryParams.get("status"); //estado de exito o no
  const user: any | null = JSON.parse(localStorage.getItem("user") || ""); //id del usuario de la app;

  // - - - - - - - - - - - - NOTIFICACIONES - - - - - - - - - - - -
  const notifySuccess = () =>
    toast.success(`Su pago ha sido realizado con éxito!`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const getToken = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/payment/merchantOrder?merchantOrder=${merchantOrder}`
      );
      //este axios pueeeede llegar a ser a mercadopago
      //aca se guarda la info y con esto generamos la factura

      const requestData = {
        userId: user?.id,
        /// reemplazar la variable objeto por data
        passageId: data?.items[0].id,
        price: data?.items[0].unit_price,
        quantity: data?.items[0].quantity,
        paymentId: paymentId,
        merchantOrder: merchantOrder,
        statusMp: status,
      };
      return requestData;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    (async () => {
      const ticket = await getToken();
      axios.post("http://localhost:3000/ticket", ticket);
    })();

    notifySuccess();
    //post con el endpoint del ticket usando requestData
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center gap-8">
      {/* <p className="text-center text-2xl font-bold">Su pago ha sido realizado con éxito !</p> */}
      {/* <Image src={success} alt="pago exitoso" className="h-80 w-80 self-center"></Image> */}
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

      <Link href="/home">
        <button className="mx-auto flex  w-1/2 justify-center py-1 text-center">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
