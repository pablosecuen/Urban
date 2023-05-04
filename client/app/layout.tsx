import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urban",
  description: "Solucion en tranportes a tu alcance ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto flex h-full max-w-screen-2xl flex-col items-center justify-center sm:flex-row ">
          <Toaster position="bottom-right" expand={true} richColors className="absolute w-auto" />

          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
