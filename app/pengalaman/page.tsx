"use client";

import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experiences = [

    {
      role: "Data Scientist (Project-Based Internship)",
      company: "Home Credit Indonesia x Rakamin Academy",
      period: "Januari 2026 – Februari 2026",
      location: "Manado, Indonesia (Remote - Jakarta Based)",
      desc: "Berhasil menyelesaikan program magang berbasis proyek dengan skor akhir 89.3 (Excellent), berfokus pada analisis risiko kredit nasabah menggunakan Machine Learning.",
      details: [
        "Mengolah ±300.000 data demografi dan finansial nasabah untuk analisis risiko.",
        "Melakukan EDA mendalam untuk identifikasi pola kredit dan pembersihan data.",
        "Membangun model klasifikasi menggunakan Logistic Regression dan Random Forest.",
        "Mencapai skor ROC AUC > 0.7 dalam memprediksi akurasi risiko kredit.",
        "Menyajikan insight data dan rekomendasi bisnis untuk mitigasi risiko kepada stakeholder."
      ],
      tech: ["Machine Learning", "Python", "Business Acumen", "Random Forest", "Big Data Analysis"]
    },
    {
      role: "IT Operator (Internship)",
      company: "Kementerian Komunikasi dan Informatika Kota Manado",
      period: "Maret 2022 – Mei 2022",
      location: "Manado, Indonesia",
      desc: "Melakukan magang selama 3 bulan di Dinas Kominfo Manado",
      details: [
        "Berperan sebagai staf IT, membantu instalasi, konfigurasi, dan pemeliharaan sistem di lingkungan kantor.",
        "Terlibat dalam pembuatan konten digital, editing, dan dokumentasi untuk kebutuhan multimedia.",
        "Memperoleh sertifikat resmi sebagai bukti kompetensi dan kontribusi selama magang."
      ],
      tech: ["System Maintenance", "Multimedia", "Digital Content"]
    }
  ];

  return (
    <section className="relative min-h-screen pt-20 pb-20 px-6 overflow-hidden bg-black">
      
      {/* --- 1. NEURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- 2. HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <Briefcase size={14} className="text-cyan-400" />
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono">Professional Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            Peng<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">alaman</span>
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
            Rekam jejak profesional saya dalam menangani infrastruktur IT dan kontribusi teknologi di instansi pemerintahan.
          </p>
        </motion.div>

        {/* --- 3. EXPERIENCE CARDS --- */}
        <div className="grid gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative"
            >
              {/* Decorative Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-10 group-hover:opacity-30 transition duration-500 blur" />
              
              <div className="relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-500 font-medium">
                      <Terminal size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
                      <Calendar size={14} className="text-cyan-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6 italic">
                  "{exp.desc}"
                </p>

                {/* Task List */}
                <div className="space-y-4 mb-8">
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-cyan-500 mt-1 shrink-0" />
                      <p className="text-zinc-300 text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack / Skill Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-md bg-cyan-500/5 border border-cyan-500/10 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Verification Badge */}
                <div className="absolute bottom-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                   <Award className="text-cyan-500" size={40} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- 4. FOOTER INFO --- */}
        <p className="text-center mt-16 text-[10px] font-mono text-zinc-700 tracking-[0.4em] uppercase">
          System Records: Experience_Log_Loaded
        </p>
      </div>
    </section>
  );
}