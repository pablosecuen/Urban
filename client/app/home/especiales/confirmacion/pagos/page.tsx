"use client";
export default function Pagos() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-4/5 text-center">
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
