import NavBar from "@component/components/NavBar/NavBar";
import logo from "../../assets/imagenes/UrbanLogo.png";
import Image, { StaticImageData } from "next/image";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="w-full h-screen flex">
        <div className="w-1/2  flex flex-col">
          <div className="h-1/3 bg-red-500 flex justify-center">
            {" "}
            <Image src={logo as StaticImageData} alt="logo" className="w-1/3" />
          </div>
          <div className="h-2/3 bg-green-500 justify-center items-center flex">
            <div className="bg-blue w-2/3 h-2/3 gap-3 rounded-3xl flex flex-col justify-center items-center">
              <button className="bg-white w-1/2 text-black ">Reserva tu viaje</button>
              <button className="bg-white w-1/2  text-black ">Gestiona tus viajes</button>
              <button className="bg-white w-1/2  text-black ">Envío de paquetes</button>
              <button className="bg-white w-1/2  text-black ">Tengo una necesidad especial</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-cyan-500 flex justify-center items-center">{children}</div>
      </div>
      <footer></footer>
    </div>
  );
}
