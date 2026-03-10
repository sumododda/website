"use client";
import React from "react";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Header() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-brand-500 font-medium tracking-wide mb-4">
            Hi, I&apos;m {data.name} <span className="animate-pulse inline-block">👋</span>
          </h2>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {data.headerTagline.map((tag, i) => (
            <React.Fragment key={i}>
              <span className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-cyan-400" : ""}>
                {tag}
              </span>
              {i < data.headerTagline.length - 1 ? <br className="hidden md:block" /> : null}
              {" "}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.headerParagraph}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => scrollTo("#work")}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors w-full sm:w-auto justify-center"
          >
            View Work <ArrowRight className="w-5 h-5" />
          </button>
          
          <a
            href={`mailto:${data.contactEmail}`}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 border border-slate-700 transition-colors w-full sm:w-auto justify-center"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
