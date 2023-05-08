"use client";
import axios from "axios";

export default function Pagos() {
  const token: string = "";
  const toDoPayment: any = {};

  const productsIds = Object.keys(toDoPayment);
  let totalPrice = 0;
  const products = productsIds.map((id) => {
    totalPrice += toDoPayment[id].amount * toDoPayment[id].price;
    return toDoPayment[id];
  });
  const arrToDoPayment = products.map((item) => {
    return {
      id: item.id,
      title: item.name,
      picture_url: item.img,
      unit_price: item.price,
      quantity: item.amount,
      currency_id: "COP",
    };
  });

  const handleClickMP = async () => {
    if (token) {
      //try
      const { data } = await axios.post("https://localhost:3000/payment", arrToDoPayment);
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
