import React from 'react';
import { FAQ_HOME_REPOSITORY } from '@/data/portfolio';
import SystemFooter from '@/components/SystemFooter';
import SovereignSEOContent from '@/components/SovereignSEOContent';
import SceneWrapper from '@/components/SceneWrapper';

export default function HomePage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "M. Huzaifa Butt - Systems Architect",
        "url": "http://localhost:3000",
        "description": "Sovereign web ecosystems, elite full-stack architectures, and high-velocity SEO engines."
      },
      {
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "M. Huzaifa Butt",
          "jobTitle": "Enterprise Systems Architect",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pattoki",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan"
          },
          "knowsAbout": ["Web Development", "Link Building", "SEO"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_HOME_REPOSITORY.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center p-2 sm:p-4 md:p-6 bg-[#eef5fa] relative overflow-x-hidden font-sans antialiased text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#41c0f2_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

      <header className="w-full bg-white border border-blue-100/80 rounded-2xl p-4 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 text-[#41C0F2] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 15,75 L 15,25 L 35,50 L 55,25 L 55,75" stroke="#1E293B" strokeWidth="7" />
              <path d="M 55,50 L 85,50" stroke="#41C0F2" opacity="0.8" />
              <path d="M 65,25 L 65,75 M 65,25 L 80,25 C 90,25 90,45 80,45 M 65,45 L 82,45 C 92,45 92,75 82,75 L 65,75" stroke="#41C0F2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-wider text-slate-900 font-sans uppercase">M. Huzaifa Butt</span>
            <span className="text-[9px] font-mono font-bold text-[#41C0F2] tracking-widest">// SYSTEMS ARCHITECT</span>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-[11px] font-mono font-bold tracking-widest text-slate-500">
          <a href="/" className="text-slate-900 font-extrabold border-b-2 border-slate-900 pb-1">HOME</a>
          <a href="/systems-engineering" className="hover:text-[#41C0F2] transition-colors">FULL-STACK</a>
          <a href="/velocity-seo" className="hover:text-[#41C0F2] transition-colors">SEO</a>
          <a href="/projects" className="hover:text-[#41C0F2] transition-colors">PROJECTS</a>
          <a href="/contact" className="hover:text-[#41C0F2] transition-colors">CONTACT</a>
        </nav>
      </header>

      <div className="w-full relative z-10 mb-6">
        <SceneWrapper />
      </div>

      <div className="sr-only" aria-hidden="false">
        <SovereignSEOContent />
      </div>

      <section className="w-full bg-white border border-blue-100/80 rounded-[28px] p-6 mb-6 shadow-sm relative z-10">
        <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl mb-5 flex justify-between items-center">
          <span className="text-xs font-mono font-black text-slate-400 uppercase tracking-wider">// CENTRAL MATRIX DATA INDEX (FAQ)</span>
          <span className="text-[10px] font-mono font-black bg-white text-slate-500 px-3 py-1 rounded-xl border border-slate-200 shadow-sm">
            {FAQ_HOME_REPOSITORY.length} NODES OPERATIONAL
          </span>
        </div>

        <div className="max-h-[380px] overflow-y-scroll pr-2 space-y-4 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FAQ_HOME_REPOSITORY.map((faq) => (
              <div key={faq.id} className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm">
                <span className="text-[8px] font-mono font-black text-[#41C0F2] uppercase block">SYS-CORE_NODE #{faq.id}</span>
                <h4 className="text-xs font-extrabold text-slate-900 mt-1 tracking-tight leading-snug">{faq.question}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-2.5 pl-3 border-l-2 border-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SystemFooter />
    </main>
  );
}
