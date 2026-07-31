import type { PortableTextBlock } from "@portabletext/types";
import {
  defaultAboutPageContent,
  type AboutPageContent,
  type AboutDifferentiator,
  type AboutWhyPoint,
  type StackStripItem,
  type TimelineEntry,
} from "@/lib/about-defaults";
import type { BlogCategory, BlogPost } from "@/lib/blog";
import { blogPosts as staticBlogPosts } from "@/lib/blog";
import {
  defaultContactPageContent,
  type ContactPageContent,
} from "@/lib/contact-defaults";
import {
  defaultHomeProducts,
  defaultTechnologyMaster,
  defaultTestimonials,
  defaultTrustedPartners,
  type HomeProductsPayload,
  type TechnologyMasterPayload,
  type TestimonialsPayload,
} from "@/lib/sanity/defaults-home";
import { getPublicCollabPartners } from "@/lib/collab-public-partners";
import type { Partner } from "@/lib/partners";
import type { Product } from "@/lib/products";
import { products as staticProducts } from "@/lib/products";
import { sanityFetch } from "./client";
import {
  qAboutPage,
  qBlogPostBySlug,
  qBlogPosts,
  qContactPage,
  qHomeProducts,
  qProductDetails,
  qProductsPage,
  qTechnologyMaster,
  qTestimonials,
  qTrustedBy,
} from "./queries";

const blogCategories: BlogCategory[] = [
  "All",
  "Tech",
  "Startup",
  "AI",
  "Design",
  "IoT",
];

function isBlogCategory(v: string): v is Exclude<BlogCategory, "All"> {
  return blogCategories.includes(v as BlogCategory) && v !== "All";
}

export async function getTechnologyMasterMerged(): Promise<TechnologyMasterPayload> {
  const r = await sanityFetch<TechnologyMasterPayload>(qTechnologyMaster);
  if (r?.groups?.length) return r;
  return defaultTechnologyMaster;
}

export async function getHomeProductsMerged(): Promise<HomeProductsPayload> {
  const r = await sanityFetch<HomeProductsPayload>(qHomeProducts);
  if (r?.cards?.length) return r;
  return defaultHomeProducts;
}

type TrustedOrgRow = { name: string; logoUrl: string | null };

export type TrustedBySection = {
  title: string;
  subtitle: string;
  partners: Partner[];
};

const defaultTrustedTitles = {
  title: "Trusted By Organizations",
  subtitle:
    "We collaborate with colleges, communities, and technology partners to mentor builders and ship production systems.",
};

export async function getTrustedBySectionMerged(): Promise<TrustedBySection> {
  const r = await sanityFetch<{
    title?: string;
    subtitle?: string;
    organizations?: TrustedOrgRow[];
  }>(qTrustedBy);
  const orgs = r?.organizations;
  const mapped: Partner[] = orgs?.length
    ? orgs
        .filter((o) => o.name && o.logoUrl)
        .map((o) => ({ name: o.name, logo: o.logoUrl as string }))
    : [];
  const collabPartners = getPublicCollabPartners();
  return {
    title: r?.title || defaultTrustedTitles.title,
    subtitle: r?.subtitle || defaultTrustedTitles.subtitle,
    partners: collabPartners.length
      ? collabPartners
      : mapped.length
        ? mapped
        : defaultTrustedPartners,
  };
}

export async function getTestimonialsMerged(): Promise<TestimonialsPayload> {
  const r = await sanityFetch<TestimonialsPayload>(qTestimonials);
  if (r?.items?.length) return r;
  return defaultTestimonials;
}

export type ProductsPageHero = {
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
};

const defaultProductsHero: ProductsPageHero = {
  heroKicker: "Portfolio",
  heroTitle: "Products We've Built",
  heroLead:
    "Each build below is structured like a startup landing story: problem, leverage points, and the stack that makes it real.",
};

export async function getProductsPageHeroMerged(): Promise<ProductsPageHero> {
  const r = await sanityFetch<Partial<ProductsPageHero>>(qProductsPage);
  return {
    heroKicker: r?.heroKicker || defaultProductsHero.heroKicker,
    heroTitle: r?.heroTitle || defaultProductsHero.heroTitle,
    heroLead: r?.heroLead || defaultProductsHero.heroLead,
  };
}

type ProductDetailRow = {
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

export async function getProductsMerged(): Promise<Product[]> {
  const rows = await sanityFetch<ProductDetailRow[]>(qProductDetails);
  if (!rows?.length) return staticProducts;
  return rows.map((p) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    problem: p.problem,
    features: p.features ?? [],
    tech: p.tech ?? [],
    icon: p.icon,
    preview: p.preview,
    url: p.url,
  }));
}

export type BlogPostDetail = BlogPost & { body?: PortableTextBlock[] | null };

type BlogRow = {
  slug: string;
  title: string;
  hook: string;
  category: string;
  readMinutes: number;
  date: string;
  featured?: boolean;
  gradient: string;
};

function rowToBlogPost(row: BlogRow): BlogPost {
  const cat = isBlogCategory(row.category) ? row.category : "Tech";
  return {
    slug: row.slug,
    title: row.title,
    hook: row.hook,
    category: cat,
    readMinutes: row.readMinutes ?? 5,
    date: row.date || "",
    featured: row.featured,
    gradient: row.gradient || "from-slate-800 to-sky-700",
  };
}

