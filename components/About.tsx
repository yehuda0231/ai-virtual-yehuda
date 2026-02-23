"use client";

import Image from "next/image";
import { User, Cpu, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-24 lg:py-40 w-full bg-[#030708] overflow-hidden">
      
      {/* --- 1. SEAMLESS BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 -left-20 h-[600px] w-[600px] bg-cyan-500/10 blur-[130px] rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 h-[600px] w-[600px] bg-blue-600/10 blur-[130px] rounded-full opacity-40 animate-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- 2. TEXT CONTENT --- */}
          {/* Di mobile, elemen ini akan muncul pertama secara alami */}
          <div className="flex flex-col">
            
            {/* Cyber Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl mb-8 shadow-[0_0_15px_rgba(6,182,212,0.1)] w-fit">
              <User size={14} className="text-cyan-400" />
              <div className="h-3 w-[1px] bg-cyan-500/30" />
              <span className="text-cyan-100 text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
                Profile.Identity
              </span>
            </div>

            {/* Title */}
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
              Tentang <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-600 drop-shadow-[0_5px_15px_rgba(6,182,212,0.3)]">
                Saya
              </span>
            </h2>

            {/* Description & Cards */}
            <div className="space-y-8">
              <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed font-light max-w-xl">
                Saya seorang <span className="text-white font-semibold italic border-b-2 border-cyan-500/50">AI Engineer</span> yang
                terobsesi membangun <span className="text-cyan-400 font-bold">Sistem Otonom</span> dan infrastruktur data skala besar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-colors group/card">
                  <Cpu size={20} className="text-cyan-400 mb-3 group-hover/card:scale-110 transition-transform" />
                  <h4 className="text-white font-bold mb-1">Modern AI</h4>
                  <p className="text-zinc-500 text-sm">LLMs, Computer Vision, & Deep Learning.</p>
                </div>
                <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-colors group/card">
                  <ShieldCheck size={20} className="text-blue-400 mb-3 group-hover/card:scale-110 transition-transform" />
                  <h4 className="text-white font-bold mb-1">Big Data</h4>
                  <p className="text-zinc-500 text-sm">Skalabilitas data & efisiensi arsitektur.</p>
                </div>
              </div>

              {/* Status Bar */}
              <div className="pt-8 flex items-center gap-6">
                <div className="flex gap-1">
                  <span className="h-1 w-4 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]" />
                  <span className="h-1 w-2 rounded-full bg-cyan-800" />
                  <span className="h-1 w-2 rounded-full bg-cyan-800" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/40 via-transparent to-transparent" />
                <span className="text-[9px] font-mono text-cyan-500/70 uppercase tracking-[0.5em] animate-pulse">
                  System Core: Stable
                </span>
              </div>
            </div>
          </div>

          {/* --- 3. ADVANCED IMAGE CONTENT --- */}
          {/* Di mobile, ini akan otomatis turun ke bawah teks karena urutan HTML */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative group">
              
              {/* Spinning Decorative Rings */}
              <div className="absolute -inset-10 border border-cyan-500/5 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-10 border-t-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse] scale-90" />
              
              {/* Photo Container */}
              <div className="relative w-[280px] h-[380px] md:w-[400px] md:h-[550px] rounded-[3rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 bg-zinc-950 z-20 transition-all duration-700 group-hover:border-cyan-500/50 shadow-2xl">
                
                <Image
                  src="/about-portrait.jpeg" 
                  alt="Yehuda Yura Portrait"
                  fill
                  className="object-cover object-top grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-in-out"
                  priority
                />

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#030708] via-transparent to-transparent opacity-90" />
                
                {/* Scanline Mask */}
                <div className="absolute inset-0 z-30 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

                {/* ACTIVE SCANNING LINE */}
                <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
                  <div className="w-full h-20 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent absolute -top-[100%] group-hover:animate-[scan_3s_ease-in-out_infinite]" />
                </div>

                {/* HUD DATA MARKS */}
                <div className="absolute bottom-10 left-10 z-50 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="text-[10px] font-mono text-cyan-400 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-cyan-500/30">
                    <p>SYSTEM.SCAN: COMPLETED</p>
                    <p>TYPE: HUMAN_ENGINEER</p>
                    <p className="mt-1 text-white font-bold">STATUS: AUTHORIZED</p>
                  </div>
                </div>
              </div>

              {/* Corner HUD Brackets */}
              <div className="absolute -inset-4 pointer-events-none z-30">
                <div className="absolute top-0 left-0 h-16 w-16 border-t-4 border-l-4 border-cyan-500/40 rounded-tl-3xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-blue-500/40 rounded-br-3xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
      `}</style>
    </section>
  );
}