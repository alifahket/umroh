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

export default Navbar;

// File: components/CTA.tsx
"use client";

const CTA = () => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900 text-center p-6 rounded-xl mt-6">
      <h2 className="text-2xl font-semibold mb-2">Mulai Tabungan Emas Umroh Sekarang!</h2>
      <p className="mb-4">Gabung bersama ribuan jemaah menabung emas menuju Baitullah</p>
      <a
        href="/signup"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Daftar Sekarang
      </a>
    </div>
  );
};

export default CTA;

// Revisi: File app/layout.tsx
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
