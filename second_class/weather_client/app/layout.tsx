import type { Metadata } from "next";
import { Petrona } from "next/font/google";
import "./globals.css";

const petrona = Petrona({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
