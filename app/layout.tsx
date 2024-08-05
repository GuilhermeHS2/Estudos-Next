import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de Paises",
  description: "Lista de paises do mundo na Olimpiadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
            <Image width={38} height={38} src="/mundo.svg" alt="logo da aplicacao globo" />
              <h1 className="font-bold text-2xl"> Lista de paises </h1>
              
            </section>
          </nav>
          {children}
          </main>
      </body>
    </html>
  );
}
