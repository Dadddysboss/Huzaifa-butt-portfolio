import React from 'react';
import { FAQ_SYSTEMS_REPOSITORY } from '@/data/portfolio';
import SystemFooter from '@/components/SystemFooter';

export default function SystemsEngineeringPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Full-Stack Ecosystem Architecture — System Eng Spec v15",
        "description": "Non-monolithic native pipelines, production server arrays, and infrastructure configuration for TypeScript, JavaScript, PHP, and SQL core engines.",
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

  const FULL_LANG_MATRIX = [
    { 
      name: 'TypeScript', 
      version: 'v5.4', 
      color: '#3178C6', 
      desc: 'Strong architectural validation and compiled contracts preventing interface runtime failure bugs.',
      svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125C.504 24 0 23.496 0 22.875V1.125C0 .504.504 0 1.125 0zm22.112 21.65v-3.712h-2.162v1.625c0 .762-.425 1.125-1.187 1.125-.663 0-1.113-.362-1.113-1.162v-7.15h-2.313v7.35c0 2.125 1.25 3.162 3.238 3.162 1.937 0 3.537-1.075 3.537-3.238zm-11.838-5.325c0-3.137-2.075-4.437-5.075-4.437-2.613 0-4.463 1.162-4.463 3.425h2.275c0-1.038.713-1.488 2.075-1.488 1.413 0 2.875.525 2.875 2.225v.5c-.538-.075-1.325-.138-2.188-.138-2.662 0-4.925.862-4.925 3.325 0 2.088 1.55 3.175 3.638 3.175 1.762 0 2.837-.675 3.537-1.85h.075v1.6h2.213v-6.337zm-2.225 3.213c0 1.1-.813 1.637-1.838 1.637-1.075 0-1.637-.538-1.637-1.387 0-1.012.925-1.425 2.513-1.425.412 0 .737.025.962.062v1.113z"/></svg> 
    },
    { 
      name: 'JavaScript', 
      version: 'ES2024', 
      color: '#F7DF1E', 
      desc: 'Asynchronous concurrency loops driving non-blocking logic across localized rendering structures.',
      svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M0 0h24v24H0V0zm22.034 18.258c-.121-1.361-.953-2.306-2.502-2.912-1.314-.492-2.316-.763-2.316-1.503 0-.585.452-.93 1.159-.93.751 0 1.275.33 1.559 1.005.105.257.375.465.66.465h1.996c.3 0 .525-.262.465-.555-.45-2.205-2.22-3.465-4.665-3.465-2.4 0-4.245 1.23-4.245 3.465 0 2.37 1.83 3.015 4.305 3.57 1.335.3 2.145.6 2.145 1.41 0 .615-.555 1.005-1.395 1.005-.99 0-1.68-.45-1.995-1.32-.09-.255-.345-.42-.615-.42h-2.1c-.345 0-.585.315-.495.645.495 1.86 2.085 3.195 5.235 3.195 3.165 0 5.43-1.44 5.43-4.11zm-12.784-5.07c.09-.255.345-.42.615-.42h2.085c.345 0 .585.315.495.645-.48 1.815-1.875 3.21-4.275 3.21-2.4 0-3.9-1.275-3.9-2.94 0-1.125.645-1.965 1.77-2.355.225-.075.315-.315.225-.525l-.885-2.07c-.12-.27-.42-.39-.69-.255C1.845 13.065 0 15.345 0 18.39c0 3.225 2.37 5.61 6.555 5.61 3.54 0 5.565-1.74 6.27-4.14V13.188z"/></svg>
    },
    { 
      name: 'PHP Engine', 
      version: 'v8.3', 
      color: '#777BB4', 
      desc: 'Robust server processing targets optimized for lightning-fast application backends.',
      svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.12 15.36h-1.92l-.54 2.16h-1.68l2.22-8.88h1.92c1.38 0 2.22.63 2.22 1.98 0 1.56-.99 4.74-2.22 4.74zm-4.56-4.74h-1.92l-.54 2.16h1.68c1.17 0 1.83-.54 1.83-1.44 0-.48-.33-.72-1.05-.72zm-4.32 4.74H6.32l.54-2.16h1.68c1.17 0 1.83-.54 1.83-1.44 0-.48-.33-.72-1.05-.72zm1.68-6.66l-2.22 8.88H6L8.22 8.7h1.92z"/></svg> 
    },
    { 
      name: 'SQL Core', 
      version: 'MySQL', 
      color: '#4479A1', 
      desc: 'Optimized relational table querying, index mapping, and dynamic structural schema operations.',
      svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 0C5.373 0 0 2.165 0 4.833v14.334C0 21.835 5.373 24 12 24s12-2.165 12-4.833V4.833C24 2.165 18.627 0 12 0zm0 3.333c5.15 0 8.667 1.134 8.667 1.5s-3.517 1.5-8.667 1.5-8.667-1.134-8.667-1.5 3.517-1.5 8.667-1.5zm0 5c5.15 0 8.667 1.134 8.667 1.5s-3.517 1.5-8.667 1.5-8.667-1.134-8.667-1.5 3.517-1.5 8.667-1.5zm0 5c5.15 0 8.667 1.134 8.667 1.5s-3.517 1.5-8.667 1.5-8.667-1.134-8.667-1.5 3.517-1.5 8.667-1.5zm0 5c-5.15 0-8.667-1.134-8.667-1.5s3.517-1.5 8.667-1.5 8.667 1.134 8.667 1.5-3.517 1.5-8.667 1.5z"/></svg> 
    }
  ];

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

        <div>
          <div className="border-b border-slate-100 pb-2 mb-4">
            <h3 className="text-xs font-mono font-black text-slate-400 tracking-wider uppercase">
              // ACTIVE CORE PROGRAMMING LANGUAGES & EMBEDDED SVGS
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FULL_LANG_MATRIX.map((tech) => (
              <div key={tech.name} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex flex-col justify-between shadow-sm hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: tech.color }} className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                      {tech.svg}
                    </div>
                    <div>
                      <span className="block text-[12px] font-black text-slate-800 font-mono">{tech.name}</span>
                      <span className="block text-[8px] font-mono text-emerald-500 font-bold uppercase">{tech.version} CURRENT</span>
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
                Developing low-latency backends demands specialized database architecture selection. Relational databases like MySQL map structured query trees seamlessly, preventing runtime deadlocks across overlapping data pipelines. Every data table is fully indexed to provide ultra-fast access, scaling smoothly during heavy traffic periods.
              </p>
              <p>
                By building layouts with strongly-typed interfaces, structural components ensure complete stability from the compiler layer right to live client rendering boards. Type conflicts are resolved before code is deployed, safeguarding data integrity across localized endpoint channels.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                Server actions process payloads directly within static hosting setups, bypassing bulky middleware loops. This isolation keeps application states protected from external scripts, reducing attack vectors and ensuring high performance marks across our primary layouts.
              </p>
              <p>
                Our compiled component layouts render layout adjustments instantly without triggering cumulative layout shifts. This technical model guarantees optimal responsive performance across standard desktop contexts and portable mobile platforms alike.
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
              {FAQ_SYSTEMS_REPOSITORY.length} INTEGRATED NODES
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
