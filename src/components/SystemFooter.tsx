import React from 'react';
import { HUZAIFA_IDENTITY } from '@/data/portfolio';

export default function SystemFooter() {
  return (
    <footer className="w-full bg-white border border-blue-100/80 rounded-[28px] p-5 shadow-xl shadow-sky-200/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="M. Huzaifa Butt" className="h-6 w-auto" />
        <p className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} {HUZAIFA_IDENTITY.name} // SYSTEM SECURED
        </p>
      </div>

      <nav className="flex items-center gap-6 text-[10px] font-mono font-bold tracking-widest text-slate-500">
        <a href="/" className="hover:text-[#41C0F2] transition-colors uppercase">ABOUT</a>
        <a href="/projects" className="hover:text-[#41C0F2] transition-colors uppercase">PROJECTS</a>
        <a href="/contact" className="hover:text-[#41C0F2] transition-colors uppercase">CONTACT</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#41C0F2] hover:underline uppercase">CORE_GIT</a>
      </nav>

      <div className="flex items-center gap-2 text-[9px] font-mono font-bold text-emerald-500 bg-emerald-50/60 border border-emerald-100 px-2.5 py-1 rounded-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
        <span>GATEWAY ORIGIN: {HUZAIFA_IDENTITY.location}</span>
      </div>
    </footer>
  );
}
