import React from "react";

import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="flex justify-center w-full">
      <Link
      className="p-2 m-4 border-2 border-solid rounded-2xl border-pink shadow-2xl hover:translate-y-px bg-secondary text-pink"
      href="/">
        Go back
      </Link>
    </div>
  );
}
