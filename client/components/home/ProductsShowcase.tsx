"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { HomeProductsPayload } from "@/lib/sanity/defaults-home";
import { defaultHomeProducts } from "@/lib/sanity/defaults-home";

type ProductsShowcaseProps = {
  data?: HomeProductsPayload | null;
};

export function ProductsShowcase({ data }: ProductsShowcaseProps) {
  const content = data?.cards?.length ? data : defaultHomeProducts;

  return (
    <FadeInSection className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {content.cards.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl border border-brand-border bg-brand-card overflow-hidden shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="border-b border-brand-border border-l-4 border-l-[#0EA5E9] bg-brand-section px-5 py-5 md:px-6 md:py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
                      Product
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-brand-navy">
                      {p.name}
                    </p>
                  </div>
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-border bg-white text-brand-navy shadow-soft transition-colors group-hover:border-[#0EA5E9]/40 group-hover:text-[#0EA5E9]">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-body leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags ?? []).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brand-border bg-white px-2.5 py-0.5 text-xs font-medium text-brand-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products#${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0EA5E9] hover:text-[#06B6D4] transition-colors"
                >
                  View Product <span aria-hidden className="ml-0.5">{">"}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
