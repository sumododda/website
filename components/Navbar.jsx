"use client";
import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("#home")}
            className="text-xl font-bold tracking-tighter text-white hover:text-brand-500 transition-colors"
          >
            Sumo.
          </button>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo("#experience")} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollTo("#about")} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("#work")} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Projects
            </button>
          </div>
          <button 
            onClick={() => scrollTo("#contact")}
            className="px-4 py-2 rounded-full bg-slate-800 text-sm font-medium text-white hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
