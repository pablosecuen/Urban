//Padre
"use client";
import { getPassagesId } from "@component/Redux/passage/passageActions";
import { RootState } from "@component/Redux/store/store";
import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export default function Pagos() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "");
  useEffect(() => {
    dispatch(getPassagesId("pGK0OgHP5P5zoKVBhVow"));
  }, []);
  const passage = useSelector((state: RootState) => state.passage.passageById);

  const token: string = `${user.id}`;
  const toPay: any = {
    //Informacion de la compra
    id: passage.id,
    name: `De ${passage.origin} a ${passage.destination}`,
    img: passage.img,
    price: passage.price,
    quantity: 1,
  };

  const totalPrice = toPay.price * toPay.quantity;
  /* const passages = [
    {
      id: toPay.id,
      title: `De ${toPay.origin} a ${toPay.destination}`,
      picture_url: toPay.img,
      unit_price: toPay.price,
      quantity: toPay.quantity,
      currency_id: "COP",
    },
  ]; */

  /* const arrToPay = passages.map((item) => {
    return {
      id: item.id,
      title: item.title,
      picture_url: item.picture_url,
      unit_price: item.unit_price,
      quantity: item.quantity,
      currency_id: "COP",
    };
  }); */
  //Va la alerta unicamente si falla
  //Si es exitoso te redirecciona a mercadopago
  //Unicamente se puede probar con el deploy de por medio?
  const handleClickMP = async () => {
    if (token) {
      //try
      const { data } = await axios.post("https://localhost:3000/payment/new", toPay);
      window.location.href = await data.response.body.init_point;
    }
  };

  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-3xl border-2 py-20 text-center shadow-2xl shadow-black/40 lg:p-10">
      <span className="text-2xl">Valor a pagar: ${totalPrice}</span>
      <button>Bancolombia</button>
      <button onClick={handleClickMP}>Mercado Pago</button>
      <button>Generar ticket Efecty</button>
      <button>PSE</button>
      <button>Efectivo</button>
      <span className="font-bold">Cuando tu pago sea acreditado podrás gestionar tu viaje</span>
    </div>
  );
}
