import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FadeInSection } from "@/components/shared/FadeInSection";
import {
  getProductsMerged,
  getProductsPageHeroMerged,
} from "@/lib/sanity/content";
import Image from "next/image";
import { TechBackground } from "@/components/shared/TechBackground";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore products engineered by Meta Tronix: platforms for innovation, connection, consultancy, and events.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const [hero, products] = await Promise.all([
    getProductsPageHeroMerged(),
    getProductsMerged(),
  ]);

  return (
    <div className="bg-white pb-20 md:pb-28">
      <PageHero
        className="border-brand-border bg-mesh-light"
        innerClassName="max-w-3xl flex flex-col items-center text-center"
        backdrop={<TechBackground />}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
          {hero.heroKicker}
        </p>
        <div
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
          aria-hidden
        />
        <h1 className="mt-6 w-full text-center font-display text-4xl font-bold leading-[1.12] text-brand-navy text-balance sm:text-5xl md:text-6xl md:leading-[1.08]">
          {hero.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-brand-body text-balance md:text-lg md:leading-relaxed">
          {hero.heroLead}
        </p>
      </PageHero>

      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 text-center">
        <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
          Real builds, real problems solved
        </h2>
        <p className="mt-3 text-brand-body text-sm md:text-base leading-relaxed text-balance">
          No filler slides every product below shipped to solve a specific
          problem, backed by the stack that made it possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-14 md:pt-20">
        <div className="space-y-20 md:space-y-24">
          {products.map((p) => (
            <FadeInSection key={p.id} id={p.id}>
              <article className="rounded-3xl border border-brand-border bg-white overflow-hidden shadow-soft-md">
                <div className="border-b border-brand-border border-l-4 border-l-[#0EA5E9] bg-brand-section px-6 py-8 md:px-10 md:py-10">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-2xl border border-brand-border bg-white flex items-center justify-center shadow-soft shrink-0 overflow-hidden">
                        <Image
                          src={p.icon}
                          alt={`${p.name} icon`}
                          width={56}
                          height={56}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
                          Product
                        </p>
                        <h2 className="mt-1 font-display text-3xl md:text-4xl font-bold text-brand-navy">
                          {p.name}
                        </h2>
                        <p className="text-brand-body text-sm md:text-base mt-2 max-w-xl leading-relaxed">
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                      Problem it solves
                    </h3>
                    <p className="mt-2 text-slate-700 leading-relaxed">
                      {p.problem}
                    </p>
                    <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-cyan-700">
                      Key features
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex gap-3 text-slate-700 text-sm md:text-base"
                        >
                          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between gap-8">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                        Tech used
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                      <Image
                        src={p.preview}
                        alt={`${p.name} preview`}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-4 w-full">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 font-semibold text-white transition hover:opacity-90"
                        >
                          Visit Product
                        </a>
                      ) : (
                        <div className="flex h-11 w-full items-center justify-center rounded-xl border border-brand-border bg-brand-section text-sm font-medium text-slate-500 ">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
