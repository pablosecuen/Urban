import BtnMp from "./components/btnMp.pasajes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban | Viajes | Pagos",
  description:
    "En nuestra página de checkout de confirmación de viajes, puedes elegir el tipo de pago que deseas utilizar para completar tu reserva. Te ofrecemos varias opciones convenientes, como Mercado Pago, Bancolombia, efectivo y PSE (Pago Seguro en Línea). Selecciona el método de pago que prefieras y sigue los pasos para finalizar el proceso de reserva. Nuestra página de checkout de confirmación de viajes te brinda flexibilidad y seguridad al momento de realizar el pago, asegurando una experiencia de reserva sin complicaciones y garantizando la confirmación exitosa de tu viaje.",
  keywords:
    "gestión de viajes, confirmación de viajes, checkout de viajes, opciones de pago, Mercado Pago, Bancolombia, efectivo, PSE, reserva de viajes, método de pago, flexibilidad de pago, seguridad de pago, experiencia de reserva, confirmación exitosa de viajes.",
};
export default function Pagos() {
  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-4 rounded-3xl border-2 py-20 text-center shadow-2xl shadow-black/40 lg:p-10">
      <BtnMp />
      <button>Bancolombia</button>
      <button>Generar ticket Efecty</button>
      <button>PSE</button>
      <button>Efectivo</button>
      <span className="font-bold">Cuando tu pago sea acreditado podrás gestionar tu viaje</span>
    </div>
  );
}
