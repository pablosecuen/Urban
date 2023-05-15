import CardConfirmacionViajes from "@component/components/Cards/CardConfirmacionReserva";

export default function Confirmacion({ params }: { params: { id: string } }) {
  const { id } = params;
  return <CardConfirmacionViajes id={id} />;
}
