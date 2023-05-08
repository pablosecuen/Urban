"use client";
import axios from "axios";

export default function Pagos() {
  const token: string = "";
  const toDoPayment: any = {};

  const productsIds = Object.keys(toDoPayment);
  let totalPrice = 0;
  const products = productsIds.map((id) => {
    totalPrice += toDoPayment[id].amount * toDoPayment[id].price;
    return;
    toDoPayment[id];
  });

  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-3xl border-2 py-20 text-center shadow-2xl shadow-black/40 lg:p-10">
      <span className="text-2xl">Valor a pagar: $50.000</span>
      <button>Bancolombia</button>
      <button onClick={handleClickMP}>Mercado Pago</button>
      <button>Generar ticket Efecty</button>
      <button>PSE</button>
      <button>Efectivo</button>
      <span className="font-bold">Cuando tu pago sea acreditado podrás gestionar tu viaje</span>
    </div>
  );
}
