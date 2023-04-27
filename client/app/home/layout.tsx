import NavBar from "@component/components/NavBar/NavBar";
import Footer from "@component/components/Footer/Footer";
import logo from "../../assets/imagenes/UrbanIsoLogo.png";
import Image, { StaticImageData } from "next/image";
import Menu from "@component/components/Menu/Menu";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="flex-col container mx-auto lg:flex lg:flex-row lg:justify-center py-20">
        <div className="w-1/2 border-2 flex flex-col gap-8 justify-center items-center">
          <Image src={logo as StaticImageData} alt="logo" className="w-96" />
          <Menu />
        </div>
        <div className="w-1/2  flex justify-center items-center">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
