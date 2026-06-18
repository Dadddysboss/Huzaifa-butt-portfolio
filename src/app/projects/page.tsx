import React from 'react';
import { HUZAIFA_IDENTITY, REPOSITORY_MATRIX } from '@/data/portfolio';
import SystemFooter from '@/components/SystemFooter';

export default function ProjectsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "M. Huzaifa Butt — Engineered Productions",
    "description": "A curated collection of SoftwareApplication assets built with Next.js, TypeScript, and Tailwind CSS.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": REPOSITORY_MATRIX.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": project.title,
          "description": project.summary,
          "applicationCategory": project.category,
          "operatingSystem": "Web",
          "technicalHighlight": project.technicalHighlights,
          "author": {
            "@type": "Person",
            "name": HUZAIFA_IDENTITY.name
          }
        }
      }))
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-between p-4 bg-[#eef5fa] relative overflow-hidden font-sans antialiased text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#41c0f2_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

      <div className="w-full bg-white border border-blue-100/80 rounded-[32px] p-5 shadow-2xl shadow-sky-200/20 flex flex-col gap-6 relative z-10 mb-6">
        
        <div className="bg-slate-50/90 border border-slate-100/80 rounded-2xl p-3 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="M. Huzaifa Butt" className="h-8 w-auto" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#41C0F2] uppercase hidden sm:inline">
              // PRODUCTION REPOSITORY DECK
            </span>
          </div>
          <nav className="flex items-center gap-5 text-[10px] font-mono font-bold tracking-widest text-slate-500">
            <a href="/" className="hover:text-[#41C0F2] transition-colors">ABOUT</a>
            <a href="/projects" className="text-slate-900 font-extrabold border-b border-slate-900 pb-0.5">PROJECTS</a>
            <a href="/contact" className="hover:text-[#41C0F2] transition-colors">CONTACT</a>
          </nav>
        </div>

        <div className="bg-slate-50/60 border border-slate-100 p-6 rounded-2xl">
          <span className="text-[9px] font-mono font-black bg-[#41C0F2]/10 text-[#41C0F2] border border-[#41C0F2]/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
            Sovereign Architecture Core
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1 uppercase">ENGINEERED PRODUCTIONS</h1>
          <p className="text-xs text-slate-500 font-medium max-w-2xl mt-2 leading-relaxed">
            Review the structural execution protocols of specialized, static web platforms designed for lightning fast performance indexes and absolute index crawl sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPOSITORY_MATRIX.map((project) => (
            <div key={project.id} className="bg-white border border-slate-100 rounded-[24px] p-4 shadow-sm flex flex-col justify-between hover:border-[#41C0F2]/40 transition-all group">
              <div>
                <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden mb-4">
                  <img 
                    src={HUZAIFA_IDENTITY.heroLocalAsset} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[8px] font-mono font-bold bg-white/95 text-slate-900 px-2 py-0.5 rounded shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-base font-black text-slate-900 tracking-tight uppercase group-hover:text-[#41C0F2] transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-[10px] font-mono font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {project.metricValue}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technicalHighlights.map((tech, index) => (
                    <span key={index} className="text-[9px] font-mono font-bold bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                <span className="text-[9px] font-mono font-bold text-slate-400">INDEXED MODULE</span>
                <a 
                  href={`/projects/${project.slug}`}
                  className="bg-slate-900 hover:bg-[#41C0F2] text-white font-mono font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                >
                  Inspect Nodes →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SystemFooter />
    </main>
  );
}
