//Hijo
"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import success from "../../assets/imagenes/success.png";
import { useState } from "react";

export default function Checkout() {
  //datos mercadopago
  const queryParams = new URLSearchParams(location.search);
  const paymentId: string | null = queryParams.get("payment_id"); //id del pago de mp
  const merchantOrder: string | null = queryParams.get("merchant_order_id"); //codigo factura
  const status: string | null = queryParams.get("status"); //estado de exito o no
  const [dataState, setDataState] = useState({});
  const userId: string | null = "";

  const getToken = async () => {
    const { data } = await axios.get(`/token?merchantOrder=${merchantOrder}`);
    //este axios pueeeede llegar a ser a mercadopago
    setDataState(data); //aca se guarda la info y con esto generamos la factura
    const requestData = {
      userId: userId,
      /// reemplazar la variable objeto por data
      products: data.items.map((product: any) => {
        return {
          id: product.id,
          unitPrice: product.unit_price,
          quantity: product.quantity,
        };
      }),
      paymentId: paymentId,
      merchantOrder: merchantOrder,
      status: status,
    };
    return requestData;
  };
  return (
    <div className="flex flex-col justify-center gap-8">
      <p className="text-center text-2xl font-bold">Su pago ha sido realizado con éxito !</p>
      <Image src={success} alt="pago exitoso" className="h-80 w-80 self-center"></Image>

      <Link href="/home">
        <button className="mx-auto flex  w-1/2 justify-center py-1 text-center">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