export async function getBlogPostsMerged(): Promise<BlogPost[]> {
  const rows = await sanityFetch<BlogRow[]>(qBlogPosts);
  if (!rows?.length) return staticBlogPosts;
  return rows.map(rowToBlogPost);
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getBlogPostsMerged();
  return posts.map((p) => p.slug);
}

export async function getBlogPostDetailMerged(
  slug: string,
): Promise<BlogPostDetail | null> {
  const row = await sanityFetch<BlogRow & { body?: PortableTextBlock[] }>(
    qBlogPostBySlug,
    { slug },
  );
  if (row?.slug) {
    return { ...rowToBlogPost(row), body: row.body ?? null };
  }
  const fallback = staticBlogPosts.find((p) => p.slug === slug);
  if (!fallback) return null;
  return { ...fallback, body: null };
}

function mergeAbout(raw: Partial<AboutPageContent> | null): AboutPageContent {
  const d = defaultAboutPageContent;
  if (!raw) return d;
  const pick = <K extends keyof AboutPageContent>(k: K) => raw[k] ?? d[k];
  const pickArr = <T>(
    k: keyof AboutPageContent,
    fallback: T[],
    guard: (x: unknown) => x is T,
  ): T[] => {
    const v = raw[k];
    return Array.isArray(v) && v.length && v.every(guard)
      ? (v as T[])
      : fallback;
  };
  return {
    heroEyebrow: pick("heroEyebrow"),
    heroTitle: pick("heroTitle"),
    heroSubtitle: pick("heroSubtitle"),
    principlesEyebrow: pick("principlesEyebrow"),
    principlesTitle: pick("principlesTitle"),
    principlesSubtitle: pick("principlesSubtitle"),
    differentiators: pickArr(
      "differentiators",
      d.differentiators,
      (x): x is AboutDifferentiator =>
        typeof x === "object" &&
        x !== null &&
        "title" in x &&
        "body" in x &&
        "iconKey" in x,
    ),
    leadershipEyebrow: pick("leadershipEyebrow"),
    leadershipTitle: pick("leadershipTitle"),
    leadershipSubtitle: pick("leadershipSubtitle"),
    ceoAvatarInitials: pick("ceoAvatarInitials"),
    ceoName: pick("ceoName"),
    ceoRole: pick("ceoRole"),
    ceoBio: pick("ceoBio"),
    ceoShortBio: pick("ceoShortBio"),
    ceoQuote: pick("ceoQuote"),
    ceoQuoteAttribution: pick("ceoQuoteAttribution"),
    ceoQuoteRole: pick("ceoQuoteRole"),
    whyEyebrow: pick("whyEyebrow"),
    whyTitle: pick("whyTitle"),
    whyPoints: pickArr(
      "whyPoints",
      d.whyPoints,
      (x): x is AboutWhyPoint =>
        typeof x === "object" &&
        x !== null &&
        "title" in x &&
        "desc" in x &&
        "iconKey" in x,
    ),
    positioningEyebrow: pick("positioningEyebrow"),
    positioningBody: pick("positioningBody"),
    timelineEyebrow: pick("timelineEyebrow"),
    timelineTitle: pick("timelineTitle"),
    timelineSubtitle: pick("timelineSubtitle"),
    timeline: pickArr(
      "timeline",
      d.timeline,
      (x): x is TimelineEntry =>
        typeof x === "object" &&
        x !== null &&
        "year" in x &&
        "label" in x &&
        "detail" in x,
    ),
    stackEyebrow: pick("stackEyebrow"),
    stackTitle: pick("stackTitle"),
    stackSubtitle: pick("stackSubtitle"),
    stackStrip: pickArr(
      "stackStrip",
      d.stackStrip,
      (x): x is StackStripItem =>
        typeof x === "object" && x !== null && "iconKey" in x && "label" in x,
    ),
  };
}

export async function getAboutPageMerged(): Promise<AboutPageContent> {
  const raw = await sanityFetch<Partial<AboutPageContent>>(qAboutPage);
  return mergeAbout(raw);
}

function mergeContact(
  raw: Partial<ContactPageContent> | null,
): ContactPageContent {
  const d = defaultContactPageContent;
  if (!raw) return d;
  const lines = Array.isArray(raw.addressLines)
    ? raw.addressLines.filter(
        (x): x is string => typeof x === "string" && x.length > 0,
      )
    : d.addressLines;
  return {
    heroEyebrow: raw.heroEyebrow || d.heroEyebrow,
    heroTitle: raw.heroTitle || d.heroTitle,
    heroBody: raw.heroBody || d.heroBody,
    email: raw.email || d.email,
    phoneDisplay: raw.phoneDisplay || d.phoneDisplay,
    phoneHref: raw.phoneHref || d.phoneHref,
    whatsappHref: raw.whatsappHref || d.whatsappHref,
    addressLines: lines.length ? lines : d.addressLines,
    mapEmbedSrc: raw.mapEmbedSrc || d.mapEmbedSrc,
    mapsShareUrl: raw.mapsShareUrl || d.mapsShareUrl,
    mapNote: raw.mapNote || d.mapNote,
  };
}

export async function getContactPageMerged(): Promise<ContactPageContent> {
  const raw = await sanityFetch<Partial<ContactPageContent>>(qContactPage);
  return mergeContact(raw);
}
