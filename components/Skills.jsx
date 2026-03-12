"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeIn } from "../lib/motion";
import { Shield, BrainCircuit, Server, Terminal } from "lucide-react";

const iconMap = {
  Shield,
  BrainCircuit,
  Server,
  Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...useFadeIn()} className="mb-14">
          <p className="font-mono text-sm text-zinc-500 mb-3 tracking-wider">
            {"// skills"}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-50">
            Skills & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {data.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.title}
                {...useFadeIn(index * 0.08)}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors duration-200"
              >
                {Icon && (
                  <Icon className="w-5 h-5 text-cyan-500 mb-4" />
                )}
                <h3 className="font-heading text-sm font-semibold text-zinc-50 mb-2 uppercase tracking-wider">
                  {skill.title}
                </h3>
                <p className="font-body text-sm text-zinc-400 leading-relaxed">
                  {skill.items}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...useFadeIn(0.1)} className="flex flex-wrap gap-2">
          {data.certifications.map((cert) => (
            <span
              key={cert}
              className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-mono text-zinc-400 hover:border-zinc-600 hover:text-zinc-300 transition-colors duration-200"
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
