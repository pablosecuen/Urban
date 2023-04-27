import Image from "next/image";
import sos from "../../assets/icons/sos.png";
import escudo from "../../assets/icons/escudo.png";
import planet from "../../assets/icons/planet.png";
import contract from "../../assets/icons/contract.png";

const iconos = { sos, escudo, planet, contract };

export default function Footer() {
  return (
    <footer className="h-96 bg-verde flex items-center align-middle justify-center">
      <div className="container mx-auto flex flex-col">
        <span className="text-black text-3xl font-bold text-center flex justify-center">
          Todo lo que necesitas saber
        </span>
        <span className="text-center flex justify-center">
          Encuentra la oferta de servicios de transporte terrestre público y privado disponible en tiempo real
        </span>
        <div className="flex justify-around items-center align-middle mt-10">
          {Object.entries(iconos).map(([nombre, imagen]) => (
            <div className="flex flex-col w-60 h-48 gap-2 justify-between" key={nombre}>
              <Image
                src={imagen}
                alt={nombre}
                className="h-28 w-28 flex self-center"
              />
              <p className="text-center">{`${
                nombre.charAt(0).toUpperCase() + nombre.slice(1)
              } description`}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
