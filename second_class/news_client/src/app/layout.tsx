import type { Metadata } from "next";
import { Petrona } from "next/font/google";

import { NewsProvider } from "@/context/data.context";

import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";

import "./globals.css";

const petrona = Petrona({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News from the world",
  description: "Made by Pablo Garay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={petrona.className}>
        <NewsProvider>
          <Navbar />
            {children}
          <Footer />
        </NewsProvider>
      </body>
    </html>
  );
}
