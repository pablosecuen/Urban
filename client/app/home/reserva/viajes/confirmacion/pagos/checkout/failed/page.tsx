import jpg from "../../../../../../../../assets/imagenes/falloElPago.png";
import Image from "next/image";

export default function Failed() {
  return (
    <div className="flex flex-col items-center justify-center 2xl:ml-14">
      <Image src={jpg} alt="jpg" className="h-96 w-96" />
      <p className="text-center font-mono text-xl font-semibold text-red-500">
        Hubo un problema con el pago, lo sentimos
      </p>
      <p className="text-center font-mono text-xl font-semibold text-red-500">
        Intentelo de nuevo mas tarde!
      </p>
    </div>
  );
}
