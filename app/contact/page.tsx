"use client";

import { Mail, Instagram, Linkedin, Send, MessageSquare, MapPin, Copy, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      label: "Email",
      value: "yehuda.ai.bot@gmail.com",
      icon: <Mail size={20} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      href: "mailto:yehuda.ai.bot@gmail.com"
    },
    {
      label: "Instagram",
      value: "@yehudayura_",
      icon: <Instagram size={20} />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      href: "https://instagram.com/yehudayura_"
    },
    {
      label: "LinkedIn",
      value: "Yehuda Yura",
      icon: <Linkedin size={20} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      href: "https://linkedin.com/in/yehuda-yura-a0694b2b5"
    }
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-20 px-6 overflow-hidden bg-black">
      
      {/* --- 1. NEURAL BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* --- 2. HEADER --- */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <MessageSquare size={14} className="text-cyan-400" />
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Berkolaborasi</span>
          </h1>
          
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Tertarik berdiskusi tentang <span className="text-white">AI</span>, 
            <span className="text-white"> Big Data</span>, atau sekadar ingin menyapa? 
            Saya selalu terbuka untuk ide-ide baru.
          </p>
        </div>

        {/* --- 3. CONTACT CARDS --- */}
        <div className="grid gap-4">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className={`h-12 w-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{item.value}</p>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-zinc-600 group-hover:text-white transition-colors">
                <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">CONNECT</span>
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>

        {/* --- 4. STATUS INDICATOR --- */}
        <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-black border border-white/5 text-center relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-pulse" />
          
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
               <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse" />
               <MapPin className="text-green-500 relative z-10" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-tight">Lokasi Saat Ini</h3>
              <p className="text-zinc-500 text-sm mt-1">Indonesia — Tersedia untuk Remote & Lokal</p>
            </div>
            
            <button className="mt-4 flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-cyan-400 transition-all active:scale-95">
              <Send size={16} />
              Kirim Pesan Cepat
            </button>
          </div>
        </div>

        {/* --- FOOTER INFO --- */}
        <p className="text-center mt-10 text-[10px] font-mono text-zinc-700 tracking-[0.4em] uppercase">
          Yehuda Yura Connectivity: Established
        </p>

      </div>
    </section>
  );
}