import React from 'react';
import { HUZAIFA_IDENTITY } from '@/data/portfolio';

export default function AboutPage() {
  // Hardcoded engineering categories for zero-CMS compilation
  const skillCategories = [
    {
      title: "CORE ENGINES",
      items: ["Next.js 15 (App Router)", "React", "TypeScript", "Node.js Core Layers"]
    },
    {
      title: "STYLING & PRESENTATION",
      items: ["Tailwind CSS Compiled Utilities", "Sleek Glassmorphism Modules", "Responsive Interface Grids"]
    },
    {
      title: "PERFORMANCE & LINK INFRASTRUCTURE",
      items: ["Programmatic Search Frameworks", "Advanced Backlink Data Architecture", "Core Web Vitals Engine Tuning"]
    }
  ];

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#eef5fa]">
      {/* Outer Console Shell */}
      <div className="w-full max-w-[1400px] bg-white rounded-[32px] border border-blue-100 p-6 shadow-2xl shadow-sky-200/50 flex flex-col gap-6">
        
        {/* Top Floating Control Bar */}
        <div className="flex justify-between items-center bg-slate-50 rounded-2xl p-3 border border-slate-100/80">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="M. Huzaifa Butt" className="h-10 w-auto" />
            <span className="text-xs font-mono tracking-widest text-slate-400 hidden sm:inline">
              {HUZAIFA_IDENTITY.status}
            </span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold tracking-wider text-slate-600">
            <a href="/" className="hover:text-[#41C0F2] transition-colors">HOME</a>
            <a href="/about" className="text-[#41C0F2] border-b-2 border-[#41C0F2] pb-1">ABOUT</a>
            <a href="/projects" className="hover:text-[#41C0F2] transition-colors">PROJECTS</a>
            <a href="/contact" className="hover:text-[#41C0F2] transition-colors">CONTACT</a>
          </nav>
        </div>

        {/* 2-Column Specs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Identity Dossier (5/12 Width) */}
          <section className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-[24px] p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold bg-[#41C0F2]/10 text-[#41C0F2] px-3 py-1.5 rounded-full border border-[#41C0F2]/20 inline-block mb-6">
                IDENTITY PROFILE // ARCHITECT
              </span>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-2">
                {HUZAIFA_IDENTITY.name}
              </h1>
              <p className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-6">
                {HUZAIFA_IDENTITY.role}
              </p>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-medium">
                <p>
                  Operating at the high-performance tier of digital asset construction, I focus strictly on pure system logic and immaculate user interfaces. 
                </p>
                <p>
                  By standardizing development on modern compiling architectures and local data arrays, I completely remove slow overhead from the stack. Every framework element is streamlined for processing speed, clean indexing behavior, and seamless UX scalability.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200/60 pt-4 mt-8 flex justify-between text-center">
              <div>
                <span className="block text-[9px] font-mono text-slate-400 uppercase font-bold">Location</span>
                <span className="text-xs font-bold text-slate-700">Lahore / Pattoki</span>
              </div>
              <div>
                <span className="block text-[9px] font-mono text-slate-400 uppercase font-bold">System Status</span>
                <span className="text-xs font-bold text-emerald-500">Fully Deployed</span>
              </div>
            </div>
          </section>

          {/* Right Column: Stack Specifications Matrix (7/12 Width) */}
          <section className="lg:col-span-7 flex flex-col gap-4 justify-between">
            <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-6 flex-grow">
              <h2 className="text-lg font-black text-slate-900 tracking-tight mb-4">ENGINE MATRIX OVERVIEW</h2>
              
              <div className="space-y-6">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-4 last:border-0 last:pb-0">
                    <h3 className="text-[11px] font-mono font-bold text-slate-400 mb-3 tracking-widest">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIdx) => (
                        <span 
                          key={itemIdx} 
                          className="bg-white border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Metrics Banner */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400 font-bold tracking-wider">STATIC PIPELINE COMPILATION</span>
              <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">
                100% SECURE // NO DATABASE DEPENDENCIES
              </span>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
