import { getBlogPostsMerged } from "@/lib/sanity/content";
import { getSiteUrl } from "@/lib/site-url";
import { escapeXml } from "@/lib/xml-escape";

export const revalidate = 3600;

export async function GET() {
  const base = getSiteUrl();
  const posts = await getBlogPostsMerged();

  const items = posts
    .map((post) => {
      const link = `${base}/blog/${post.slug}`;
      const pubDate = new Date(post.date + "T12:00:00.000Z").toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.hook)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Meta Tronix — Blog</title>
    <link>${escapeXml(`${base}/blog`)}</link>
    <description>Articles on product engineering, startups, design, AI, and IoT from Meta Tronix.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(`${base}/feed.xml`)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
