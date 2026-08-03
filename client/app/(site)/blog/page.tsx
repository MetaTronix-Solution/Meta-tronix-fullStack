import type { Metadata } from "next";
import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getBlogPostsMerged } from "@/lib/sanity/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on product engineering, startups, design, AI, and IoT from the Meta Tronix team.",
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function BlogPage() {
  const posts = await getBlogPostsMerged();
  return <BlogPageClient posts={posts} />;
}
