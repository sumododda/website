"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {data.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:block md:col-span-1 text-right pt-2">
                  <span className="text-sm font-medium text-slate-400">{job.date}</span>
                </div>
                
                <div className="md:col-span-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-[2.1rem] top-2 w-4 h-4 rounded-full bg-brand-500 border-4 border-slate-950 z-10 hidden md:block"></div>
                  
                  {/* Timeline line */}
                  <div className="absolute -left-[1.8rem] top-6 bottom-[-3rem] w-0.5 bg-slate-800 hidden md:block"></div>
                  
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col md:hidden mb-4">
                      <span className="text-sm font-medium text-brand-500 mb-1">{job.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-brand-500 md:hidden" />
                      {job.title}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-400 mb-6">{job.company}</h4>
                    
                    <ul className="space-y-3">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <span className="mr-3 text-brand-500 mt-1.5">•</span>
                          <span className="leading-relaxed text-sm md:text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
