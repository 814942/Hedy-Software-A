import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio Ghibli App",
  description: "Created by Pablo Garay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alegreya.className}>{children}</body>
    </html>
  );
}
