import certificates from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <section className="pt-28 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Sertifikat & Pembelajaran
        </h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Kumpulan sertifikat yang saya peroleh sebagai bagian dari proses
          pembelajaran dan pengembangan diri di bidang teknologi, AI, dan data.
        </p>
      </div>

      {/* Grid Sertifikat */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certificates.map((c) => (
          <div
            key={c}
            className="group rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10
                       hover:border-white/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={c}
                alt="Sertifikat"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Description */}
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-1">
                Sertifikat Pembelajaran
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sertifikat ini menunjukkan partisipasi dan pembelajaran saya
                dalam memahami konsep, tools, dan praktik dasar di bidang
                teknologi dan pengembangan skill.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
