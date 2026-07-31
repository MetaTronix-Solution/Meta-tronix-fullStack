import type { MetadataRoute } from "next";
import { getBlogPostsMerged } from "@/lib/sanity/content";
import { getSiteUrl } from "@/lib/site-url";

/** Revalidate sitemap when using ISR / hosting cache. */
export const revalidate = 3600;

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type StaticRow = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

const staticRoutes: StaticRow[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.95, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
  /* Discovery / syndication (optional in sitemaps; helps monitors & aggregators) */
  { path: "/feed.xml", priority: 0.55, changeFrequency: "weekly" },
  { path: "/llms.txt", priority: 0.45, changeFrequency: "monthly" },
  { path: "/humans.txt", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  const posts = await getBlogPostsMerged();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date + "T12:00:00.000Z"),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.75 : 0.65,
  }));

  return [...staticEntries, ...blogEntries];
}
