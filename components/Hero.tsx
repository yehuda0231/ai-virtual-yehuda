import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] pt-2 flex items-start justify-center px-6 text-center bg-black overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-1/2 -translate-x-1/2
                          h-[28rem] w-[28rem] bg-cyan-500/20 blur-[200px]
                          animate-pulse" />
          <div className="absolute bottom-20 right-24
                          h-[24rem] w-[24rem] bg-indigo-600/20 blur-[200px]
                          animate-pulse" />
        </div>

        <div className="max-w-2xl relative">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight
                         transition-all duration-700">
            AI Engineer <span className="text-cyan-400"></span> Big Data
          </h1>

          {/* DESC */}
          <p className="mt-5 text-gray-400 text-lg leading-relaxed
                        transition-all duration-700">
            Saya <span className="text-white font-medium">Yehuda Yura</span>, seorang
            AI Engineer yang berfokus pada pemrosesan Big Data, analisis data,
            dan pengembangan sistem cerdas berbasis kecerdasan buatan.
          </p>

          {/* IMAGE PROFILE */}
          <div className="mt-12 flex justify-center">
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden
                         border border-white/15 bg-black
                         shadow-[0_0_100px_rgba(34,211,238,0.25)]
                         hover:scale-[1.03] transition-transform duration-500"
            >
              {/* Static Scan Overlay (SAFE) */}
              <div className="absolute inset-0 bg-gradient-to-b
                              from-transparent via-cyan-400/10 to-transparent
                              opacity-40" />

              <Image
                src="/foto.jpeg"
                alt="Yehuda Yura"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* AI ASSISTANT CARD */}
          <div className="mt-14 flex justify-center">
            <a
              href="/ai"
              className="group relative max-w-sm w-full rounded-3xl
                         border border-white/15 bg-black/80 backdrop-blur-xl
                         hover:border-cyan-400/50 transition-all duration-300
                         hover:scale-[1.02]"
            >
              {/* Neon Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                           bg-gradient-to-r from-cyan-500/40 to-blue-600/40
                           blur-2xl transition-opacity duration-300"
              />

              {/* AI Preview */}
              <div className="relative h-48 rounded-t-3xl overflow-hidden border-b border-white/10">
                <img
                  src="/ai-preview.png"
                  alt="AI Assistant Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-5 text-left">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  🤖 AI Virtual Assistant
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  AI interaktif untuk menjawab pertanyaan tentang profil, skill,
                  project, dan pengalaman saya secara otomatis.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400 font-medium">
  <span className="h-2 w-2 rounded-full bg-cyan-400
                   shadow-[0_0_10px_rgba(34,211,238,0.8)]
                   animate-pulse [animation-delay:0ms]" />
  <span className="h-2 w-2 rounded-full bg-cyan-400
                   shadow-[0_0_10px_rgba(34,211,238,0.8)]
                   animate-pulse [animation-delay:200ms]" />
  <span className="h-2 w-2 rounded-full bg-cyan-400
                   shadow-[0_0_10px_rgba(34,211,238,0.8)]
                   animate-pulse [animation-delay:400ms]" />
  <span className="ml-2">AI siap →</span>
</div>

              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECT RINGKAS ================= */}
      <section className="relative py-24 px-6 bg-black overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-12 left-1/4 h-72 w-72 bg-cyan-500/20 blur-[180px]" />
          <div className="absolute bottom-12 right-1/4 h-72 w-72 bg-indigo-600/20 blur-[180px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Project & Eksplorasi
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Project yang saya kerjakan sebagai bagian dari eksperimen,
            pembelajaran, dan eksplorasi teknologi AI dan Big Data.
          </p>

          {/* Button */}
          <div className="mt-10">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl
                         border border-white/20 text-white font-medium
                         hover:border-cyan-400/60 hover:bg-white/5
                         hover:scale-105 transition-all duration-300"
            >
              Lihat Semua Project
              <span className="text-cyan-400">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
