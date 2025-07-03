"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-primary">Tabungan Umroh</div>
      <div className="space-x-4 hidden md:flex">
        <Link href="/" className={pathname === "/" ? "text-blue-500" : ""}>Beranda</Link>
        <Link href="/tentang" className={pathname === "/tentang" ? "text-blue-500" : ""}>Tentang</Link>
        <Link href="/program-tabungan" className={pathname === "/program-tabungan" ? "text-blue-500" : ""}>Program</Link>
        <Link href="/cara-kerja" className={pathname === "/cara-kerja" ? "text-blue-500" : ""}>Cara Kerja</Link>
        <Link href="/faq" className={pathname === "/faq" ? "text-blue-500" : ""}>FAQ</Link>
        <Link href="/kontak" className={pathname === "/kontak" ? "text-blue-500" : ""}>Kontak</Link>
      </div>
      <div>
        <Link href="/login" className="bg-blue-500 text-white px-4 py-1 rounded">Login</Link>
      </div>
    </nav>
  );
};
