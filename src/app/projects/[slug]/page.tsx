import React from 'react';
import { notFound } from 'next/navigation';
import { HUZAIFA_IDENTITY, REPOSITORY_MATRIX } from '@/data/portfolio';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Instruct Next.js to prerender these exact paths at compile time for zero backend load times
export async function generateStaticParams() {
  return REPOSITORY_MATRIX.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = REPOSITORY_MATRIX.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#eef5fa]">
      <div className="w-full max-w-[1400px] bg-white rounded-[32px] border border-blue-100 p-6 shadow-2xl shadow-sky-200/50 flex flex-col gap-6">
        
        {/* Top Floating Control Bar */}
        <div className="flex justify-between items-center bg-slate-50 rounded-2xl p-3 border border-slate-100/80">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="M. Huzaifa Butt" className="h-10 w-auto" />
            <span className="text-xs font-mono tracking-widest text-slate-400 hidden sm:inline">
              SYSTEM ANALYSIS // CASE STUDY
            </span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold tracking-wider text-slate-600">
            <a href="/" className="hover:text-[#41C0F2] transition-colors">HOME</a>
            <a href="/about" className="hover:text-[#41C0F2] transition-colors">ABOUT</a>
            <a href="/projects" className="text-[#41C0F2] border-b-2 border-[#41C0F2] pb-1">PROJECTS</a>
            <a href="/contact" className="hover:text-[#41C0F2] transition-colors">CONTACT</a>
          </nav>
        </div>

        {/* System Node Details Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Case Analysis Pane (8/12 Width) */}
          <section className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[24px] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold bg-[#41C0F2]/10 text-[#41C0F2] px-2.5 py-1 rounded border border-[#41C0F2]/20">
                  SYSTEM MOD: {project.id}
                </span>
                <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-600 px-2.5 py-1 rounded">
                  {project.metricValue}
                </span>
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2 uppercase">
                {project.title}
              </h1>
              <p className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-6">
                {project.category}
              </p>

              <div className="space-y-6 text-slate-700 font-medium text-xs leading-relaxed">
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <h3 className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Architectural Abstract</h3>
                  <p className="text-slate-600 font-medium">{project.summary}</p>
                </div>

                <div>
                  <h3 className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2">Technical Implementation Matrix</h3>
                  <p>
                    By building this framework inside local static arrays, the node operates at absolute processing speeds. Component trees are decoupled cleanly, which ensures the core thread is completely safe from third-party parsing lag.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200/60 flex gap-4">
              <a href="/projects" className="bg-white border border-slate-200 hover:border-slate-300 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-700 transition-colors">
                ← RETURN TO REGISTRY
              </a>
            </div>
          </section>

          {/* Side Specifications Track (4/12 Width) */}
          <section className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-5 flex-grow">
              <h3 className="text-xs font-mono font-black text-slate-400 tracking-wider uppercase mb-4">COMPILED DEPENDENCIES</h3>
              <div className="flex flex-col gap-2">
                {project.technicalHighlights.map((tech, i) => (
                  <div key={i} className="bg-white border border-slate-200/60 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#41C0F2]"></div>
                    <span className="text-xs font-bold text-slate-800 font-mono">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center">
              <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">CRAWL INTELLIGENCE STATUS</span>
              <span className="text-xs font-bold text-emerald-500 font-mono">100% OPERATIONAL // OPTIMIZED</span>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
