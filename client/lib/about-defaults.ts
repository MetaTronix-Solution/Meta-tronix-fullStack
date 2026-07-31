export type AboutDifferentiator = {
  title: string;
  body: string;
  iconKey: string;
};
export type AboutWhyPoint = { title: string; desc: string; iconKey: string };
export type TimelineEntry = { year: string; label: string; detail: string };
export type StackStripItem = { iconKey: string; label: string };

export type AboutPageContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  principlesEyebrow: string;
  principlesTitle: string;
  principlesSubtitle: string;
  differentiators: AboutDifferentiator[];
  leadershipEyebrow: string;
  leadershipTitle: string;
  leadershipSubtitle: string;
  ceoAvatarInitials: string;
  ceoName: string;
  ceoRole: string;
  ceoBio: string;
  ceoShortBio: string;
  ceoQuote: string;
  ceoQuoteAttribution: string;
  ceoQuoteRole: string;
  whyEyebrow: string;
  whyTitle: string;
  whyPoints: AboutWhyPoint[];
  positioningEyebrow: string;
  positioningBody: string;
  timelineEyebrow: string;
  timelineTitle: string;
  timelineSubtitle: string;
  timeline: TimelineEntry[];
  stackEyebrow: string;
  stackTitle: string;
  stackSubtitle: string;
  stackStrip: StackStripItem[];
};

export const defaultAboutPageContent: AboutPageContent = {
  heroEyebrow: "About Meta Tronix",
  heroTitle: "We Are Meta Tronix",
  heroSubtitle:
    "A premium product engineering and digital transformation studio in Nepal. We partner with founders and enterprise teams to architect, build, and launch digital products that stay fast as they scale.",
  principlesEyebrow: "Principles",
  principlesTitle: "What Makes Us Different",
  principlesSubtitle:
    "Four commitments you will feel in every sprint review and production incident: clarity, rigor, speed, and care.",
  differentiators: [
    {
      title: "Product-first mindset",
      body: "We optimize for outcomes users feel: retention, latency, and clarity, not checklist features.",
      iconKey: "rocket",
    },
    {
      title: "Scalable architecture",
      body: "Tenancy, permissions, and data models are designed before UI debt accumulates.",
      iconKey: "layers",
    },
    {
      title: "Fast execution",
      body: "Weekly shippable slices, tight feedback loops, and demos you can share with investors.",
      iconKey: "gauge",
    },
    {
      title: "Client-obsessed delivery",
      body: "Transparent comms, proactive risk flags, and documentation your internal team can inherit.",
      iconKey: "heartHandshake",
    },
  ],
  leadershipEyebrow: "About Our Leadership",
  leadershipTitle: "Message from the",
  leadershipSubtitle: "A note on how we show up for clients and our craft.",
  ceoAvatarInitials: "MT",
  ceoName: "Ronit Shrivastav",
  ceoRole: "Chief Executive Officer",
  ceoBio:
    "We built Meta Tronix for teams who are tired of disposable software. Our bar is simple: would we run our own company on this architecture? If the answer is not an enthusiastic yes, we keep refining. Nepal gives us incredible engineering talent. Our job is to channel it into products the world trusts. Our mission is to transform that talent into reliable, secure, and scalable products that organizations around the world can trust.",
  ceoShortBio:
    "Our mission is to build reliable, secure, and scalable digital products that organizations can depend on no matter where they operate. We believe great software is defined by quality, clarity, and long-term thinking, not shortcuts.",
  ceoQuote:
    "Ship in small, verifiable steps. Own the critical path. Document like your future self is on-call.",
  ceoQuoteAttribution: "Meta Tronix Leadership",
  ceoQuoteRole: "Chief Executive Officer",
  whyEyebrow: "Why us",
  whyTitle: "Why Teams Choose Meta Tronix",
  whyPoints: [
    {
      title: "Senior-led engineering",
      desc: "No bait-and-switch: the people pitching are the people shipping.",
      iconKey: "cpu",
    },
    {
      title: "Security-aware defaults",
      desc: "Secrets hygiene, RBAC patterns, and audit-friendly admin tools.",
      iconKey: "shieldCheck",
    },
    {
      title: "Modern stack depth",
      desc: "React/Next, Node, cloud-native infra: pragmatic, not trendy.",
      iconKey: "react",
    },
    {
      title: "Design + build continuity",
      desc: "Figma to production without the telephone game.",
      iconKey: "layers",
    },
    {
      title: "Nepal timezone leverage",
      desc: "Overlap-friendly collaboration for APAC and EU partners.",
      iconKey: "gauge",
    },
    {
      title: "Long-term maintainability",
      desc: "Readable codebases, ADRs, and handover sessions that stick.",
      iconKey: "heartHandshake",
    },
  ],
  positioningEyebrow: "Positioning",
  positioningBody:
    "Meta Tronix is the product engineering partner you call when the stakes are real: launches, revenue paths, and systems that cannot afford mystery errors on day ten.",
  timelineEyebrow: "Evolution",
  timelineTitle: "How Our Stack Practice Evolved",
  timelineSubtitle:
    "A timeline view of how we matured from shipping MVPs to running production-grade platforms.",
  timeline: [
    {
      year: "2023",
      label: "Foundation",
      detail: "Core team formed around SaaS and CRM deliveries.",
    },
    {
      year: "2024",
      label: "Product studio",
      detail:
        "Repeatable discovery to delivery playbook across web and mobile.",
    },
    {
      year: "2025",
      label: "Cloud maturity",
      detail: "Hardened deployments with observability and cost guardrails.",
    },
    {
      year: "2026",
      label: "Transformation partner",
      detail: "End-to-end digital transformation engagements for growth teams.",
    },
  ],
  stackEyebrow: "Stack",
  stackTitle: "Technologies We Build With",
  stackSubtitle:
    "The same primitives we use in production for clients across web, API, data, and cloud.",
  stackStrip: [
    { iconKey: "react", label: "React" },
    { iconKey: "nextjs", label: "Next.js" },
    { iconKey: "nodejs", label: "Node" },
    { iconKey: "postgresql", label: "Postgres" },
    { iconKey: "docker", label: "Docker" },
    { iconKey: "aws", label: "AWS" },
  ],
};
