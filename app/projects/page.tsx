import projects from "@/data/projects";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen pt-20 pb-32 px-6 bg-black overflow-hidden">
      
      {/* --- 1. AMBIENT TECH BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 2. HEADER SECTION --- */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <Sparkles size={12} className="text-cyan-400" />
            <span className="text-[10px] text-cyan-400 uppercase tracking-[0.3em] font-mono font-bold">
              Project Repository v3.0
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Eksplorasi mendalam dalam membangun sistem cerdas, 
            pengolahan data masif, dan solusi <span className="text-white font-medium">Full-stack AI</span> yang adaptif.
          </p>
        </div>

        {/* --- 3. PROJECT GRID --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-[2.5rem] bg-zinc-900/30 border border-white/5 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Media Preview */}
              <div className="relative h-64 overflow-hidden">
                {/* Overlay saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10" />
                
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Tech Tags Floating */}
                <div className="absolute bottom-4 left-6 z-20 flex gap-2">
                   <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-white/70 font-mono">
                     Next.js
                   </span>
                   <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-[10px] text-cyan-400 font-mono">
                     AI Model
                   </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Animated Line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                  {p.desc}
                </p>

                {/* Footer Card with Links */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-4">
                     <button className="text-gray-500 hover:text-white transition-colors">
                       <Code2 size={18} />
                     </button>
                     <button className="text-gray-500 hover:text-white transition-colors">
                       <ExternalLink size={18} />
                     </button>
                  </div>
                  
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-cyan-500/50 transition-colors">
                    ID: 00{i+1}_BUILD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}