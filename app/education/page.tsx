"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    school: "Politeknik Negeri Manado",
    degree: "D4 Teknik Informatika",
    period: "2023 - Sekarang",
    location: "Manado, Indonesia",
    desc: "Fokus pada pengembangan software, Artificial Intelligence, dan networking untuk persiapan karir sebagai AI Engineer Serta Memiliki Pengetahuan Dalam Web Development.",
    status: "Active"
  },
  {
    school: "SMK Prisma Pioneer Manado",
    degree: "Teknik Komputer & Jaringan",
    period: "2020 - 2023",
    location: "Manado, Indonesia",
    desc: "Mempelajari dasar-dasar infrastruktur jaringan, perakitan hardware, dan administrasi server sistem operasi.",
    status: "Completed"
  },
];

export default function EducationPage() {
  return (
    // Ubah pt-32 (yang terlalu jauh) menjadi pt-20 atau pt-24
<main className="min-h-screen pt-20 pb-20 px-6 max-w-4xl mx-auto bg-black overflow-hidden">
      {/* Background Decor - Biar makin AI look */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header Section dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles size={12} className="animate-pulse" />
            Academic Path
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white flex items-center gap-4">
            <GraduationCap className="text-cyan-400" size={40} />
            PENDIDIKAN
          </h1>
          <p className="text-zinc-500 max-w-lg leading-relaxed">
            Menelusuri jejak akademis dan pengembangan skill teknis saya dalam dunia teknologi informasi.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative ml-4">
          {/* Garis Tengah Timeline dengan Gradasi */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-zinc-800 to-transparent" />

          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-10"
              >
                {/* Dot decorator dengan animasi Ring */}
                <div className="absolute -left-[9px] top-2">
                   <div className="w-4 h-4 bg-black border-2 border-cyan-500 rounded-full z-10 relative" />
                   <div className="absolute inset-0 w-4 h-4 bg-cyan-500 rounded-full animate-ping opacity-20" />
                </div>
                
                {/* Card Konten High-Tech */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur" />
                  
                  <div className="relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {edu.school}
                          </h3>
                          {edu.status === "Active" && (
                            <span className="px-2 py-0.5 text-[10px] bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded-md font-mono animate-pulse">
                              NOW
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-400 font-medium text-lg italic">{edu.degree}</p>
                      </div>
                      
                      {/* Badge Tahun ala Terminal */}
                      <div className="flex items-center gap-3 text-[11px] text-cyan-500 font-mono bg-cyan-500/5 border border-cyan-500/10 px-4 py-2 rounded-lg group-hover:bg-cyan-500/10 transition-all">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-[1.8] mb-6 border-l-2 border-zinc-800 pl-4 italic">
                      "{edu.desc}"
                    </p>

                    {/* Footer Card */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest font-bold">
                        <MapPin size={14} className="text-cyan-500/50" />
                        {edu.location}
                      </div>
                      <div className="h-[1px] flex-grow mx-4 bg-zinc-900" />
                      <div className="text-[10px] font-mono text-zinc-600">
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}