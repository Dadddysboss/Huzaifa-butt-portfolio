'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';

type BotStatus = {
  label: string;
  agent: string;
};

const BOT_CYCLE: BotStatus[] = [
  { label: 'CRAWLER_BOT_ACTIVE', agent: 'Googlebot-Image / Desktop' },
  { label: 'INDEXER_BOT_STANDBY', agent: 'Googlebot-Smartphone / Mobile' },
  { label: 'SPIDER_BOT_PARSING', agent: 'Bingbot / 2.0' },
  { label: 'CRAWLER_BOT_ACTIVE', agent: 'Googlebot-Image / Desktop' },
];

function computeLoadScore(): number {
  if (typeof window === 'undefined') return 95;
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav) {
      const loadMs = nav.domContentLoadedEventEnd - nav.startTime;
      if (loadMs < 200) return 98;
      if (loadMs < 400) return 92;
      if (loadMs < 600) return 84;
      if (loadMs < 1000) return 72;
      return 55;
    }
    const t = performance.timing;
    if (t && t.domContentLoadedEventEnd && t.navigationStart) {
      const loadMs = t.domContentLoadedEventEnd - t.navigationStart;
      if (loadMs < 200) return 98;
      if (loadMs < 400) return 92;
      if (loadMs < 600) return 84;
      if (loadMs < 1000) return 72;
      return 55;
    }
  } catch {
    return 95;
  }
  return 95;
}

export default function CrawlTelemetry() {
  const [score, setScore] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [botIndex, setBotIndex] = useState(0);
  const [pingVisible, setPingVisible] = useState(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const target = computeLoadScore();
    const startTime = Date.now();
    const duration = 800;

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(eased * target);
      setScore(current);
      setDisplayPercent(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const botInterval = setInterval(() => {
      setBotIndex((prev) => (prev + 1) % BOT_CYCLE.length);
    }, 3200);

    const pingInterval = setInterval(() => {
      setPingVisible((prev) => !prev);
    }, 1800);

    return () => {
      clearInterval(botInterval);
      clearInterval(pingInterval);
    };
  }, []);

  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-slate-50/90 border border-slate-100/80 rounded-2xl p-4 flex flex-col gap-3 h-[130px]">
      <div className="flex items-center justify-between">
        <div className="relative w-11 h-11 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-200"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#41C0F2] transition-all duration-200 ease-out"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute font-mono font-black text-slate-800 text-[9px]">
            {displayPercent}%
          </span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] font-mono font-black text-[#41C0F2]">
            {displayPercent}% CRAWL
          </span>
          <span className="block text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wider">
            Acceleration
          </span>
        </div>
      </div>

      <div className="border-t border-slate-200/50 pt-2 flex items-center gap-2 text-[9px] font-mono leading-tight">
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity duration-300 ${
            pingVisible ? 'bg-emerald-500 opacity-100' : 'bg-emerald-500 opacity-30'
          }`}
        />
        <span className="text-emerald-600 font-bold tracking-wider">{BOT_CYCLE[botIndex].label}</span>
        <span className="text-slate-400 font-medium truncate">{BOT_CYCLE[botIndex].agent}</span>
      </div>
    </div>
  );
}
