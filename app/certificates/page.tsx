import certificates from "@/data/certificates";
import Image from "next/image";

export default function CertificatesPage() {
  return (
    <section className="relative min-h-screen pt-20 pb-32 px-6 bg-black overflow-hidden">
      
      {/* --- 1. AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 2. HEADER SECTION --- */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono">
              Achievements & Credentials
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            Sertifikat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Pembelajaran
            </span>
          </h1>
          
          <p className="mt-6 text-gray-400 text-lg leading-relaxed font-light">
            Kumpulan validasi kompetensi dalam bidang <span className="text-white">AI Engineering</span>, 
            <span className="text-white"> Big Data</span>, dan pengembangan sistem cerdas yang saya kumpulkan 
            selama perjalanan profesional saya.
          </p>
        </div>

        {/* --- 3. CERTIFICATE GRID --- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((c, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Preview Area */}
              <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden">
                {/* Overlay Blur saat Hover */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Badge Kursus (Hiasan) */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                    Verified
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Decorative Line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <h3 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                  {c.title}
                </h3>
                
                <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3 font-light">
                  {c.desc}
                </p>

                {/* Footer Card */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
                    Issued: {new Date().getFullYear()}
                  </span>
                  
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Glow Border Effect (Bottom) */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}