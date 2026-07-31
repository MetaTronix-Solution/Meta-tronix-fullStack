"use client";

import Image from "next/image";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Partner } from "@/lib/partners";
import { partners as defaultPartners } from "@/lib/partners";

type TrustedByProps = {
  title?: string;
  subtitle?: string;
  partners?: Partner[] | null;
};

export function TrustedBy({
  title = "Trusted By Organizations",
  subtitle = "We collaborate with colleges, communities, and technology partners to mentor builders and ship production systems.",
  partners: partnersProp,
}: TrustedByProps) {
  const partners = partnersProp?.length ? partnersProp : defaultPartners;

  return (
    <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={title} subtitle={subtitle} />

        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-14 sm:gap-x-16 sm:gap-y-16 md:gap-x-20 md:gap-y-20 lg:gap-x-28">
          {partners.map((p) => (
            <li
              key={`${p.logo}-${p.name}`}
              className="group flex max-w-[14rem] flex-col items-center gap-4 text-center sm:max-w-[16rem] md:max-w-[17rem]"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={280}
                height={112}
                draggable={false}
                className="h-16 w-auto max-h-20 object-contain grayscale mix-blend-multiply opacity-95 transition-[filter,opacity,mix-blend-mode] duration-300 ease-out group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 sm:h-[4.75rem] sm:max-h-[5.25rem] md:h-20 md:max-h-[5.5rem] lg:h-[5.5rem] lg:max-h-24"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
              />
              <p className="text-xs font-medium leading-snug text-brand-muted sm:text-sm">
                {p.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
