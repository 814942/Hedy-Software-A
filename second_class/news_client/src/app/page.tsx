import Image from "next/image";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import LandingPage from "./pages/landing/LandingPages";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white-100">
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}
