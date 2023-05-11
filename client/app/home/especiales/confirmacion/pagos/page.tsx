"use client";
import { RootState } from "@component/Redux/store/store";
import axios from "axios";

export default function Pagos() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const passage = JSON.parse(sessionStorage.getItem("passage") || "");

  const token: string = `${user.id}`;
  const toPay: any = {
    id: passage.id,
    name: `De ${passage.origin} a ${passage.destination}`,
    img: passage.img,
    price: passage.price,
    quantity: 1,
  };
  //Objeto con la informacion de la compra, id del item, nombre de lo que paga, imagen?, precio unitario, cantidad

  const passagesIds = Object.keys(toPay);
  let totalPrice = toPay.price * toPay.quantity;
  const passages = passagesIds.map((id) => {
    totalPrice += toPay[id].amount * toPay[id].price;
    return toPay[id];
  });
  const arrToPay = passages.map((item) => {
    return {
      id: item.id,
      title: item.name,
      picture_url: item.img,
      unit_price: item.price,
      quantity: item.amount,
      currency_id: "COP",
    };
  });
  //Va la alerta unicamente si falla
  //Si es exitoso te redirecciona a mercadopago
  //Unicamente se puede probar con el deploy de por medio?
  const handleClickMP = async () => {
    if (token) {
      //try
      const { data } = await axios.post("https://localhost:3000/payment", arrToPay);
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
