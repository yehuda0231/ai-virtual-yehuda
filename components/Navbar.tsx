"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// SAYA TAMBAHKAN GraduationCap DI SINI:
import { Menu, X, Cpu, LayoutGrid, Award, Mail, Home, Radio, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/", icon: <Home size={14} /> },
    { name: "Project", href: "/projects", icon: <LayoutGrid size={14} /> },
    { name: "Sertifikat", href: "/certificates", icon: <Award size={14} /> },
    { name: "AI Assistant", href: "/ai", icon: <Cpu size={14} />, special: true },
    { name: "Pendidikan", href: "/education", icon: <GraduationCap size={14} /> },
    { name: "Kontak", href: "/contact", icon: <Mail size={14} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-black/80 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- BRAND / LOGO --- */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-sm group-hover:bg-cyan-500/40 transition-all" />
            <Image
              src="/profile.jpg"
              alt="Yehuda Yura"
              fill
              className="rounded-xl object-cover border border-cyan-500/30 group-hover:border-cyan-400 transition-all z-10"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-base tracking-tighter uppercase leading-none">
              YEHUDA<span className="text-cyan-400">YURA</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[9px] text-cyan-500/70 font-mono tracking-[0.2em] uppercase font-bold">AI Engineer</span>
            </div>
          </div>
        </Link>

        {/* --- MENU DESKTOP --- */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-zinc-900/50 border border-white/10 rounded-2xl backdrop-blur-xl">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                item.special 
                  ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-cyan-400" 
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        {/* --- SYSTEM STATUS --- */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 border-l border-white/10 ml-4">
            <Radio size={14} className="text-cyan-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">Node: Stable</span>
        </div>

        {/* --- BUTTON MOBILE --- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 transition-all active:scale-90"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* --- MENU MOBILE --- */}
      <div 
        className={`fixed inset-x-0 top-[76px] p-6 md:hidden transition-all duration-500 transform ${
          open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all border ${
                  item.special 
                    ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]" 
                    : "bg-white/5 border-transparent text-zinc-400 hover:text-white hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em]">
                  {item.icon}
                  {item.name}
                </div>
                {item.special && <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />}
              </Link>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center gap-2">
             <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping" />
                <span className="text-[9px] font-mono text-cyan-500/60 uppercase tracking-[0.3em]">Neural Link Established</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}