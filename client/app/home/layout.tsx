import NavBar from "@component/components/NavBar/NavBar";
import logo from "../../assets/imagenes/UrbanLogo.png";
import Image, { StaticImageData } from "next/image";
import sos from "../../assets/icons/sos.png";
import escudo from "../../assets/icons/escudo.png";
import planet from "../../assets/icons/planet.png";
import contract from "../../assets/icons/contract.png";
import Menu from "@component/components/Menu/Menu";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="max-w-screen-2xl h-[95vh] mx-auto flex justify-center">
        <div className="w-1/2  flex flex-col gap-8  justify-center items-center">
          <Image src={logo as StaticImageData} alt="logo" className="w-72" />
          <Menu />
        </div>
        <div className="w-1/2  flex justify-center items-center">{children}</div>
      </div>
      <footer className="h-96 bg-verde flex items-center align-middle justify-center">
        <div className="flex flex-col">
          {" "}
          <span className="text-black text-3xl font-bold text-center  flex justify-center">
            Todo lo que necesitas saber
          </span>
          <span className=" text-center  flex justify-center">
            Encuentra la oferta de servicios de transporte terrestre público y privado disponible en
            tiempo real
          </span>
          <div className="flex justify-around items-center align-middle mt-10">
            <div className="flex flex-col h-48  w-60 gap-2 justify-between">
              <Image src={sos} alt="sos" className="h-28 w-28 flex self-center "></Image>
              <p className="text-center">
                Verificamos cuidadosamente la identidad y antecendentes de nuestros transportadores
                y usuarios
              </p>
            </div>
            <div className="flex flex-col  w-60  h-48  gap-2 justify-between">
              <Image src={escudo} alt="protected" className="h-28 w-28 flex self-center"></Image>
              <p className="text-center">Nuestro boton de emergencia esta disponible 24 horas</p>
            </div>
            <div className="flex flex-col  w-60 gap-2  h-48 justify-between">
              <Image src={planet} alt="sos" className="h-32 w-32 flex self-center"></Image>
              <p className="text-center">
                Viajando con nuestros aliados contribuyes al cuidado del medio ambiente
              </p>
            </div>
            <div className="flex flex-col  w-60  gap-2  h-48 justify-between">
              <Image src={contract} alt="sos" className="h-28 w-28 flex self-center"></Image>
              <p className="text-center">Nuestras politicas</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
