import jpg from "../../../../../../../../assets/imagenes/falloElPago.png";
import Image from "next/image";

export default function Failed() {
  return (
    <div className="flex flex-col items-center justify-center lg:ml-5 2xl:ml-14">
      <Image src={jpg} alt="jpg" className="h-96 w-96 2xl:h-[450px] 2xl:w-[450px]" />
      <p className="text-center font-mono text-xl font-semibold text-red-500 2xl:text-3xl">
        Hubo un problema con el pago, lo sentimos. Intentelo de nuevo mas tarde!
      </p>
    </div>
  );
}
