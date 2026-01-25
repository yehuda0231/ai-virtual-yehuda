import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className="relative py-28 max-w-6xl mx-auto px-6 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-1/4 h-96 w-96 bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-16 right-1/4 h-96 w-96 bg-purple-600/20 blur-[180px]" />
      </div>

      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Skill <span className="text-cyan-400">&</span> Teknologi
        </h2>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Kumpulan skill dan teknologi yang saya pelajari dan kembangkan
          dalam perjalanan membangun sistem
          <span className="text-cyan-400 font-medium"> AI</span> dan
          <span className="text-purple-400 font-medium"> Big Data</span>.
        </p>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="group relative rounded-3xl p-6
                       bg-white/5 border border-white/10 backdrop-blur-xl
                       hover:border-cyan-400/40
                       hover:scale-[1.03]
                       transition-all duration-300"
          >
            {/* Neon Glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                         bg-gradient-to-br from-cyan-500/30 to-purple-600/30
                         blur-2xl transition-opacity duration-300"
            />

            {/* AI Circuit Overlay */}
            <div
              className="absolute inset-0 rounded-3xl opacity-30
                         bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.15),transparent)]"
            />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white tracking-wide">
                {skill}
              </h3>

              <div className="mt-3 h-[2px] w-12
                              bg-gradient-to-r from-cyan-400 to-purple-500" />

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">

              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
