'use client';
import { useState, useEffect } from 'react';

export function useTelemetry() {
  const [loadTime, setLoadTime] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [taskCount, setTaskCount] = useState(15234);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calculateSpeed = () => {
        const [navigation] = performance.getEntriesByType('navigation') as any[];
        if (navigation) {
          const totalTime = navigation.duration || (navigation.loadEventEnd - navigation.startTime);
          setLoadTime(Math.round(totalTime > 0 ? totalTime : 142));
        } else {
          setLoadTime(142);
        }
      };

      if (document.readyState === 'complete') {
        calculateSpeed();
      } else {
        window.addEventListener('load', calculateSpeed);
        return () => window.removeEventListener('load', calculateSpeed);
      }
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let tokenInterval: NodeJS.Timeout;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const velocity = Math.abs(st - lastScrollTop);
      setScrollVelocity(Math.min(velocity * 4, 100));
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    tokenInterval = setInterval(() => {
      setTaskCount(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(tokenInterval);
    };
  }, []);

  return { loadTime, scrollVelocity, taskCount };
}
