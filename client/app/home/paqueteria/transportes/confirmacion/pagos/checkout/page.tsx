import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import success from "../../../../../../../assets/imagenes/success.png";

export default function Checkout() {
  return (
    <div className="flex flex-col justify-center gap-8">
      <p className="text-center text-2xl font-bold">Su pago ha sido realizado con éxito !</p>
      <Image src={success} alt="pago exitoso" className="h-80 w-80 self-center"></Image>
      <Link href="/home">
        <button className="mx-auto flex  w-1/2 justify-center py-1 text-center">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
