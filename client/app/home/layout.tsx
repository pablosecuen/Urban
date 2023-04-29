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

      <div className="container mx-auto flex h-[92vh] flex-col items-center justify-center py-10 lg:flex-row lg:pb-20">
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:w-1/2">
          <Image src={logo as StaticImageData} alt="logo" className="w-24 lg:w-96 " />
          <Menu />
        </div>
        <div className="flex w-full  items-center justify-center lg:w-1/2">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
