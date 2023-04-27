import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urban",
  description: "Solucion en tranportes a tu alcance ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-full sm:flex-row w-full justify-center items-center ">{children}</main>
      </body>
    </html>
  );
}
