import Image from "next/image";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import Homepage from "./home/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}
