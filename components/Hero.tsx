"use client";

import Image from "next/image";
import Link from "next/link";
import { Cpu, ArrowRight, FileText, Sparkles, Zap, Brain, Bot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#030708] overflow-hidden -mt-[80px] pt-[80px]">
      
      {/* --- 1. COMPACT NEURAL BACKGROUND --- */}
      <div className="absolute inset-0 top-0 z-0 pointer-events-none">
        {/* Top Blue Fade (menyatu dari navbar ke grid) */}
<div
  className="
    absolute
    top-0
    left-0
    right-0
    h-48
    bg-gradient-to-b
    from-[#030708]
    via-cyan-500/10
    to-transparent
  "
/>
        {/* Grid System yang lebih rapat agar tidak kosong */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Central Hub Glow - Mengisi kekosongan di tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] bg-cyan-500/10 blur-[120px] rounded-full opacity-60" />
        
      
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* --- 2. TEXT CONTENT --- */}
        <div className="text-center lg:text-left order-1 relative">
          
          {/* Badge Status - Konsisten Cyan */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[10px] text-cyan-100 uppercase tracking-[0.4em] font-mono font-bold">
              Yehuda Yura : Portofolio
            </span>
            <Sparkles size={12} className="text-cyan-400 ml-1" />
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-500">
              BIG DATA
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light mb-10">
            Saya <span className="text-white font-bold tracking-tight">Yehuda Yura</span>. Mengubah data mentah menjadi solusi 
            <span className="text-cyan-400 font-medium"> AI adaptif </span> 
            melalui pemrosesan Big Data skala global.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 relative z-30 mb-12">
            <Link
              href="/projects"
              className="group px-8 py-4 rounded-xl bg-cyan-500 text-black font-black transition-all duration-300 hover:bg-cyan-400 active:scale-95 text-center flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              Telusuri Jejak <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/YehudaYura-cv.pdf"
              download
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FileText size={18} className="text-zinc-400" />
              Download CV
            </a>
          </div>

          {/* --- REVISI: COMPACT AI CARD (Sesuai gambar kamu) --- */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/ai" className="group flex items-center gap-5 p-4 pr-10 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500">
              <div className="h-14 w-14 rounded-xl bg-[#0a1a1f] border border-cyan-500/30 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                <Bot className="text-cyan-400 group-hover:scale-110 transition-transform" size={28} />
              </div>
              <div className="text-left">
                <h3 className="text-white text-base font-bold tracking-tight">AI Virtual Ready</h3>
                <p className="text-zinc-500 text-xs mt-0.5">Tanya apa saja tentang pengalaman saya.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* --- 3. IMAGE CONTENT WITH HUD --- */}
        <div className="relative flex justify-center items-center order-2">
          
          {/* HUD Rings - Lebih subtle tapi mengisi ruang */}
          <div className="absolute w-[120%] h-[120%] border border-cyan-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[105%] h-[105%] border-t border-b border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Main Photo Container */}
          <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] lg:w-[400px] lg:h-[540px]">
            
            {/* HUD Elements */}
            <div className="absolute -inset-4 pointer-events-none z-30">
              <div className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-cyan-500/40 rounded-br-3xl" />
            </div>

            {/* Image Wrapper */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 z-20">
              <Image
                src="/yehuda.jpeg"
                alt="Yehuda Yura Portrait"
                fill
                className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030708] via-transparent to-transparent opacity-80" />
            </div>

            {/* Latency Tag */}
            <div className="absolute -right-4 bottom-10 z-40 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-cyan-500/30 shadow-2xl animate-bounce hidden sm:flex items-center gap-3">
              <Zap size={14} className="text-cyan-400" />
              <span className="text-[10px] font-mono text-white font-bold uppercase tracking-tighter">Latency: 0.02ms</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}