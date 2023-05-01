import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urban",
  description: "Solucion en tranportes a tu alcance ",
};

// holiwis

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full w-full flex-col items-center justify-center sm:flex-row ">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
