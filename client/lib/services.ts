import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";

export type ServiceDetail = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  audience: string;
  process: string[];
  pricingHint: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web",
    title: "Web Development",
    icon: MonitorSmartphone,
    summary:
      "We engineer marketing sites, dashboards, and customer portals with accessibility, SEO, and performance budgets baked in from day one.",
    audience:
      "Growth-stage startups, enterprises modernizing legacy UIs, and teams launching net-new web products.",
    process: [
      "Discovery workshop to align KPIs, IA, and integration map",
      "Design systems + component libraries for speed and consistency",
      "Hardened releases with monitoring, error budgets, and rollback paths",
    ],
    pricingHint: "Custom quote, scoped after a free consultation.",
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    icon: LayoutDashboard,
    summary:
      "Cross-platform and native-adjacent experiences with offline support, push, and store-ready release pipelines.",
    audience:
      "Consumer apps, field teams, and product companies needing reliable mobile as a primary channel.",
    process: [
      "UX flows and technical spikes for riskiest integrations first",
      "Weekly builds with TestFlight/Play tracks for stakeholder feedback",
      "Launch playbook: ASO assets, crash analytics, and staged rollout",
    ],
    pricingHint: "Custom quote, depends on platforms and integrations.",
  },
  {
    slug: "crm",
    title: "Custom CRM Systems",
    icon: Server,
    summary:
      "Opinionated CRMs that mirror how your team sells and delivers, not generic fields bolted onto a template.",
    audience:
      "Consultancies, agencies, and B2B services firms with complex stakeholder journeys.",
    process: [
      "Shadow sessions to map real workflows (not imagined ones)",
      "Data model + permissions matrix before UI-heavy sprints",
      "Migration support from spreadsheets or incumbent tools",
    ],
    pricingHint: "Custom quote, typically milestone-based delivery.",
  },
  {
    slug: "saas",
    title: "SaaS Product Development",
    icon: Sparkles,
    summary:
      "Multi-tenant SaaS with authentication, billing, analytics, and admin tooling designed for operator clarity.",
    audience:
      "Founders validating PMF and teams replatforming from MVP to production scale.",
    process: [
      "Architecture review: tenancy, compliance, and cost envelopes",
      "Vertical slices that ship user value every sprint",
      "Operational readiness: backups, alerts, and on-call runbooks",
    ],
    pricingHint: "Custom quote, retainer or phased engagement.",
  },
  {
    slug: "design",
    title: "UI/UX Design",
    icon: Palette,
    summary:
      "Product design that pairs visual polish with conversion and usability, with prototypes you can user-test immediately.",
    audience:
      "Teams pre-seed through Series A needing a credible product surface without design bottlenecks.",
    process: [
      "Competitive teardown + heuristic audit of current flows",
      "High-fidelity screens tied to a pragmatic component strategy",
      "Handoff with motion notes and edge-case documentation",
    ],
    pricingHint: "Custom quote, design sprints or embedded support.",
  },
  {
    slug: "cloud",
    title: "Cloud & Deployment",
    icon: Cloud,
    summary:
      "Infrastructure as code, CI/CD, and observability so releases are boring (in the best way).",
    audience:
      "Engineering orgs outgrowing manual deploys or preparing for traffic spikes.",
    process: [
      "Baseline assessment of environments, secrets, and blast radius",
      "Pipelines with preview environments and automated checks",
      "Cost and reliability guardrails with dashboards your team owns",
    ],
    pricingHint: "Custom quote, scoped to your cloud footprint.",
  },
];
