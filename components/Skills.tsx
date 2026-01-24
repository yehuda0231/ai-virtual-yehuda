import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-72 w-72 bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight">
          Skill & Teknologi
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Skill dan teknologi yang sedang saya pelajari dan kembangkan dalam
          perjalanan menjadi AI Engineer.
        </p>
      </div>

      {/* Skill Pills */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="group relative px-6 py-3 rounded-full
                       bg-white/5 border border-white/10 backdrop-blur
                       hover:bg-white/10 hover:border-white/20
                       hover:scale-105 transition-all duration-300"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                         bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-md
                         transition-opacity duration-300"
            />

            <span className="relative font-medium tracking-wide">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
