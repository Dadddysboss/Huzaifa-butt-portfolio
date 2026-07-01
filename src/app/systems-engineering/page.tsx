import React from 'react';
import { FAQ_SYSTEMS_REPOSITORY } from '@/data/portfolio';
import SystemFooter from '@/components/SystemFooter';
import { PROGRAMMING_LANGUAGES, DATABASE_LANGUAGES, MARKUP_LANGUAGES } from '@/data/languageData';

export default function SystemsEngineeringPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Full-Stack Ecosystem Architecture — System Eng Spec v15",
        "description": "Non-monolithic native pipelines, production server arrays, and infrastructure configuration spanning 78+ programming, database, and markup language engines.",
        "proficiencyLevel": "Expert",
        "about": {
          "@type": "Thing",
          "name": "Full-Stack Software Engineering"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_SYSTEMS_REPOSITORY.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  const totalLanguages = PROGRAMMING_LANGUAGES.length + DATABASE_LANGUAGES.length + MARKUP_LANGUAGES.length;

  return (
    <main className="min-h-screen w-full flex flex-col items-center p-4 bg-[#eef5fa] relative overflow-hidden font-sans antialiased text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#41c0f2_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

      <div className="w-full bg-white border border-blue-100/80 rounded-[32px] p-6 shadow-2xl shadow-sky-200/20 flex flex-col gap-8 relative z-10 mb-6">
        
        <div className="bg-slate-50/90 border border-slate-100/80 rounded-2xl p-3 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="M. Huzaifa Butt" className="h-8 w-auto" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#41C0F2] uppercase">// DEV_STATIONS // BACKEND_CORE</span>
          </div>
          <nav className="flex items-center gap-5 text-[10px] font-mono font-bold tracking-widest text-slate-500">
            <a href="/" className="hover:text-[#41C0F2] transition-colors">ABOUT</a>
            <a href="/systems-engineering" className="text-slate-900 font-extrabold border-b border-slate-900 pb-0.5">FULL-STACK</a>
            <a href="/velocity-seo" className="hover:text-[#41C0F2] transition-colors">SEO</a>
          </nav>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden text-white">
          <span className="text-[9px] font-mono font-black bg-[#41C0F2]/20 text-[#41C0F2] border border-[#41C0F2]/30 px-2.5 py-1 rounded uppercase tracking-wider">
            SYSTEM_ENG_SPEC_V15
          </span>
          <h1 className="text-2xl font-black tracking-tight mt-3 uppercase">
            Full-Stack Ecosystem Architecture
          </h1>
          <h2 className="text-sm font-mono font-bold text-[#41C0F2] mt-1 uppercase">
            // Non-Monolithic Native Pipelines & Production Server Arrays
          </h2>
          <h3 className="text-xs font-mono text-slate-400 font-medium mt-2 uppercase tracking-wide">
            Infrastructure Configuration Layer Managed by M. Huzaifa Butt
          </h3>
          <p className="text-xs text-slate-300 font-medium max-w-4xl mt-4 leading-relaxed">
            True full-stack efficiency means optimizing code files down to clean static output models. By stripping away unneeded structural dependencies, application routers parse tasks instantly, delivering rapid initial layouts and secure processing performance.
          </p>
        </div>

        <div className="space-y-8">
          
          <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl flex justify-between items-center">
            <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-wider">
              // PROGRAMMING & SCRIPTING LANGUAGES (BACKEND & LOGIC)
            </h3>
            <span className="text-[10px] font-mono font-bold bg-white text-slate-500 px-2 py-0.5 rounded-lg border border-slate-200">
              {PROGRAMMING_LANGUAGES.length} ENGINES
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROGRAMMING_LANGUAGES.map((tech) => (
              <div key={tech.name} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex flex-col justify-between shadow-sm hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: tech.color }} className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                      {tech.svg}
                    </div>
                    <div>
                      <span className="block text-[12px] font-black text-slate-800 font-mono">{tech.name}</span>
                      <span className="block text-[8px] font-mono text-emerald-500 font-bold uppercase">{tech.label} CURRENT</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/40 text-[8px] font-mono text-slate-400 tracking-widest uppercase">
                  NODE_STATUS // 100% OPERATIONAL
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl flex justify-between items-center">
            <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-wider">
              // DATABASE QUERY LANGUAGES
            </h3>
            <span className="text-[10px] font-mono font-bold bg-white text-slate-500 px-2 py-0.5 rounded-lg border border-slate-200">
              {DATABASE_LANGUAGES.length} ENGINES
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DATABASE_LANGUAGES.map((tech) => (
              <div key={tech.name} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex flex-col justify-between shadow-sm hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: tech.color }} className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                      {tech.svg}
                    </div>
                    <div>
                      <span className="block text-[12px] font-black text-slate-800 font-mono">{tech.name}</span>
                      <span className="block text-[8px] font-mono text-emerald-500 font-bold uppercase">{tech.label} CURRENT</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/40 text-[8px] font-mono text-slate-400 tracking-widest uppercase">
                  NODE_STATUS // 100% OPERATIONAL
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl flex justify-between items-center">
            <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-wider">
              // MARKUP, STYLING, DATA & CONFIGURATION LANGUAGES
            </h3>
            <span className="text-[10px] font-mono font-bold bg-white text-slate-500 px-2 py-0.5 rounded-lg border border-slate-200">
              {MARKUP_LANGUAGES.length} ENGINES
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKUP_LANGUAGES.map((tech) => (
              <div key={tech.name} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex flex-col justify-between shadow-sm hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: tech.color }} className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                      {tech.svg}
                    </div>
                    <div>
                      <span className="block text-[12px] font-black text-slate-800 font-mono">{tech.name}</span>
                      <span className="block text-[8px] font-mono text-emerald-500 font-bold uppercase">{tech.label} CURRENT</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/40 text-[8px] font-mono text-slate-400 tracking-widest uppercase">
                  NODE_STATUS // 100% OPERATIONAL
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="bg-slate-50/50 rounded-2xl border border-slate-200/40 p-5 space-y-4">
          <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest">
            // COMPILATION AND SYSTEM THREAD MANAGEMENT ANALYSIS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs text-slate-600 font-medium leading-relaxed">
            <div className="space-y-3">
              <p>
                Developing low-latency backends demands specialized language selection across {totalLanguages} engines spanning programming, database, and markup layers. Relational databases like MySQL map structured query trees seamlessly, preventing runtime deadlocks across overlapping data pipelines. Every data table is fully indexed to provide ultra-fast access, scaling smoothly during heavy traffic periods.
              </p>
              <p>
                By building layouts with strongly-typed interfaces across TypeScript, Kotlin, and Rust, structural components ensure complete stability from the compiler layer right to live client rendering boards. Type conflicts are resolved before code is deployed, safeguarding data integrity across localized endpoint channels.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                Server actions process payloads directly within static hosting setups, bypassing bulky middleware loops. From Go's goroutines to Erlang's actor model, our language matrix isolates application states, reduces attack vectors, and ensures high performance marks across primary layouts.
              </p>
              <p>
                Support for declarative query languages like GraphQL, SPARQL, and Cypher provides specialized data access patterns beyond traditional SQL. This multi-paradigm approach guarantees optimal responsive performance across standard desktop contexts and portable mobile platforms alike.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl mb-4 flex justify-between items-center">
            <h3 className="text-xs font-mono font-black text-slate-400 uppercase tracking-wider">
              // FULL-STACK INFRASTRUCTURE EVALUATION ACCORDION MATRIX (FAQ)
            </h3>
            <span className="text-[10px] font-mono font-bold bg-white text-slate-500 px-2 py-0.5 rounded-lg border border-slate-200">
              {FAQ_SYSTEMS_REPOSITORY.length} INTEGRATED NODES &mdash; {totalLanguages} LANG ENGINES
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[450px] overflow-y-auto pr-2">
            {FAQ_SYSTEMS_REPOSITORY.map((faq) => (
              <div key={faq.id} className="bg-slate-50/40 border border-slate-100 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <span className="text-[8px] font-mono font-bold text-[#41C0F2]">SYS-CORE_NODE #{String(faq.id).padStart(3, '0')}</span>
                <h4 className="text-xs font-extrabold text-slate-900 mt-1 tracking-tight">{faq.question}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-2 pl-2 border-l border-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <SystemFooter />
    </main>
  );
}
