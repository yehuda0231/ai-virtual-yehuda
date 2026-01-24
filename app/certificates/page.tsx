import certificates from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <section className="pt-28 px-6 max-w-7xl mx-auto bg-black">
      
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Sertifikat & Pembelajaran
        </h1>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Kumpulan sertifikat yang saya peroleh sebagai bagian dari proses
          pembelajaran, eksplorasi, dan pengembangan skill di bidang teknologi,
          AI,data dan juga pemahaman tentang teknologi aplikasi.
        </p>
      </div>

      {/* Grid Sertifikat */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certificates.map((c, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden
                       bg-neutral-900/60 border border-white/10
                       hover:border-white/25 transition-all duration-300"
          >
            {/* Image Wrapper */}
            <div
              className="relative w-full aspect-[4/3] bg-black
                         flex items-center justify-center overflow-hidden"
            >
              <img
                src={c.image}
                alt={c.title}
                className="max-h-full max-w-full object-contain
                           group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-white mb-1">
                {c.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
