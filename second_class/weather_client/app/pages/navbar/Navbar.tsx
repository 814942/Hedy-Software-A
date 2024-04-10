"use client"

import Link from "next/link";

import TextField from "@/components/molecules/TextField";
import { SunMedium } from "lucide-react";

interface INavbarProps {
  onSearch: (c: string) => void
}

const Navbar = ({ onSearch }: INavbarProps) => {
  return (
    <>
      <header className="border-b-2 z-50 shadow-[0px_0px_0px_1px_rgba(255,253,249,0.06),0px_1px_1px_-0.5px_rgba(255,253,249,0.06),0px_3px_3px_-1.5px_rgba(255,253,249,0.06),_0px_6px_6px_-3px_rgba(255,253,249,0.06),0px_12px_12px_-6px_rgba(255,253,249,0.06),0px_24px_24px_-12px_rgba(255,253,249,0.06)]">
        <div className="w-11/12 m-auto flex justify-between items-center max-w-5xl">
          <Link href={"/"}>
            <div className="flex items-center bg-white-100 p-2 gap-2 m-4 rounded-3xl text-blue-light hover:shadow-[4.0px_8.0px_8.0px_rgba(255,253,249,0.38)]">
              <SunMedium size={40} />
              <p className="text-xl">Weather from the Earth</p>
            </div>
          </Link>
          <div>
            <TextField onChange={(city: string) => onSearch(city)} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;