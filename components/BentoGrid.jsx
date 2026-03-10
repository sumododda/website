"use client";
import data from "../data/sitedata";
import { motion } from "framer-motion";
import { Shield, BrainCircuit, Terminal, Server, Award, GraduationCap } from "lucide-react";

export default function BentoGrid() {
  const getIcon = (index) => {
    const icons = [Server, BrainCircuit, Terminal, Shield, Award, GraduationCap];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6 text-brand-500 mb-4" />;
  };

  return (
    <section id="about" className="py-24 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About & Skills</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Security Engineer & AI Specialist</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>{data.aboutParaOne}</p>
              <p>{data.aboutParaTwo}</p>
              <p className="font-medium text-brand-500">{data.aboutParaThree}</p>
            </div>
          </motion.div>

          {/* Image/Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-1 bg-slate-900 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
            <img 
              src={data.aboutImage} 
              alt="About" 
              className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Skills Map */}
          {data.skills.map((skill, index) => {
            const [title, desc] = skill.para.split(': ');
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:bg-slate-800/80 transition-all hover:-translate-y-1"
              >
                {getIcon(index)}
                <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
