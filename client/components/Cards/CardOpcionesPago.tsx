//Padre
"use client";
import { PassageToRegister } from "@component/app/types/Passages";
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
  const passage = useSelector((state: RootState) => state.passage.passageById);
  console.log(passage);

  useEffect(() => {
    dispatch(getPassagesId("pGK0OgHP5P5zoKVBhVow"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface ToPay {
    id: string | PassageToRegister | null;
    name: string | PassageToRegister;
    img: string | PassageToRegister | null;
    unit_price: number | PassageToRegister | null;
    quantity: number | PassageToRegister;
  }

  const token: string = `${user.id}`;

  let toPay: ToPay | null = null;

  if (passage) {
    toPay = {
      id: passage.id,
      name: `De ${passage.origin} a ${passage.destination}`,
      img: passage.img,
      unit_price: passage.price,
      quantity: 1,
    };
  }

  console.log(toPay);

  const totalPrice =
    (typeof toPay?.unit_price === "number" ? toPay.unit_price : 0) *
    (typeof toPay?.quantity === "number" ? toPay.quantity : 0);

  //  const passages = [
  //   {
  //     id: toPay.id,
  //     title: `De ${toPay.origin} a ${toPay.destination}`,
  //     picture_url: toPay.img,
  //     unit_price: toPay.price,
  //     quantity: toPay.quantity,
  //     currency_id: "COP",
  //   },
  // ];

  //  const arrToPay = passages.map((item) => {
  //   return {
  //     id: item.id,
  //     title: item.title,
  //     picture_url: item.picture_url,
  //     unit_price: item.unit_price,
  //     quantity: item.quantity,
  //     currency_id: "COP",
  //   };
  // });
  //Va la alerta unicamente si falla
  //Si es exitoso te redirecciona a mercadopago
  //Unicamente se puede probar con el deploy de por medio?
  const handleClickMP = async () => {
    try {
      if (token) {
        const { data } = await axios.post("http://localhost:3000/payment/new", [toPay]);
        window.location.href = await data.response.body.init_point;
      }
    } catch (error) {
      // Handle the error here
      console.error("An error occurred:", error);
      // You can also display an error message to the user, if needed
      // example: setError("An error occurred. Please try again later.");
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
