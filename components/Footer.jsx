"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Let's Talk</h2>
          <p className="text-xl text-slate-400 mb-8">{data.contactSubHeading}</p>
          
          <a 
            href={`mailto:${data.contactEmail}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 text-white font-bold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25"
          >
            <Mail className="w-5 h-5" />
            {data.contactEmail}
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {data.social.map((socialLink, index) => (
            <motion.a
              key={index}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all"
            >
              <img src={socialLink.img} alt="social icon" className="w-5 h-5 filter invert opacity-70" />
            </motion.a>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sumanth Dodda. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-brand-500 mx-1">❤</span> by <a href="https://www.sumododda.me/" className="text-slate-300 hover:text-brand-500 transition-colors">Sumo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
