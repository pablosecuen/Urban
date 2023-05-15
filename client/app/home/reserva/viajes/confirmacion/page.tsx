import CardConfirmacionViajes from "@component/components/Cards/CardConfirmacionReserva";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban | Viajes | Confirmacion",
  description:
    "En nuestra página de confirmación de viajes, podrás revisar en detalle los datos de tu viaje y confirmar la cantidad de pasajes que deseas. Aquí encontrarás toda la información relevante, incluyendo los detalles del destino, origen, fechas, horarios y opciones de transporte seleccionadas. Revisa cuidadosamente los datos y personaliza tu viaje ajustando el número de pasajes requeridos. Nuestra página de confirmación de viajes te permite tener un control total sobre tu experiencia de viaje. Asegúrate de tener la cantidad adecuada de pasajes y disfruta de un viaje cómodo y sin complicaciones.",
  keywords:
    "gestión de viajes, confirmación de viajes, detalles de viaje, opciones de transporte, cantidad de pasajes, destinos, origen, fechas de viaje, horarios, personalizar viaje, control de viaje, experiencia de viaje, viaje cómodo, herramienta de confirmación de viajes.",
};
export default function Confirmacion({ params }: { params: { id: string } }) {
  const { id } = params;
  return <CardConfirmacionViajes id={id} />;
}
