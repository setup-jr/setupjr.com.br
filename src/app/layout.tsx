import "lib/styles/global.css";

import Footer from "lib/components/Footer";
import Navbar from "lib/components/Navbar";
// import { Inter } from "next/font/google";
import { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Setup JR",
  description: "Setup JR official website",
  viewport: "width=device-width, initial-scale=1",
  creator: "Setup JR",
  authors: [{ name: "Henrique GC" }],
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

      <body className="md:overflow-visible">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
