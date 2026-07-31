"use client";

import Image from "next/image";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";

type IncubatorLogo = {
  src: string;
  alt: string;
};

const stats = [
  { label: "Projects Delivered", end: 50, suffix: "+" },
  { label: "Products Developed", end: 10, suffix: "+" },
  { label: "Happy Clients", end: 30, suffix: "+" },
  { label: "Industries Served", end: 8, suffix: "+" },
  { label: "Years Experience", end: 3, suffix: "+" },
];

type StatsSectionProps = {
  incubatorLogos?: IncubatorLogo[];
};

export function StatsSection({ incubatorLogos = [] }: StatsSectionProps) {
  return (
    <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
      <div className="mx-auto w-full max-w-7xl box-border px-4 sm:px-6 overflow-x-clip">
        <div className="mb-12 border-b border-brand-border pb-12 text-center md:mb-14 md:pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
            Incubated in
          </p>
          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy sm:text-2xl md:text-[1.75rem] text-balance">
          Incubated by the perfectionists
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg md:mt-5">
            Meta Tronix is truly incubated by perfectionists and alongside
            world-renowned organizations. The world believes in us and in our
            innovation.
          </p>
          {incubatorLogos.length > 0 ? (
            <ul className="mt-10 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-12 md:gap-x-14 md:mt-12">
              {incubatorLogos.map((logo) => (
                <li
                  key={logo.src}
                  className="flex h-12 shrink-0 items-center justify-center sm:h-14 md:h-16"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={88}
                    className="h-10 w-auto max-h-12 max-w-[min(200px,38vw)] object-contain opacity-85 grayscale transition-opacity duration-300 sm:h-12 sm:max-h-14 md:max-h-16 md:hover:opacity-100 md:hover:grayscale-0"
                    sizes="(max-width: 640px) 160px, 200px"
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <SectionHeading
          eyebrow="By the numbers"
          title="Impact you can measure"
          subtitle="A snapshot of engagements we’ve taken from discovery to production: products shipped, teams supported, and partnerships that keep growing after launch."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-brand-border bg-white p-6 md:p-8 text-center shadow-soft hover:shadow-soft-md transition-shadow duration-300"
            >
              <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs md:text-sm text-brand-body font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
