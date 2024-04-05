import type { Metadata } from "next";
import { Petrona } from "next/font/google";
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
    <html lang="en">
      <body className={petrona.className}>{children}</body>
    </html>
  );
}
