"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeInOnLoad } from "../lib/motion";
import { ArrowDown } from "lucide-react";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";

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

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <Card className="w-full min-h-[500px] bg-black/[0.96] border-zinc-800 relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col md:flex-row h-full min-h-[500px]">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <motion.p
                {...useFadeInOnLoad(0)}
                className="font-mono text-sm text-zinc-500 mb-4 tracking-wider"
              >
                {"// hello world"}
              </motion.p>

              <motion.h1
                {...useFadeInOnLoad(0.08)}
                className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-3 tracking-tight leading-tight"
              >
                {data.name}
              </motion.h1>

              <motion.p
                {...useFadeInOnLoad(0.14)}
                className="font-heading text-xl md:text-2xl font-semibold text-cyan-500 mb-4"
              >
                {data.role}
              </motion.p>

              <motion.p
                {...useFadeInOnLoad(0.2)}
                className="font-body text-base text-neutral-300 max-w-lg mb-8"
              >
                {data.tagline}
              </motion.p>

              <motion.div
                {...useFadeInOnLoad(0.26)}
                className="flex flex-col sm:flex-row items-start gap-4"
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

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
