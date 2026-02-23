"use client";

import skills from "@/data/skills";
import { Terminal, Cpu, Database, BrainCircuit, Code2 } from "lucide-react";

export default function Skills() {
  return (
    <section className="relative py-24 lg:py-40 w-full bg-[#030708] overflow-hidden">
      
      {/* --- 1. SEAMLESS BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid konsisten dengan Hero & About */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-purple-600/5 blur-[140px] rounded-full opacity-50 animate-pulse" />
        <div className="absolute -top-24 -right-24 h-96 w-96 bg-cyan-500/10 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- 2. HEADER SECTION --- */}
        <div className="relative mb-24 text-center">
          {/* Badge Tech */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl mb-8">
            <Terminal size={14} className="text-cyan-400" />
            <div className="h-3 w-[1px] bg-cyan-500/30" />
            <span className="text-[10px] text-cyan-100/70 uppercase tracking-[0.4em] font-mono font-bold">
              Tech.Stack Stack v2.5
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600"> & </span> Teknologi
          </h2>
          
          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
            Skill Yang Saya Pelajari
            <span className="text-cyan-400 font-medium"> Big Data</span> dan membangun arsitektur 
            <span className="text-purple-400 font-medium italic"> AI</span> yang adaptif.
          </p>
        </div>

        {/* --- 3. SKILL GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-[2.5rem] p-10 bg-zinc-900/20 border border-white/5 backdrop-blur-md
                         hover:bg-zinc-900/40 hover:border-cyan-500/40 hover:-translate-y-3
                         transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center text-center overflow-hidden shadow-2xl"
            >
              {/* Top Animated Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              
              {/* Background Icon Glow */}
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors" />

              {/* Icon Visual */}
              <div className="relative mb-8">
                <div className="h-20 w-20 rounded-3xl bg-[#0a1a1f] border border-white/10 flex items-center justify-center 
                               group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/20">
                  <div className="relative">
                    {/* Logika Ikon Berdasarkan Keyword Skill */}
                    {skill.toLowerCase().includes('python') ? <Code2 className="text-cyan-400" size={32} /> : 
                     skill.toLowerCase().includes('data') ? <Database className="text-blue-400" size={32} /> : 
                     skill.toLowerCase().includes('ai') ? <BrainCircuit className="text-purple-400" size={32} /> : 
                     <Cpu className="text-zinc-400 group-hover:text-cyan-400 transition-colors" size={32} />}
                  </div>
                </div>
                {/* Aura di belakang ikon */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white tracking-tight group-hover:tracking-widest transition-all duration-500">
                  {skill}
                </h3>
                
                {/* Progress Visual */}
                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-1 w-3 rounded-full transition-all duration-700 delay-${i*100} 
                        ${i <= 3 ? "bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_cyan]" : "bg-zinc-800"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.4em] font-bold group-hover:text-cyan-500/70 transition-colors">
                    Stability: Optimal
                  </span>
                </div>
              </div>

              {/* Decorative HUD Details */}
              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-all">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" />
                  <div className="w-4 h-[1px] bg-cyan-500/50 self-center" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 4. BOTTOM DECORATION --- */}
        <div className="mt-20 flex justify-center">
          <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </div>
    </section>
  );
}