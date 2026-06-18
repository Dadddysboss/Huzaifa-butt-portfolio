"use client";

import React, { useState } from 'react';
import { HUZAIFA_IDENTITY } from '@/data/portfolio';

const NETWORK_NODES = [
  {
    name: 'GitHub',
    url: 'https://github.com/Dadddysboss',
    desc: 'Core repository architecture hub hosting sovereign full-stack application logic, custom CMS development engines, and static JSON matrix blueprints.',
    accent: '#0f172a',
    cta: 'ACCESS REPOSITORY',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#0f172a"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/923158497860',
    desc: 'High-velocity direct communications routing channel for immediate architectural consultations, enterprise project syncing, and production system debugging.',
    accent: '#25D366',
    cta: 'SEND MESSAGE',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/huzaifabutt09/',
    desc: 'Visual log and lifestyle viewport balancing professional software engineering sprints with personalized static milestones and creative media capture.',
    accent: '#E4405F',
    cta: 'VIEW PROFILE',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  },
  {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/add/b_empires20',
    desc: 'Real-time ephemeral communication network log showcasing behind-the-scenes engineering builds, workspace environments, and transient lifestyle syncs.',
    accent: '#FFFC00',
    cta: 'CONNECT VIA SNAPCHAT',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#1a1a1a"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.46 16.57c-.76.36-1.22.25-1.48.76-.2.4-.18.96-.94 1.46-.55.36-1.24.44-2.02.44v.07c.01.32.06.76.17 1.3.07.36.37.62.76.62h.06c.3-.01.6.02.87.11.48.16.82.6.82 1.12 0 .64-.54 1.16-1.2 1.16-.2 0-.37-.04-.52-.11-.40-.18-.95-.2-1.85-.2-.63 0-1.73.07-1.9.07-.7 0-1.18-.38-1.18-.92 0-.47.32-.86.7-1.06.26-.14.56-.18.86-.18h.06c.39 0 .7-.26.76-.62.12-.54.16-.98.17-1.3v-.07c-.78 0-1.47-.08-2.02-.44-.76-.5-.74-1.06-.94-1.46-.26-.51-.72-.4-1.48-.76-.72-.34-.89-1.02-.42-1.5.15-.16.37-.27.63-.27.18 0 .35.04.48.12.54.33 1.02.52 1.46.57.16.02.32.03.48.03.5 0 .9-.18 1.1-.52.2-.33.55-1.03.67-2.57l-.01-.01c-1.1-.24-1.92-1.27-1.92-2.47 0-.46.13-.89.36-1.27h-.01c-.02-.04-.04-.08-.06-.12-.24-.44-.38-.87-.38-1.18 0-1.35 1.33-2.62 3.1-2.62.44 0 .86.08 1.27.23l.04.01c.4-.15.83-.23 1.26-.23 1.77 0 3.1 1.27 3.1 2.62 0 .31-.14.74-.38 1.18-.02.04-.04.08-.06.12h-.01c.23.38.36.81.36 1.27 0 1.2-.82 2.23-1.92 2.47l-.01.01c.12 1.54.47 2.24.67 2.57.2.34.6.52 1.1.52.16 0 .32-.01.48-.03.44-.05.92-.24 1.46-.57.13-.08.3-.12.48-.12.26 0 .48.11.63.27.47.48.3 1.16-.42 1.5z"/></svg>
  },
  {
    name: 'PUBG Mobile',
    url: '',
    desc: 'Tactical strategy operation deck utilized for high-intensity cognitive cooldowns, spatial awareness training, and synchronized squad operations.',
    accent: '#FFB800',
    cta: 'COPY UID TO CLIPBOARD',
    uid: '5960565950',
    svg: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#FFB800"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.2 5.1c.6-.3 1.2-.3 1.8 0l6.6 3.9c.6.3 1.2 1.2 1.2 1.8v4.2c0 .6-.3 1.5-.9 1.8l-6.6 3.9c-.6.3-1.2.3-1.8 0l-6.6-3.9c-.6-.3-.9-1.2-.9-1.8v-4.2c0-.6.3-1.5.9-1.8l6.6-3.9zm.6 2.1L7.2 10.2v3.6l4.2 2.4 4.2-2.4v-3.6L11.4 7.2zm0 1.2l2.7 1.5v3l-2.7 1.5-2.7-1.5v-3l2.7-1.5z"/></svg>
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function handleCopyUid(uid: string) {
    navigator.clipboard.writeText(uid);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center p-2 sm:p-4 md:p-6 bg-[#eef5fa] relative overflow-x-hidden font-sans antialiased text-slate-900">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#41c0f2_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

      {/* HEADER HUD BAR */}
      <header className="w-full bg-white border border-blue-100/80 rounded-2xl p-4 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md relative z-10">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="M. Huzaifa Butt" className="h-10 w-auto" />
          <span className="text-xs font-mono tracking-widest text-slate-400 hidden sm:inline">
            {HUZAIFA_IDENTITY.status}
          </span>
        </div>
        <nav className="flex items-center gap-6 text-xs font-bold tracking-wider text-slate-600">
          <a href="/" className="hover:text-[#41C0F2] transition-colors">HOME</a>
          <a href="/about" className="hover:text-[#41C0F2] transition-colors">ABOUT</a>
          <a href="/projects" className="hover:text-[#41C0F2] transition-colors">PROJECTS</a>
          <a href="/contact" className="text-[#41C0F2] border-b-2 border-[#41C0F2] pb-1">CONTACT</a>
        </nav>
      </header>

      {/* CONNECT NODES GRID SECTION */}
      <section className="w-full relative z-10 mb-6">
        <div className="bg-white border border-blue-100/80 rounded-[28px] p-6 shadow-sm mb-4">
          <span className="text-[9px] font-mono font-black bg-[#41C0F2]/10 text-[#41C0F2] border border-[#41C0F2]/20 px-2.5 py-1 rounded uppercase">CONNECT_NODES // NETWORK_TOPOLOGY</span>
          <h1 className="text-xl font-black text-slate-900 uppercase mt-3 tracking-tight">Professional &amp; Personal Network Matrix</h1>
          <p className="text-xs font-mono text-slate-400 font-bold mt-0.5">// INITIALIZE SECURE CONNECTION TO ANY NODE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {NETWORK_NODES.map((node) => (
            <div key={node.name} className="bg-white border border-blue-100/60 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:bg-slate-50 transition-all">
              
              {/* Top: Icon + Name */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200/60">
                    {node.svg}
                  </div>
                  <span className="text-sm font-black tracking-tight text-slate-900 uppercase">{node.name}</span>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed font-sans mb-4">
                  {node.desc}
                </p>

                {/* PUBG: show UID badge */}
                {node.uid && (
                  <div className="bg-slate-50 border border-slate-200/60 rounded-xl px-3 py-2 mb-4 flex items-center gap-2 font-mono text-[10px]">
                    <span className="text-slate-400 font-bold">UID:</span>
                    <span className="text-slate-800 font-black tracking-wider">{node.uid}</span>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              {node.url ? (
                <a
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-[#41C0F2] text-white font-mono font-bold text-[10px] uppercase tracking-widest py-3 rounded-xl text-center transition-all shadow-sm block"
                >
                  {node.cta}
                </a>
              ) : (
                <button
                  onClick={() => handleCopyUid(node.uid!)}
                  className="w-full bg-slate-900 hover:bg-[#41C0F2] text-white font-mono font-bold text-[10px] uppercase tracking-widest py-3 rounded-xl transition-all shadow-sm"
                >
                  {copied ? 'UID COPIED' : node.cta}
                </button>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* TRANSMISSION FORM SECTION */}
      <section className="w-full relative z-10 mb-6">
        <div className="bg-white border border-blue-100/80 rounded-[28px] p-6 shadow-sm">
          <div className="border-b border-slate-100 pb-3 mb-5">
            <span className="text-[9px] font-mono font-black bg-[#41C0F2]/10 text-[#41C0F2] border border-[#41C0F2]/20 px-2.5 py-1 rounded uppercase">TRANSMIT // SECURE_MESSAGE</span>
            <h2 className="text-lg font-black text-slate-900 uppercase mt-3 tracking-tight">Direct System Request</h2>
            <p className="text-xs font-mono text-slate-400 font-bold mt-0.5">// LPDoS-PROTECTED — MAX 128 CHARS PER FIELD</p>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 max-w-2xl">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""} />

            <div>
              <label htmlFor="contact-name" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                [ 01 // IDENTITY REGISTERED NAME ]
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="e.g., Enterprise Client"
                className="w-full bg-white border border-slate-200 focus:border-[#41C0F2] text-xs font-medium text-slate-800 placeholder-slate-400 px-4 py-3.5 rounded-xl shadow-sm outline-none transition-all"
                required
                maxLength={128}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                [ 02 // SECURE ROUTING EMAIL ]
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="name@company.com"
                className="w-full bg-white border border-slate-200 focus:border-[#41C0F2] text-xs font-medium text-slate-800 placeholder-slate-400 px-4 py-3.5 rounded-xl shadow-sm outline-none transition-all"
                required
                maxLength={128}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                [ 03 // TRANSMISSION CONTENT DATA ]
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Define the scope parameters of your project build..."
                className="w-full bg-white border border-slate-200 focus:border-[#41C0F2] text-xs font-medium text-slate-800 placeholder-slate-400 px-4 py-3.5 rounded-xl shadow-sm outline-none transition-all resize-none"
                required
                maxLength={128}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#41C0F2] hover:bg-sky-400 text-white font-black text-xs tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-sky-200 uppercase font-mono mt-2"
            >
              TRANSMIT SYSTEM REQUEST
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
