import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GradientButton } from "@/components/shared/GradientButton";
import { resolveAboutIcon } from "@/lib/about-icons";
import { getAboutPageMerged } from "@/lib/sanity/content";
import Image from "next/image";
import { AboutBackground } from "@/components/shared/AboutBackground";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Meta Tronix approaches product engineering, scalable architecture, and client-obsessed delivery from Kathmandu, Nepal.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const c = await getAboutPageMerged();

  return (
    <>
      <PageHero
        className="border-brand-border bg-mesh-light"
        innerClassName="max-w-3xl flex flex-col items-center text-center"
        backdrop={<AboutBackground />}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
          {c.heroEyebrow}
        </p>
        <div
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
          aria-hidden
        />
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-brand-navy text-balance sm:text-5xl md:text-6xl md:leading-[1.08]">
          {c.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-body text-balance md:text-lg md:leading-relaxed">
          {c.heroSubtitle}
        </p>
        <div className="mt-10 flex justify-center">
          <GradientButton href="/contact" variant="primary">
            Talk with our team
          </GradientButton>
        </div>
      </PageHero>

      <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={c.principlesEyebrow}
            title={c.principlesTitle}
            subtitle={c.principlesSubtitle}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {c.differentiators.map((item) => {
              const Icon = resolveAboutIcon(item.iconKey);
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand-border bg-white p-8 shadow-soft hover:shadow-soft-md transition-shadow"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-brand-body leading-relaxed">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-brand-navy/40" />
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent text-[#0EA5E9]">
                {c.leadershipEyebrow}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy leading-tight">
              {c.leadershipTitle}{" "}
              <span className="text-brand-accent text-[#0EA5E9]">CEO</span>
            </h2>

            <blockquote className="mt-8 border-l-2 border-brand-tealTo /40 pl-6">
              <p className="mt-6 text-brand-body leading-relaxed">{c.ceoBio}</p>
              <p className="mt-6 text-brand-body leading-relaxed">
                {c.ceoShortBio}
              </p>
            </blockquote>

            <blockquote className="mt-8 border-l-2 border-brand-tealTo /40 pl-6">
              <p className="text-lg md:text-xl italic text-brand-body leading-relaxed">
                {c.ceoQuote}
              </p>
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <p className="text-xl font-bold text-brand-navy">{c.ceoName}</p>
              <span className="text-brand-muted">·</span>
              <p className="text-sm  text-[#0EA5E9]">{c.ceoRole}</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="/CEO.jpeg"
              alt={c.ceoName}
              width={640}
              height={480}
              className="object-cover object-top"
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow={c.whyEyebrow} title={c.whyTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.whyPoints.map((w) => {
              const Icon = resolveAboutIcon(w.iconKey);
              return (
                <div
                  key={w.title}
                  className="rounded-2xl border border-brand-border bg-white p-6 hover:border-[#0EA5E9]/40 hover:shadow-soft-md transition-all shadow-soft"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] text-white flex items-center justify-center shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-brand-border border-l-4 border-l-[#0EA5E9] bg-white p-10 md:p-12 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0EA5E9] mb-3">
              {c.positioningEyebrow}
            </p>
            <p className="font-display text-2xl md:text-3xl text-brand-navy leading-relaxed">
              {c.positioningBody}
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow={c.timelineEyebrow}
            title={c.timelineTitle}
            subtitle={c.timelineSubtitle}
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400 via-cyan-400 to-transparent md:-translate-x-1/2" />
            <div className="space-y-10">
              {c.timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 pl-12 md:pl-0 ${
                      i % 2 === 0
                        ? "md:pr-10 md:text-right"
                        : "md:pl-10 md:text-left"
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 top-2 h-4 w-4 md:-translate-x-1/2 rounded-full border-2 border-cyan-500 bg-white shadow-[0_0_0_4px_rgba(14,165,233,0.15)]" />
                    <p className="text-sm font-bold text-sky-600">{t.year}</p>
                    <p className="font-display text-lg font-semibold text-slate-900 mt-1">
                      {t.label}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {t.detail}
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
