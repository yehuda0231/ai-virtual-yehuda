import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-6">Skill</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-white/5 rounded-xl text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
