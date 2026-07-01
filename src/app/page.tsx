import React from 'react';
import { FAQ_HOME_REPOSITORY } from '@/data/portfolio';
import SystemFooter from '@/components/SystemFooter';

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
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#41c0f2_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

      {/* ========================================================================= */}
      {/* HEADER HUD BAR                                                           */}
      {/* ========================================================================= */}
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
        </nav>
      </header>

      {/* ========================================================================= */}
      {/* THREE ELEVATED BALANCED GRID CONTAINERS (EQUAL HEIGHT ALIGNMENT)          */}
      {/* ========================================================================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-stretch relative z-10 mb-6">
        
        {/* LEFT — REPOSITORY INDEX MATRIX (3/12) */}
        <section className="lg:col-span-3 flex flex-col h-full">
          <div className="bg-white border border-blue-100/60 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-full flex-1">
            <div>
              <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest">// REPOSITORY MATRIX</h3>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-2 mb-4">
                A curated fleet of sovereign search engine platforms built with high structural integrity benchmarks.
              </p>
              
              <div className="space-y-2 font-mono text-[10px]">
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
                  <span className="text-slate-600 font-bold">MINDRIND:</span>
                  <span className="text-emerald-500 font-black bg-emerald-50 px-2 py-0.5 rounded text-[8px] border border-emerald-200/50">INDEXED</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
                  <span className="text-slate-600 font-bold">TEKVENT:</span>
                  <span className="text-emerald-500 font-black bg-emerald-50 px-2 py-0.5 rounded text-[8px] border border-emerald-200/50">INDEXED</span>
                </div>
              </div>
            </div>
            
            {/* Sync Progress Tracker */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-1">
              <div className="flex justify-between text-[9px] font-mono font-black text-slate-400">
                <span>CRAWL ACCELERATION:</span>
                <span className="text-sky-500">20%</span>
              </div>
              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-[#41C0F2] h-full w-[20%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CENTER — ACTIVE VIEWPORT WORKSPACE (6/12) */}
        <section className="md:col-span-2 lg:col-span-6 flex flex-col h-full">
          <div className="bg-white border border-blue-100/80 rounded-[24px] p-4 shadow-lg shadow-sky-200/10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-black text-slate-700 uppercase tracking-wider">SYSTEM_DATA_INTEGRATION: HARDCODED_STATIC_DATA</span>
                </div>
              </div>

              <div className="w-full h-[320px] rounded-xl overflow-hidden border border-slate-200/60 bg-slate-950 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" 
                  alt="Production deployment terminal interface with static compiled codes" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl flex justify-between items-center text-white">
                  <div>
                    <span className="text-[8px] font-mono text-[#41C0F2] font-black block tracking-widest">// ACTIVE_VIEWPORT</span>
                    <span className="text-xs font-sans font-extrabold uppercase tracking-tight">ECOSYSTEM ARCHITECTURE BLUEPRINT</span>
                  </div>
                  <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 rounded text-slate-300 border border-white/5 font-bold">v15.0_SECURE</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
              <span className="text-[10px] font-mono font-extrabold bg-slate-900 text-white px-3 py-1 rounded-xl shadow-sm">Project Terminal</span>
              <div className="flex items-center gap-3">
                <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#41C0F2] h-full w-[78%] rounded-full"></div>
                </div>
                <span className="text-[10px] font-mono font-black text-slate-500">78% SYNC</span>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT — PROFILE CORE IDENTITY CARD (3/12) */}
        <section className="lg:col-span-3 flex flex-col h-full">
          <div className="bg-white border border-blue-100/60 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-full flex-1">
            <div>
              <span className="text-[9px] font-mono font-black text-slate-400 block tracking-widest uppercase">// PROFILE CORE</span>
              <h2 className="text-lg font-black text-slate-900 uppercase mt-1">M. Huzaifa Butt</h2>
              <p className="text-[11px] font-mono font-bold text-[#41C0F2] uppercase tracking-tight mt-0.5">// ENTERPRISE SYSTEMS ARCHITECT</p>
              
              <div className="text-[11px] text-slate-500 font-medium leading-relaxed mt-4 space-y-2">
                <p>
                  Specializing in pristine full-stack engineering and deep search optimization strategies across elite platforms.
                </p>
                <p>
                  By deploying native serverless code compilation pipelines instead of heavy dependencies, every asset achieves instant execution states.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-100 font-mono text-[9px] text-slate-500">
              <div className="flex justify-between"><span className="text-slate-400">ENGINE_VER:</span> <span className="font-bold text-slate-800">v15.2_STATIC</span></div>
              <div className="flex justify-between"><span className="text-slate-400">GEO_NODE:</span> <span className="font-bold text-[#41C0F2]">LAHORE / PATTOKI</span></div>
            </div>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* LOWER PLATFORM MODULES                                                    */}
      {/* ========================================================================= */}
      <section className="w-full bg-white border border-blue-100/80 rounded-[28px] p-6 mb-6 shadow-sm relative z-10">
        <div className="border-b border-slate-100 pb-3 mb-4">
          <span className="text-[9px] font-mono font-black bg-[#41C0F2]/10 text-[#41C0F2] border border-[#41C0F2]/20 px-2.5 py-1 rounded uppercase">SYSTEM_CONTEXT_DOCUMENTATION</span>
          <h2 className="text-xl font-black text-slate-900 uppercase mt-3 tracking-tight">Sovereign Ecosystem Overview &amp; Benchmarks</h2>
          <p className="text-xs font-mono text-slate-400 font-bold mt-0.5">// ENGINEERED BY M. HUZAIFA BUTT</p>
        </div>
        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-5xl">
          This deployment engine serves as the centralized hub for my personal enterprise architectures. By eliminating monolithic content management systems, this platform implements absolute server-side optimization metrics to power localized applications. Dive into the comprehensive architecture matrix logs down below to investigate specific capability parameters, framework routing rules, and performance layer operations.
        </p>
      </section>

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
