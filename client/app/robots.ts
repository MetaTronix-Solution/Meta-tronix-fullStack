import type { MetadataRoute } from "next";
import { ROBOTS_EXPLICIT_USER_AGENTS } from "@/lib/robots-crawlers";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const host = new URL(base).host;

  return {
    host,
    rules: ROBOTS_EXPLICIT_USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${base}/sitemap.xml`,
  };
}
