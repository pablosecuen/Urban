"use client";
import NavBar from "@component/components/NavBar/NavBar";
import Footer from "@component/components/Footer/Footer";
import logo from "../../assets/imagenes/UrbanIsoLogo.png";
import Image from "next/image";

import Menu from "@component/components/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "@component/components/NavBar/NavBarMobile";

export default function Home({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <div>
      {isMobile ? <NavBarMobile /> : <NavBar />}

      <div className="mx-auto flex h-[92vh] flex-col items-center justify-center py-10 lg:container lg:flex-row lg:pb-20">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Image
            src={logo}
            alt="logo"
            className="  mt-10  w-24 lg:mt-10 lg:h-52 lg:w-56 2xl:h-72 2xl:w-80"
          />
          <Menu />
        </div>
        <div className="flex h-full w-full items-center justify-center">{children}</div>
      </div>
      <div className="mt-48 lg:mt-0">
        <Footer />
      </div>
    </div>
  );
}
