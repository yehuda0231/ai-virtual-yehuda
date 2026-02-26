"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Zap,
  Terminal,
  Globe
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030708] overflow-hidden border-t border-white/5 pt-20">
      
      {/* --- 1. DYNAMIC BACKGROUND GLOW & GRID --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid tipis konsisten dengan Hero & About */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e903_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e903_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="absolute -bottom-24 left-1/4 h-[500px] w-[500px] bg-cyan-500/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute -bottom-24 right-1/4 h-[500px] w-[500px] bg-purple-600/10 blur-[180px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
          
          {/* --- BRAND SECTION (Col 5) --- */}
          <div className="md:col-span-5 space-y-10">
            <div className="group inline-block">
              <div className="flex items-center gap-3 mb-2">
                <Terminal size={20} className="text-cyan-500" />
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase">
                  YEHUDA<span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-700">AI</span>
                </h3>
              </div>
              <div className="h-1 w-12 group-hover:w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-700 rounded-full" />
            </div>
            
            <p className="text-zinc-400 text-xl leading-relaxed max-w-sm font-light">
              Membangun arsitektur cerdas masa depan melalui perpaduan 
              <span className="text-white font-medium italic"> Big Data</span> dan 
              <span className="text-cyan-400 font-medium"> Deep Learning</span>.
            </p>

            {/* --- SYSTEM IDENTITY CARD --- */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex-1 min-w-[160px] p-5 rounded-[2rem] bg-zinc-900/20 border border-white/5 backdrop-blur-md group hover:border-cyan-500/40 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:scale-110 transition-transform">
                        <Cpu size={18} className="text-cyan-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-bold">Neural Core</span>
                </div>
                <p className="text-sm text-white font-black font-mono tracking-tighter">V3.5.0_LATEST</p>
              </div>

              <div className="flex-1 min-w-[160px] p-5 rounded-[2rem] bg-zinc-900/20 border border-white/5 backdrop-blur-md group hover:border-purple-500/40 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg group-hover:scale-110 transition-transform">
                        <ShieldCheck size={18} className="text-purple-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-bold">Enc. Protocol</span>
                </div>
                <p className="text-sm text-white font-black font-mono tracking-tighter">AES_256_ACTIVE</p>
              </div>
            </div>
          </div>

          {/* --- NAVIGATION (Col 3) --- */}
          <div className="md:col-span-3 lg:ml-auto">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full animate-pulse" />
              Main_Directory
            </h4>
            <ul className="space-y-5">
              {[
                { name: "Beranda", href: "/" },
                { name: "Sertifikat", href: "/certificates" },
                { name: "Proyek", href: "/projects" },
                { name: "AI Assistant", href: "/ai" },
                { name: "Pendidikan", href: "/education" },
                { name: "Pengalaman", href: "/pengalaman" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-all duration-300 flex items-center gap-3 group text-sm font-bold uppercase tracking-widest"
                  >
                    <div className="h-[2px] w-0 bg-cyan-500 group-hover:w-6 transition-all duration-500" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- SOCIALS (Col 4) --- */}
          <div className="md:col-span-4 lg:pl-16">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-purple-500 rounded-full animate-pulse" />
              Social_Hub
            </h4>
            
            <div className="flex flex-wrap gap-4">
              {[
                { 
                  icon: <Linkedin size={22} />, 
                  href: "https://www.linkedin.com/in/yehuda-yura-a0694b2b5",
                  color: "hover:text-blue-400"
                },
                { 
                  icon: <Instagram size={22} />, 
                  href: "https://www.instagram.com/yehudayura_",
                  color: "hover:text-pink-400"
                },
                { 
                    icon: <Github size={22} />, 
                    href: "https://github.com",
                    color: "hover:text-white"
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative h-14 w-14 flex items-center justify-center rounded-2xl border border-white/5 bg-zinc-900/40 text-zinc-500 ${social.color} hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-500 group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Status Bot Panel */}
            <div className="mt-12 p-6 rounded-[2.5rem] bg-zinc-950 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-cyan-500/20 transition-all duration-700">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter leading-none">Global Server</span>
                    <span className="text-xs font-mono text-cyan-400 font-black tracking-widest">STABLE_CONNECTED</span>
                  </div>
                </div>
                <Globe size={18} className="text-zinc-800 group-hover:text-cyan-500 group-hover:rotate-[360deg] transition-all duration-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-zinc-500 text-[11px] font-mono tracking-[0.4em] uppercase">
              © {currentYear} • Crafting Intelligence
            </p>
            <p className="text-white text-[12px] font-black uppercase tracking-[0.2em]">
              Yehuda <span className="text-cyan-500">Yura</span> — AI Engineer
            </p>
          </div>
          
          <div className="flex gap-10 text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">
            {["Protocol", "Network", "Security"].map((text) => (
                <span key={text} className="relative group cursor-pointer hover:text-white transition-colors duration-500">
                    {text}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-500" />
                </span>
            ))}
          </div>
        </div>
      </div>

      {/* Neural Pulse Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse" />
    </footer>
  );
}