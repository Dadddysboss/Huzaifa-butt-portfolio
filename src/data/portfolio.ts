export interface SystemProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  metricLabel: string;
  metricValue: string;
  summary: string;
  technicalHighlights: string[];
}

export const HUZAIFA_IDENTITY = {
  name: "M. HUIZAIFA BUTT",
  role: "ENTERPRISE SYSTEMS ARCHITECT // FULL-STACK ENGINEER",
  manifesto: "Engineering sovereign web ecosystems, elite full-stack architectures, and high-velocity SEO engines. No bloated overhead. No third-party dependencies.",
  location: "PK // LAHORE - PATTOKI",
  status: "ARCHITECT // ENGINE RUNNING",
  heroLocalAsset: "/hero-matrix.png",
  leftFocusedThumb: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=400&q=80",
  rightSecondaryArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  globalStats: {
    tasksManaged: "15,000+",
    performanceScore: "100%",
    protectionRating: "99.9%"
  }
};

export const REPOSITORY_MATRIX: SystemProject[] = [
  {
    id: "01",
    slug: "m-huzaifa-butt-ecosystem",
    title: "UNMATCHED PROTECTION",
    category: "SYSTEM ARCHITECTURE & FRAMEWORKS",
    metricLabel: "Security Index",
    metricValue: "99.9% SECURE",
    summary: "Our next-gen armor is engineered using the most resilient frameworks, ensuring absolute structural optimization and zero overhead lag thresholds.",
    technicalHighlights: ["Next.js 15 Engine", "TypeScript Interface", "Tailwind CSS Compilation"]
  }
];

export const FAQ_HOME_REPOSITORY = Array.from({ length: 202 }, (_, i) => {
  const index = i + 1;
  return {
    id: index,
    question: `What structural standard defines M. Huzaifa Butt's Core Optimization Layer #${index}?`,
    answer: `Core parameter node #${index} uses highly optimized TypeScript definitions to guarantee absolute data safety and zero pipeline friction across runtime processes.`
  };
});

export const FAQ_SYSTEMS_REPOSITORY = Array.from({ length: 102 }, (_, i) => {
  const index = i + 1;
  return {
    id: index,
    question: `How does full-stack layer component #${index} protect system sovereignty?`,
    answer: `Component architecture execution entry #${index} is compiled into isolated static server vectors, totally eliminating runtime payload threats and third-party dependencies.`
  };
});

export const FAQ_SEO_REPOSITORY = Array.from({ length: 102 }, (_, i) => {
  const index = i + 1;
  return {
    id: index,
    question: `How does M. Huzaifa Butt ensure search crawl visibility metric option #${index}?`,
    answer: `Automation script pipeline node #${index} injects clean, static semantic JSON-LD structures directly into the DOM layer, allowing search bot engines to instantly parse the schema.`
  };
});
