export type Product = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  features: string[];
  tech: string[];
  icon: string;
  preview: string;
  url?: string;
};

export const products: Product[] = [
  {
    id: "innovator",
    name: "Innovator",
    tagline: "Where builders meet momentum.",
    problem:
      "Innovation communities fragment across chats, docs, and social noise.",
    features: [
      "Project rooms with milestones, files, and threaded discussion",
      "Reputation and contribution signals that reward quality, not volume",
      "Moderation tools tuned for constructive technical discourse",
    ],
    tech: [
      "Next.js",
      "PostgreSQL",
      "Realtime",
      "AWS",
      "Flutter",
      "Firebase",
      "Python",
      "Ai/ML",
    ],
    icon: "/products/innovator.jpg",
    preview: "/products/innovator-preview.png",
    url: "https://play.google.com/store/apps/details?id=com.innovation.innovator&pcampaignid=web_share",
  },
  {
    id: "linder",
    name: "Linder",
    tagline: "Dating with intention, not endless swipes.",
    problem:
      "Connection apps optimize for vanity metrics instead of meaningful matches.",
    features: [
      "Profile prompts designed to surface values and lifestyle fit",
      "Safety workflows with reporting, blocking, and human review hooks",
      "Performance-first mobile builds for flaky networks",
    ],
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase", "Flutter"],
    icon: "/products/linder.png",
    preview: "/products/linder-preview.png",
    url: "",
  },
  {
    id: "meta-crm",
    name: "Meta CRM",
    tagline: "Consulting pipelines, without spreadsheet chaos.",
    problem:
      "Consultancies lose visibility when leads, delivery, and billing live in different tools.",
    features: [
      "Lead-to-cash pipeline with role-based access for partners and analysts",
      "Client workspaces for deliverables, approvals, and invoices",
      "Executive dashboards for utilization and revenue forecasting",
    ],
    tech: ["Laravel", "MySQL", "Vue", "Docker"],
    icon: "/products/meta-crm.png",
    preview: "/products/meta-crm-preview.png",
    url: "",
  },
  {
    id: "eventify",
    name: "Eventify",
    tagline: "Events that feel effortless on game day.",
    problem:
      "Event teams juggle registrations, payments, and on-site logistics with brittle tooling.",
    features: [
      "Branded registration sites with tiered ticketing and promo codes",
      "Check-in flows that work offline-first for crowded venues",
      "Organizer analytics for attendance, revenue, and cohort insights",
    ],
    tech: ["Next.js", "Stripe", "PostgreSQL", "Vercel", "Flutter", "Firebase"],
    icon: "/products/eventify.jpg",
    preview: "/products/eventify-preview.png",
    url: "https://play.google.com/store/apps/details?id=com.nepatronix.eventsolutions&pcampaignid=web_share",
  },
];
