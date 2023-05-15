import CardConfirmacionViajes from "@component/components/Cards/CardConfirmacionReserva";
import Link from "next/link";

export default function Confirmacion({ params }: { params: { id: string } }) {
  const {id} = params
  return (
<div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 py-4 shadow-2xl shadow-black/40">
      <h3 className="lg:text-center lg:text-3xl lg:font-bold">Pasaje disponible!</h3>
  <CardConfirmacionViajes id={id}/>
  <p className="w-4/5 text-center text-gray-400">
        tocando el boton para abonar el servicio aceptas nuestros terminos y condiciones de uso
      </p>
      <Link href="/home/reserva/viajes/confirmacion/pagos" className="flex justify-center">
        <button className="mt-10 w-1/2">Ir a pagar</button>
      </Link>
    </div>
  ) ;
}
