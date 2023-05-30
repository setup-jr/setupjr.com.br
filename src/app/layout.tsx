import "lib/styles/global.css";

import { Jost } from "next/font/google";
import { Metadata } from "next";

import Footer from "lib/components/Footer";
import Navbar from "lib/components/Navbar";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Setup JR",
  description: "Setup JR official website",
  viewport: "width=device-width, initial-scale=1",
  creator: "Setup JR",
  authors: [
    { name: "Henrique GC" },
    { name: "Gustavo Denobi" },
    { name: "Gabriel Lima" },
    { name: "Felipe Ferreira" },
    { name: "Leonardo Faria" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}

      <body className={`md:overflow-visible ${jost.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
