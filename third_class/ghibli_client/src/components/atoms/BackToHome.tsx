import Link from "next/link";
import React from "react";

export default function BackToHome() {
  return (
    <div id="button-back" className="flex items-center justify-end mb-4">
      <Link className="p-2 border border-primary rounded-xl text-white-100 bg-primary hover:bg-secondary shadow-[0_3px_10px_rgb(0,0,0,0.2)]" href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
