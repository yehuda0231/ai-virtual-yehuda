import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-20 max-w-4xl mx-auto px-6 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/3 h-72 w-72 bg-cyan-500/20 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 bg-indigo-600/20 blur-[160px]" />
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
        Tentang <span className="text-cyan-400">Saya</span>
      </h2>

      {/* DESC */}
      <p className="text-gray-400 leading-relaxed max-w-2xl">
        Saya seorang <span className="text-white font-medium">AI Engineer</span> yang
        berfokus pada pengembangan sistem cerdas dan analisis
        <span className="text-cyan-400 font-medium"> Big Data</span> untuk
        menghasilkan solusi berbasis data yang efisien, adaptif,
        dan bernilai tinggi.
      </p>

      {/* PORTRAIT IMAGE */}
      <div className="mt-12 flex justify-center">
        <div
          className="group relative w-56 h-80 sm:w-64 sm:h-96 rounded-3xl overflow-hidden
                     border border-white/15 bg-black
                     shadow-[0_0_120px_rgba(34,211,238,0.25)]
                     hover:scale-[1.02] transition-transform duration-500"
        >
          {/* AI Glow Layer */}
          <div
            className="absolute inset-0 opacity-60
                       bg-gradient-to-b from-cyan-500/20 via-transparent to-indigo-600/20"
          />

          {/* AI Scan Effect (static-safe) */}
          <div
            className="absolute inset-0 pointer-events-none
                       bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          />

          {/* Image */}
          <Image
            src="/about-portrait.jpeg" // ganti sesuai nama file
            alt="Yehuda Yura Portrait"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* HUD Corner Lines */}
          <span className="absolute top-3 left-3 h-4 w-4 border-t border-l border-cyan-400/60" />
          <span className="absolute top-3 right-3 h-4 w-4 border-t border-r border-cyan-400/60" />
          <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-cyan-400/60" />
          <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-cyan-400/60" />
        </div>
      </div>

      {/* AI STATUS */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:0ms]" />
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:200ms]" />
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:400ms]" />
          <span className="ml-2 tracking-wide">
            Profile
          </span>
        </div>
      </div>
    </section>
  );
}
