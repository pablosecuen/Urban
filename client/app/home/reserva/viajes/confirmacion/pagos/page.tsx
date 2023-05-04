"use client";
export default function Pagos() {
  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-3xl border-2 px-6 py-20 text-center shadow-2xl shadow-black/40 lg:py-14">
      <span className="text-2xl">Valor a pagar: $50.000</span>
      <button>Bancolombia</button>
      <button>Mercado Pago</button>
      <button>Generar ticket Efecty</button>
      <button>PSE</button>
      <button>Efectivo</button>
      <span className="font-bold">Cuando tu pago sea acreditado podrás gestionar tu viaje</span>
    </div>
  );
}
