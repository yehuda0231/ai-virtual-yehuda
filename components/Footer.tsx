"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-80 w-80 bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 bg-purple-600/20 blur-[180px]" />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* BRAND */}
        <div className="relative">
          <h3 className="text-3xl font-extrabold text-white tracking-tight">
            Yehuda<span className="text-cyan-400">AI</span>
          </h3>

          <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-purple-500" />

          <p className="mt-5 text-gray-400 leading-relaxed">
            Membangun pengalaman digital modern berbasis
            <span className="text-cyan-400 font-medium"> Artificial Intelligence</span>,
            data, dan teknologi masa depan dengan presisi.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Navigasi
          </h4>

          <ul className="mt-6 space-y-3 text-gray-400">
            {[
              { name: "Beranda", href: "/" },
              { name: "Sertifikat", href: "/certificates" },
              { name: "Proyek", href: "/projects" },
              { name: "Chatbot AI", href: "/ai" },
              { name: "Kontak", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative inline-block
                             hover:text-white transition
                             after:absolute after:left-0 after:-bottom-1
                             after:h-[1px] after:w-0
                             after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500
                             hover:after:w-full after:transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-widest uppercase">
            Terhubung
          </h4>

          <div className="mt-6 flex items-center gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/yehuda-yura-a0694b2b5",
                icon: <Linkedin size={18} />,
              },
              {
                href: "https://www.instagram.com/yehudayura_?igsh=MWF2NWgwbGZ2amlzYQ==",
                icon: <Instagram size={18} />,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                className="group relative p-3 rounded-xl
                           border border-white/15 text-gray-300
                           hover:text-white hover:border-cyan-400/60
                           transition-all duration-300"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                             bg-gradient-to-br from-cyan-500/30 to-purple-600/30
                             blur-xl transition-opacity"
                />
                <span className="relative">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* COPYRIGHT */}
      <div className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yehuda Yura —
        <span className="text-cyan-400"> AI Engineer</span>
      </div>
    </footer>
  );
}
