import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GradientButton } from "@/components/shared/GradientButton";
import { resolveAboutIcon } from "@/lib/about-icons";
import { CareersBackground } from "@/components/shared/CareersBackground";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Meta Tronix open roles for engineers and designers building product engineering and digital transformation work from Kathmandu, Nepal.",
  alternates: { canonical: "/careers" },
};

const benefits = [
  {
    title: "Real ownership",
    body: "You ship straight to production. No layers of approval between you and the client.",
    iconKey: "rocket",
  },
  {
    title: "Senior mentorship",
    body: "Work directly with engineers who've shipped and scaled production systems.",
    iconKey: "layers",
  },
  {
    title: "Flexible hours",
    body: "Async-first culture. We care about outcomes, not hours logged online.",
    iconKey: "gauge",
  },
  {
    title: "Growth budget",
    body: "Courses, conferences, and tools invest in getting better at your craft.",
    iconKey: "heartHandshake",
  },
  {
    title: "Modern stack",
    body: "React, Next.js, Node, and cloud-native infrastructure no legacy systems to babysit.",
    iconKey: "cpu",
  },
  {
    title: "Small, focused team",
    body: "No bureaucracy. Decisions happen fast and your voice actually counts.",
    iconKey: "shieldCheck",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        className="border-brand-border bg-mesh-light"
        innerClassName="max-w-3xl flex flex-col items-center text-center"
        backdrop={<CareersBackground />}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
          Careers
        </p>
        <div
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
          aria-hidden
        />
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-brand-navy text-balance sm:text-5xl md:text-6xl md:leading-[1.08]">
          Meta Tronix careers
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-body text-balance md:text-lg md:leading-relaxed">
          We&apos;re a small, senior-led team looking for engineers and
          designers who care about craft as much as we do.
        </p>
        <div className="mt-10 flex justify-center">
          <GradientButton href="#open-roles" variant="primary">
            View open roles
          </GradientButton>
        </div>
      </PageHero>

      {/* Why work here */}
      <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why Meta Tronix"
            title="What It's Like to Work Here"
            subtitle="No red tape, no bloated processes just real product work and a team that trusts you to own it."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => {
              const Icon = resolveAboutIcon(item.iconKey);
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand-border bg-white p-6 shadow-soft hover:shadow-soft-md transition-shadow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* Open roles */}
      <FadeInSection className="py-20 md:py-28 bg-white">
        <div id="open-roles" className="max-w-5xl mx-auto px-6 scroll-mt-24">
          <SectionHeading
            eyebrow="Open positions"
            title="Current Openings"
            subtitle="Don't see a role that fits? We're always open to hearing from strong engineers and designers."
          />

          <div className="rounded-2xl border border-dashed border-brand-border bg-brand-section p-10 text-center">
            <p className="text-brand-body">
              No open roles right now but we&apos;d still love to hear from you.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Open application CTA */}
      <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
            Don&apos;t see your role listed?
          </h2>
          <p className="mt-3 text-brand-body leading-relaxed max-w-xl mx-auto">
            We&apos;re always interested in meeting strong engineers and
            designers. Send us your work and tell us what you&apos;d want to
            build.
          </p>
          <div className="mt-8 flex justify-center">
            <GradientButton href="/contact" variant="primary">
              Send an open application
            </GradientButton>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
