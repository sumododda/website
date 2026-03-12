"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { useFadeIn, useScaleIn } from "../lib/motion";
import { Mail, Github, Linkedin, BookOpen, FlaskConical, Instagram, Shield } from "lucide-react";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  TryHackMe: Shield,
  Medium: BookOpen,
  ResearchGate: FlaskConical,
  Instagram: Instagram,
};

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div {...useFadeIn()} className="mb-16">
          <p className="font-mono text-sm text-zinc-500 mb-3 tracking-wider">
            {"// contact"}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
            Let&apos;s Talk
          </h2>
          <p className="font-body text-lg text-zinc-400 mb-8 max-w-md mx-auto">
            Have a project in mind or want to collaborate?
          </p>

          <a
            href={`mailto:${data.contactEmail}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500 text-zinc-950 font-semibold font-body hover:bg-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            {data.contactEmail}
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {data.social.map((socialLink, index) => {
            const Icon = socialIcons[socialLink.name] || Github;
            return (
              <motion.a
                key={socialLink.name}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                {...useScaleIn(index * 0.04)}
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-cyan-500 hover:border-zinc-600 transition-all duration-200 cursor-pointer"
                aria-label={socialLink.name}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </div>

        <div className="pt-8 border-t border-zinc-900 text-zinc-600 text-sm font-mono tracking-wider">
          <p>&copy; {new Date().getFullYear()} Sumanth Dodda</p>
        </div>
      </div>
    </footer>
  );
}
