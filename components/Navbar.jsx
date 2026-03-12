"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const scrollTo = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [open]);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50" ref={navRef}>
      <div className="max-w-6xl mx-auto bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl px-6">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollTo("#home")}
            className="font-heading text-lg font-bold tracking-tight text-zinc-50 hover:text-cyan-500 transition-colors duration-200 cursor-pointer"
          >
            Sumo.
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body text-zinc-400 hover:text-zinc-50 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 -mr-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-400 hover:text-zinc-50 transition-colors duration-200 cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-zinc-800 pt-4 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/50 transition-colors duration-200 text-left px-3 py-2.5 rounded-lg cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
