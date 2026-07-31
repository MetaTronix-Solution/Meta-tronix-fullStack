import { getSiteUrl } from "@/lib/site-url";

export function buildHumansTxt(): string {
  const base = getSiteUrl();
  return `
/* TEAM */
Organization: Meta Tronix
Site: ${base}
Location: Kathmandu, Nepal

/* SITE */
Standards: HTML5, CSS, JavaScript
Components: Next.js, React

Thank you for your interest in humans.txt.
`.trim();
}
