import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center px-6 text-center">
      <div className="max-w-2xl">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          AI Engineer <span className="text-blue-500">&</span> Big Data
        </h1>

        {/* DESC */}
        <p className="mt-4 text-gray-400">
        Seorang AI Engineer yang berfokus pada pemrosesan Big Data, analisis data.
        </p>

        {/* IMAGE PROFILE */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-black">
            <Image
              src="/foto.jpeg"
              alt="Yehuda Yura"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/ai"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl"
          >
            Coba AI Virtual
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-white/20 hover:border-white/40 transition rounded-xl"
          >
            Lihat Project
          </a>
        </div>

      </div>
    </section>
  );
}
