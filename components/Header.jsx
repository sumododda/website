"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeInOnLoad } from "../lib/motion";
import { ArrowDown } from "lucide-react";

export default function Header() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Subtle background grid + glow */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          {...useFadeInOnLoad(0)}
          className="font-mono text-sm text-zinc-500 mb-6 tracking-wider"
        >
          {"// hello world"}
        </motion.p>

        <motion.h1
          {...useFadeInOnLoad(0.08)}
          className="font-heading text-5xl md:text-7xl font-bold text-zinc-50 mb-4 tracking-tight leading-tight"
        >
          {data.name}
        </motion.h1>

        <motion.p
          {...useFadeInOnLoad(0.14)}
          className="font-heading text-xl md:text-2xl font-semibold text-cyan-500 mb-6"
        >
          {data.role}
        </motion.p>

        <motion.p
          {...useFadeInOnLoad(0.2)}
          className="font-body text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-12"
        >
          {data.tagline}
        </motion.p>

        <motion.div
          {...useFadeInOnLoad(0.26)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500 text-zinc-950 font-semibold font-body hover:bg-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
          </button>

          <a
            href={`mailto:${data.contactEmail}`}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-zinc-700 text-zinc-300 font-semibold font-body hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200 cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
