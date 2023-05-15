import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban",
  description: "Solucion en tranportes a tu alcance ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-screen-4xl mx-auto flex h-full flex-col items-center justify-center sm:flex-row ">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
