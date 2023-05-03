import NavBar from "@component/components/NavBar/NavBar";
import Footer from "@component/components/Footer/Footer";
import logo from "../../assets/imagenes/UrbanIsoLogo.png";
import Image, { StaticImageData } from "next/image";

import Menu from "@component/components/Menu/Menu";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />

      <div className="mx-auto flex h-[92vh] flex-col items-center justify-center py-10 lg:container lg:flex-row lg:pb-20">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Image
            src={logo as StaticImageData}
            alt="logo"
            className="mt-48 w-24  lg:mt-0  lg:w-96"
          />
          <Menu />
        </div>

        <div className="flex w-full items-center justify-center">{children}</div>
      </div>
      <div className="mt-48 lg:mt-0">
        <Footer />
      </div>
    </div>
  );
}
