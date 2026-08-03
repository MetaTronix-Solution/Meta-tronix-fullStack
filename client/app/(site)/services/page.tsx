import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { GradientButton } from "@/components/shared/GradientButton";
import { serviceDetails } from "@/lib/services";
import { ServicesBackground } from "@/components/shared/ServicesBackground";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Meta Tronix services: web, mobile, CRM, SaaS, UI/UX, and cloud delivery. Explore how we work and request a tailored quote.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-white pb-20 md:pb-28">
      <PageHero
        className="border-brand-border bg-mesh-light bg-white"
        innerClassName="max-w-3xl flex flex-col items-center text-center"
        backdrop={<ServicesBackground />}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
          Services
        </p>
        <div
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
          aria-hidden
        />
        <h1 className="mt-6 w-full text-center font-display text-4xl font-bold leading-[1.12] text-brand-navy text-balance sm:text-5xl md:text-6xl md:leading-[1.08]">
          Engineering Partnerships, End to End
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-brand-body text-balance md:text-lg md:leading-relaxed">
          Each service below is a mini landing view: what it is, who it is for,
          how we execute, and how we price engagements transparently.
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 pt-14 md:pt-20">
        <div className="space-y-16 md:space-y-20">
          {serviceDetails.map((s, index) => (
            <FadeInSection key={s.slug}>
              <section className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-md">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-slate-900">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {s.summary}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-cyan-800 uppercase tracking-wide">
                      Pricing
                    </p>
                    <p className="mt-1 text-slate-600 text-sm">
                      {s.pricingHint}
                    </p>
                    <div className="mt-8">
                      <GradientButton href="/contact" variant="primary">
                        Get a Quote
                      </GradientButton>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8 md:p-10 space-y-8 bg-white">
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                        Who it&apos;s for
                      </h3>
                      <p className="mt-2 text-slate-700 leading-relaxed">
                        {s.audience}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                        Our process
                      </h3>
                      <ol className="mt-4 space-y-4">
                        {s.process.map((step, i) => (
                          <li key={step} className="flex gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 border border-sky-200 text-sm font-bold text-sky-800">
                              {i + 1}
                            </span>
                            <p className="text-slate-700 leading-relaxed pt-1">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    {index === serviceDetails.length - 1 ? (
                      <p className="text-xs text-slate-500 border-t border-slate-100 pt-6">
                        Replace placeholder pricing language with your approved
                        rate card when ready. We scope every engagement after
                        discovery.
                      </p>
                    ) : null}
                  </div>
                </div>
              </section>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
