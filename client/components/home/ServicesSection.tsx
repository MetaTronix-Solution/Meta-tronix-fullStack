"use client";

import { LayoutDashboard, Server, Sparkles } from "lucide-react";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    title: "Mobile App Development",
    benefit: "Native-quality experiences on iOS and Android.",
    icon: LayoutDashboard,
  },
  {
    title: "Custom CRM Systems",
    benefit: "Operational clarity with workflows tailored to your team.",
    icon: Server,
  },
  {
    title: "SaaS Product Development",
    benefit: "Billing, auth, analytics, and multi-tenant patterns done right.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <FadeInSection className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Services We Offer"
          subtitle="Three disciplines. One product mindset: ship value early, iterate with data, and harden for scale."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-brand-border bg-brand-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0EA5E9]/50 hover:shadow-soft-md"
            >
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] text-white shadow-soft-md group-hover:shadow-soft-md transition-shadow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-brand-body leading-relaxed">
                  {s.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
