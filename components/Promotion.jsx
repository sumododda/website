"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";

export default function Promotion() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-brand-500/10 border border-brand-500/20 rounded-3xl p-10 md:p-16 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {data.promotionHeading}
          </h2>
          <p className="text-lg md:text-xl text-brand-100 leading-relaxed font-medium">
            "{data.promotionPara}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
