import jpg from "../../../../../../../../assets/imagenes/falloElPago.png";
import Image from "next/image";

export default function Failed() {
  return (
    <div className="ml-14 flex flex-col items-center justify-center">
      <Image
        src={jpg}
        alt="jpg"
        className="h-96 w-96"
        // className=" mt-10  w-24 lg:mt-10 lg:h-52 lg:w-56 2xl:h-72 2xl:w-80"
      />
      <p className="text-center font-mono text-2xl font-semibold text-red-500">
        Ha ocurrido un problema con el pago... lo sentimos
      </p>
      <p className="text-center font-mono text-2xl font-semibold text-red-500">
        Intentelo de nuevo mas tarde!
      </p>
    </div>
  );
}
