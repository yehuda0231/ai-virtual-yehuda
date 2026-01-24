import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="pt-28 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Project</h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Kumpulan project yang saya kerjakan sebagai bagian dari proses belajar,
          eksplorasi teknologi, dan pengembangan skill di bidang AI, data, dan
          pengembangan aplikasi.
        </p>
      </div>

      {/* Grid Project */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl overflow-hidden
                       bg-neutral-900/60 border border-white/10
                       hover:border-white/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover
                           group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
