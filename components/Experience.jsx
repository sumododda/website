"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeIn } from "../lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...useFadeIn()} className="mb-14">
          <p className="font-mono text-sm text-zinc-500 mb-3 tracking-wider">
            {"// experience"}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-50">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-zinc-800 ml-2">
          {data.experience.map((job, index) => (
            <motion.div
              key={index}
              {...useFadeIn(index * 0.08)}
              className="relative pl-8 pb-14 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-zinc-950" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                <h3 className="font-heading text-lg font-semibold text-zinc-50">
                  {job.title}
                </h3>
                <span className="text-zinc-600 hidden sm:inline">/</span>
                <span className="font-body text-sm text-zinc-400">
                  {job.company}
                </span>
              </div>

              <p className="font-mono text-xs text-zinc-500 mb-4 tracking-wider">
                {job.date}
              </p>

              <ul className="space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start font-body text-sm text-zinc-400 leading-relaxed"
                  >
                    <span className="mr-3 text-zinc-600 mt-0.5 flex-shrink-0 select-none">
                      &mdash;
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
