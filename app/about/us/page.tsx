"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav className="flex min-h-screen flex-col items-center justify-evenly p-24">
      About us
    </nav>
  );
}
