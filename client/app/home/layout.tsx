import NavBar from "@component/components/NavBar/NavBar";
import Footer from "@component/components/Footer/Footer";
import logo from "../../assets/imagenes/UrbanIsoLogo.png";
import Image, { StaticImageData } from "next/image";

import Menu from "@component/components/Menu/Menu";
import Link from "next/link";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="flex-col container flex lg:flex-row justify-center mx-auto items-center lg:pb-20">
        <div className="lg:w-1/2 w-full flex flex-col gap-8 justify-center  items-center">
          <Image src={logo as StaticImageData} alt="logo" className="lg:w-96 w-24" />
          <Menu />
        </div>
        <div className="lg:w-1/2 w-full  flex justify-center items-center">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
