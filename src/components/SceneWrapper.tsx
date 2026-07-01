'use client';

import dynamic from 'next/dynamic';

const SovereignScene = dynamic(() => import('@/components/SovereignScene'), { ssr: false });

export default function SceneWrapper() {
  return <SovereignScene />;
}
