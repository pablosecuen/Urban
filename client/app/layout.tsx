import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar/NavBar";
import logo from "../assets/imagenes/UrbanLogo.png";
import Image, { StaticImageData } from "next/image";
import Login from "@component/components/Login/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urban",
  description: "Solucion en tranportes a tu alcance ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-full sm:flex-row">
          <div className="h-full border-2 flex justify-center align-center items-center sm:h-full">
            <Image
              src={logo as StaticImageData}
              alt="logo"
              className="w-full aspect-ratio-square"
            />
          </div>
          <div className="h-full border-2 sm:h-full">
            <Login />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
