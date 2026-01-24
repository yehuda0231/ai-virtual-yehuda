"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* PROFIL */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Yehuda Yura"
            width={40}
            height={40}
            className="rounded-full object-cover border border-white/20"
            priority
          />
          <span className="text-white font-semibold text-sm sm:text-base">
            Yehuda Yura
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/projects" className="hover:text-white">Project</Link>
          <Link href="/certificates" className="hover:text-white">Sertifikat</Link>
          <Link href="/ai" className="text-blue-400 hover:text-blue-300">
            AI Virtual
          </Link>
          <Link href="/contact" className="hover:text-white">Kontak</Link>
        </div>

        {/* BUTTON MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
  <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
    <div className="flex flex-col px-6 py-4 gap-3 text-sm">
      
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="py-2 px-3 rounded-lg hover:bg-white/10 transition"
      >
        Home
      </Link>

      <Link
        href="/projects"
        onClick={() => setOpen(false)}
        className="py-2 px-3 rounded-lg hover:bg-white/10 transition"
      >
        Project
      </Link>

      <Link
        href="/certificates"
        onClick={() => setOpen(false)}
        className="py-2 px-3 rounded-lg hover:bg-white/10 transition"
      >
        Sertifikat
      </Link>

      <Link
        href="/ai"
        onClick={() => setOpen(false)}
        className="py-2 px-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition"
      >
        AI Virtual
      </Link>

      <Link
        href="/contact"
        onClick={() => setOpen(false)}
        className="py-2 px-3 rounded-lg hover:bg-white/10 transition"
      >
        Kontak
      </Link>

    </div>
  </div>
)}

    </nav>
  );
}
