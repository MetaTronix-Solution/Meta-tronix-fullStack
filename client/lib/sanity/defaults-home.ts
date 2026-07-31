import type { Partner } from "@/lib/partners";
import { partners as staticPartners } from "@/lib/partners";

export type TechnologyMasterPayload = {
  sectionTitle: string;
  sectionSubtitle: string;
  groups: { label: string; items: { name: string; iconKey: string }[] }[];
};

export const defaultTechnologyMaster: TechnologyMasterPayload = {
  sectionTitle: "Technologies We Build With",
  sectionSubtitle:
    "The same primitives we use in production for clients across web, API, data, and cloud.",
  groups: [
    {
      label: "Frontend",
      items: [
        { name: "React", iconKey: "react" },
        { name: "Next.js", iconKey: "nextjs" },
        { name: "Flutter", iconKey: "flutter" },
        { name: "Vue", iconKey: "vue" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "Node.js", iconKey: "nodejs" },
        { name: "Django", iconKey: "django" },
        { name: "Laravel", iconKey: "laravel" },
      ],
    },
    {
      label: "Database",
      items: [
        { name: "MongoDB", iconKey: "mongodb" },
        { name: "PostgreSQL", iconKey: "postgresql" },
        { name: "MySQL", iconKey: "mysql" },
      ],
    },
    {
      label: "Cloud",
      items: [
        { name: "AWS", iconKey: "aws" },
        { name: "Firebase", iconKey: "firebase" },
        { name: "Docker", iconKey: "docker" },
        { name: "Vercel", iconKey: "vercel" },
      ],
    },
  ],
};

export type HomeProductCardPayload = {
  slug: string;
  name: string;
  desc: string;
  tags: string[];
};

export type HomeProductsPayload = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: HomeProductCardPayload[];
};

export const defaultHomeProducts: HomeProductsPayload = {
  eyebrow: "Our products",
  title: "Digital Products We've Built",
  subtitle:
    "Representative builds spanning community, consumer, and business platforms, engineered for retention and operational scale.",
  cards: [
    {
      slug: "innovator",
      name: "Innovator",
      desc: "Social platform for innovators to share ideas and collaborate.",
      tags: ["Next.js", "Node", "PostgreSQL"],
    },
    {
      slug: "linder",
      name: "Linder",
      desc: "Dating and connection app focused on authentic profiles.",
      tags: ["Flutter", "Firebase", "WebRTC"],
    },
    {
      slug: "meta-crm",
      name: "Meta CRM",
      desc: "Consultancy-grade CRM for pipelines, tasks, and client reporting.",
      tags: ["Laravel", "MySQL", "Redis"],
    },
    {
      slug: "eventify",
      name: "Eventify",
      desc: "End-to-end event management from registration to check-in.",
      tags: ["React", "Django", "AWS"],
    },
  ],
};

export const defaultTrustedPartners: Partner[] = staticPartners;

export type TestimonialPayload = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type TestimonialsPayload = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: TestimonialPayload[];
};

export const defaultTestimonials: TestimonialsPayload = {
  eyebrow: "Proof",
  title: "Our Valued Clients",
  subtitle:
    "Result-focused partnerships: we measure success in shipped milestones, reliability, and measurable product outcomes.",
  items: [
    {
      name: "Asha R.",
      role: "Founder, early-stage SaaS",
      quote:
        "Meta Tronix replaced months of drift with a disciplined roadmap. We launched our billing and admin console in weeks, not quarters, and our uptime story finally matches our pitch.",
      rating: 5,
    },
    {
      name: "Niraj K.",
      role: "Head of Product, services company",
      quote:
        "They think in systems: data models, permissions, and observability, not just screens. Our internal CRM finally reflects how our consultants actually work.",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "CTO, community platform",
      quote:
        "Clear communication, sharp execution, and a team that owns outcomes. Our engagement metrics climbed after the redesign and performance pass they led.",
      rating: 5,
    },
  ],
};
