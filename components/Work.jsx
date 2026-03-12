"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeIn } from "../lib/motion";
import { ExternalLink, Star } from "lucide-react";

const langColors = {
  Python: "#3572A5",
  Shell: "#89e051",
  Go: "#00ADD8",
  JavaScript: "#f1e05a",
};

export default function Work() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...useFadeIn()} className="mb-14">
          <p className="font-mono text-sm text-zinc-500 mb-3 tracking-wider">
            {"// projects"}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-50">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              {...useFadeIn(index * 0.08)}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-lg font-semibold text-zinc-50 group-hover:text-cyan-500 transition-colors duration-200">
                  {project.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-cyan-500 transition-colors duration-200 flex-shrink-0 mt-1" />
              </div>

              <p className="font-body text-sm text-zinc-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: langColors[project.language] || "#ccc",
                    }}
                  />
                  {project.language}
                </span>

                {project.stars > 0 && (
                  <span className="flex items-center gap-1 text-xs font-mono text-zinc-500">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
