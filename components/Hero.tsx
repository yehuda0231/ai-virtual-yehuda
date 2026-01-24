import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen pt-28 flex items-center justify-center px-6 text-center bg-black overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-96 w-96 bg-blue-600/25 blur-[160px]" />
          <div className="absolute bottom-24 right-20 h-80 w-80 bg-purple-600/20 blur-[160px]" />
        </div>

        <div className="max-w-2xl relative">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            AI Engineer <span className="text-blue-500">&</span> Big Data
          </h1>

          {/* DESC */}
          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Seorang AI Engineer yang berfokus pada pemrosesan Big Data, analisis
            data, dan pengembangan sistem cerdas.
          </p>

          {/* IMAGE PROFILE */}
          <div className="mt-12 flex justify-center">
            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden
                         border border-white/15 bg-black shadow-2xl"
            >
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
                         border border-white/15 bg-black/80 backdrop-blur
                         hover:border-white/30 transition-all duration-300"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                           bg-gradient-to-r from-blue-600/30 to-cyan-600/30 blur-2xl
                           transition-opacity duration-300"
              />

              {/* AI Preview Image */}
              <div className="relative h-48 rounded-t-3xl overflow-hidden border-b border-white/10">
                <img
                  src="/ai-preview.png"
                  alt="AI Assistant Preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-5 text-left">
                <h3 className="text-lg font-semibold text-white">
                  🤖 AI Virtual Assistant
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Tanyakan apa saja tentang saya, skill, project, dan pengalaman
                  melalui AI Assistant interaktif.
                </p>

                <div className="mt-4 text-sm text-blue-400 font-medium">
                  Coba sekarang →
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
          <div className="absolute top-10 left-1/3 h-72 w-72 bg-blue-600/20 blur-[140px]" />
          <div className="absolute bottom-10 right-1/4 h-72 w-72 bg-purple-600/20 blur-[140px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Project
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Saya mengerjakan berbagai project sebagai bagian dari proses belajar
            dan eksplorasi di bidang AI, Big Data, dan pengembangan aplikasi.
            Project-project ini mencerminkan pemahaman, eksperimen, serta
            kemampuan teknis yang terus saya kembangkan.
          </p>

          {/* Button */}
          <div className="mt-10">
            <a
              href="/projects"
              className="inline-block px-10 py-4 rounded-2xl
                         border border-white/20 text-white font-medium
                         hover:border-white/40 hover:bg-white/5
                         transition-all duration-300"
            >
              Lihat Semua Project →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
