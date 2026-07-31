import { getSiteUrl } from "@/lib/site-url";

/** Plain-text / Markdown-style llms.txt (https://llmstxt.org/). */
export function buildLlmsTxt(): string {
  const base = getSiteUrl();
  const abs = (path: string) => `${base}${path === "/" ? "" : path}`;

  return `# Meta Tronix

> Product engineering and digital transformation from Kathmandu, Nepal — web & mobile apps, SaaS, CRM, UI/UX, and cloud-native delivery.

## Main pages
- [Home](${abs("/")})
- [About](${abs("/about")})
- [Services](${abs("/services")})
- [Products](${abs("/products")})
- [Contact](${abs("/contact")})
- [Blog](${abs("/blog")})

## Machine-readable discovery
- [Sitemap](${abs("/sitemap.xml")})
- [RSS feed](${abs("/feed.xml")})
- [Robots](${abs("/robots.txt")})
- [humans.txt](${abs("/humans.txt")})

## Crawling
This site is intended to be indexed by search engines and AI discovery systems. For content concerns or attribution, use the contact page.
`.trim();
}
