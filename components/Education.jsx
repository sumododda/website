"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeIn } from "../lib/motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...useFadeIn()} className="mb-14">
          <p className="font-mono text-sm text-zinc-500 mb-3 tracking-wider">
            {"// education"}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-50">
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              {...useFadeIn(index * 0.08)}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <GraduationCap className="w-5 h-5 text-cyan-500 mb-4" />
              <h3 className="font-heading text-lg font-semibold text-zinc-50 mb-1">
                {edu.degree}
              </h3>
              <p className="font-body text-sm text-zinc-400 mb-4">
                {edu.school}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <span className="font-mono text-xs text-zinc-500 tracking-wider">
                  {edu.years}
                </span>
                <span className="font-mono text-xs text-cyan-500">
                  GPA {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
