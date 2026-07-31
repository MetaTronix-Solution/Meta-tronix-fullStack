export type BlogCategory =
  | "All"
  | "Tech"
  | "Startup"
  | "AI"
  | "Design"
  | "IoT";

export type BlogPost = {
  slug: string;
  title: string;
  hook: string;
  category: Exclude<BlogCategory, "All">;
  readMinutes: number;
  date: string;
  featured?: boolean;
  gradient: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-saas-from-nepal",
    title: "Shipping SaaS from Nepal: Playbooks That Actually Work",
    hook: "How we align async communication, milestones, and stakeholder demos across time zones.",
    category: "Startup",
    readMinutes: 6,
    date: "2026-03-12",
    featured: true,
    gradient: "from-sky-600 to-cyan-500",
  },
  {
    slug: "nextjs-app-router-performance",
    title: "App Router Performance: Field Notes from Production Builds",
    hook: "Caching boundaries, streaming, and the metrics we watch after launch.",
    category: "Tech",
    readMinutes: 8,
    date: "2026-03-02",
    gradient: "from-slate-800 to-sky-700",
  },
  {
    slug: "design-systems-for-velocity",
    title: "Design Systems That Speed Up Engineering, Without the Bureaucracy",
    hook: "Tokens, primitives, and governance that stay out of the builder’s way.",
    category: "Design",
    readMinutes: 5,
    date: "2026-02-20",
    gradient: "from-fuchsia-600 to-orange-500",
  },
  {
    slug: "pragmatic-ai-features",
    title: "Pragmatic AI Features: Start Narrow, Instrument Everything",
    hook: "Shipping assistive workflows where models add leverage, not liability.",
    category: "AI",
    readMinutes: 7,
    date: "2026-02-06",
    gradient: "from-violet-700 to-indigo-500",
  },
  {
    slug: "iot-lessons-field-hardware",
    title: "IoT Lessons from the Field: Connectivity, Firmware, and Support",
    hook: "What changes when your UI is bolted to a device in the real world.",
    category: "IoT",
    readMinutes: 9,
    date: "2026-01-22",
    gradient: "from-emerald-700 to-teal-500",
  },
  {
    slug: "founder-friendly-discovery",
    title: "Founder-Friendly Discovery: Questions We Ask Before Writing Code",
    hook: "A tight workshop format that surfaces constraints early, saving weeks later.",
    category: "Startup",
    readMinutes: 4,
    date: "2026-01-10",
    gradient: "from-rose-600 to-amber-500",
  },
  {
    slug: "postgres-at-scale-midmarket",
    title: "PostgreSQL at Scale for Mid-Market Products",
    hook: "Indexing, partitioning, and migration tactics we lean on for growing datasets.",
    category: "Tech",
    readMinutes: 10,
    date: "2025-12-18",
    gradient: "from-blue-800 to-cyan-600",
  },
  {
    slug: "crafting-onboarding-flows",
    title: "Crafting Onboarding Flows That Respect User Time",
    hook: "Progressive profiling, defaults, and the analytics that prove it’s working.",
    category: "Design",
    readMinutes: 5,
    date: "2025-12-02",
    gradient: "from-orange-600 to-rose-500",
  },
];
