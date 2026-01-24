import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-white mb-4">
        Tentang Saya
      </h2>

      {/* DESC */}
      <p className="text-gray-400 leading-relaxed">
        Saya seorang AI Engineer yang berfokus pada pengembangan sistem cerdas
        dan analisis Big Data untuk menghasilkan solusi berbasis data yang
        efisien dan bernilai.
      </p>

      {/* PORTRAIT IMAGE */}
      <div className="mt-10 flex justify-center">
        <div className="relative w-56 h-80 sm:w-64 sm:h-96 rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20 blur-2xl" />

          {/* Image */}
          <Image
            src="/about-portrait.jpeg" // ganti sesuai nama file
            alt="Yehuda Yura Portrait"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
