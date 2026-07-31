export type OpenRole = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export const openRoles: OpenRole[] = [
  {
    slug: "backend-engineer-nodejs",
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Kathmandu / Remote",
    type: "Full-time",
    summary:
      "Design and build backend systems that power client-facing products — APIs, data models, and integrations that stay reliable as they scale.",
    responsibilities: [
      "Design and implement REST/GraphQL APIs using Node.js and Express",
      "Model data in MongoDB and MySQL with an eye on long-term scalability",
      "Write clean, tested, well-documented code that other engineers can inherit",
      "Collaborate directly with frontend engineers and clients on API contracts",
      "Own deployments and monitor production systems you build",
    ],
    requirements: [
      "2+ years of professional experience with Node.js and Express",
      "Strong understanding of relational and document databases",
      "Comfortable working directly with clients and translating requirements into systems",
      "Solid grasp of authentication, authorization, and API security basics",
    ],
    niceToHave: [
      "Experience with TypeScript",
      "Familiarity with Next.js API routes or Nest.js",
      "Exposure to cloud deployment (AWS, Docker)",
    ],
  },
  {
    slug: "frontend-engineer-react",
    title: "Frontend Engineer (React / Next.js)",
    department: "Engineering",
    location: "Kathmandu / Remote",
    type: "Full-time",
    summary:
      "Turn designs into fast, accessible, production-ready interfaces using React and Next.js across a range of client products.",
    responsibilities: [
      "Build responsive UI with React, Next.js, and Tailwind CSS",
      "Translate Figma designs into pixel-accurate, accessible components",
      "Optimize for performance, SEO, and Core Web Vitals",
      "Work closely with backend engineers to integrate APIs cleanly",
      "Maintain a shared component library across projects",
    ],
    requirements: [
      "2+ years of experience with React and modern frontend tooling",
      "Hands-on experience with Next.js (App Router preferred)",
      "Strong CSS fundamentals — Tailwind experience a plus",
      "Eye for detail and comfort working from design files",
    ],
    niceToHave: [
      "Experience with animation libraries (Framer Motion)",
      "Familiarity with headless CMS integrations (Sanity, Contentful)",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Kathmandu / Hybrid",
    type: "Full-time",
    summary:
      "Lead discovery and design work across client projects — from early wireframes to polished, production-ready UI systems.",
    responsibilities: [
      "Run discovery sessions and translate requirements into user flows",
      "Design high-fidelity UI in Figma with a consistent design system",
      "Partner with engineers through implementation to protect design quality",
      "Maintain and evolve shared design tokens and component libraries",
      "Present design decisions clearly to clients and stakeholders",
    ],
    requirements: [
      "2+ years of product design experience, ideally in an agency or studio setting",
      "Strong portfolio showing end-to-end product design work",
      "Proficiency in Figma and modern design systems practices",
      "Comfortable presenting and defending design decisions to clients",
    ],
    niceToHave: [
      "Basic front-end knowledge (HTML/CSS) for smoother handoff",
      "Experience designing for both web and mobile",
    ],
  },
];

export function getOpenRoleBySlug(slug: string) {
  return openRoles.find((role) => role.slug === slug) ?? null;
}
