'use client';
import React from 'react';
import { useTelemetry } from '@/hooks/useTelemetry';

export default function RightTelemetrySidebar() {
  const { loadTime, scrollVelocity, taskCount } = useTelemetry();

  const systemVeloPercent = Math.max(70, Math.min(100, 100 - (loadTime / 15)));

  return (
    <section className="lg:col-span-3 flex flex-col gap-4">
      
      <div className="bg-slate-50/90 border border-slate-100/80 rounded-2xl p-4 flex flex-col justify-between min-h-[140px] shadow-sm">
        <div>
          <h2 className="text-sm font-black tracking-tight text-slate-900 uppercase">CORE BLUEPRINTS</h2>
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-1">
            Sovereign application engines designed for absolute control and elite performance scalability.
          </p>
        </div>
        
        <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">PAINT_SPEED</span>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-slate-200 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-[#41C0F2] h-full transition-all duration-500 rounded-full" 
                style={{ width: `${systemVeloPercent}%` }}
              ></div>
            </div>
            <span className="text-[10px] font-mono font-black text-[#41C0F2]">{loadTime}ms</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50/90 border border-slate-100/80 rounded-2xl p-4 flex flex-col justify-between min-h-[110px] shadow-sm">
        <div>
          <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest block">// OPTIMIZED OPERATIONS</span>
          <div className="flex items-baseline gap-1.5 mt-1.5">
            <span className="text-2xl font-black text-slate-900 tracking-tight font-mono transition-all duration-300">
              {taskCount.toLocaleString()}+
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase font-sans">Tasks</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-white border border-slate-200/50 p-1.5 rounded-xl mt-2">
          <span className="text-[9px] font-mono font-bold text-emerald-500 flex items-center gap-1 pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> ENGINE_STABLE
          </span>
          <div className="text-[9px] font-mono text-slate-400 font-bold uppercase">
            v15.0_stable
          </div>
        </div>
      </div>

      <div className="relative flex-grow min-h-[180px] rounded-2xl border border-slate-100 overflow-hidden bg-slate-900 shadow-inner group">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" 
          alt="Data telemetry graphic system viewport visualizer" 
          className="w-full h-full object-cover object-center opacity-30 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[8px] font-mono font-bold tracking-wider text-[#41C0F2]">
            <span>// MATRIX_SCROLL_SPEED //</span>
            <span>{Math.round(scrollVelocity)} CPS</span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-400 h-full transition-all duration-150"
              style={{ width: `${Math.max(5, scrollVelocity)}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-white/90">
            <span>ENGAGEMENT_HUD</span>
            <span className="text-[9px] text-slate-500">LIVE_TELEMETRY</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50/90 border border-slate-100/80 rounded-2xl p-3 flex items-center justify-between shadow-sm">
        <div className="flex gap-1.5 items-center">
          <span className="w-2 h-2 rounded-full bg-[#41C0F2] shadow-[0_0_8px_#41C0F2]"></span>
          <span className="text-[10px] font-mono font-black text-slate-800 uppercase">SYS_LINK</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-tight">
            Active
          </span>
        </div>
      </div>

    </section>
  );
}
