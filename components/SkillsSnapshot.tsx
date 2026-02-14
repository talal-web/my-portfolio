"use client";

export default function SkillsSnapshot() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    Tools: ["React Query", "MongoDB", "Git & GitHub", "Prisma (learning)"],
  };

  return (
    <section className="py-16 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Skills Snapshot</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="flex-1 bg-gray-900 rounded-2xl p-6 shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left border-b border-gray-700 pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {list.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 hover:bg-purple-600 transition-colors duration-300 rounded-full px-4 py-2 text-sm cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
