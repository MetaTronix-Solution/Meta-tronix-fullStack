"use client";

import { useMemo } from "react";

import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { TechnologyMasterPayload } from "@/lib/sanity/defaults-home";
import { defaultTechnologyMaster } from "@/lib/sanity/defaults-home";
import { getTechIcon } from "@/lib/tech-icon-map";

type TechStackProps = {
  data?: TechnologyMasterPayload | null;
};

/**
 * Merge all Sanity/default groups into one centered “stack” strip while preserving order
 * (frontend → backend → data → cloud) and hiding duplicate icon keys.
 */
function flattenTechStack(groups: TechnologyMasterPayload["groups"]) {
  const seen = new Set<string>();
  return groups.flatMap((g) => g.items).filter((item) => {
    if (seen.has(item.iconKey)) return false;
    seen.add(item.iconKey);
    return true;
  });
}

export function TechStack({ data }: TechStackProps) {
  const content = data?.groups?.length ? data : defaultTechnologyMaster;

  const stackItems = useMemo(
    () => flattenTechStack(content.groups),
    [content.groups]
  );

  return (
    <FadeInSection className="py-20 md:py-28 bg-brand-section border-y border-brand-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title={content.sectionTitle}
          subtitle={content.sectionSubtitle}
        />

        <div className="rounded-2xl border border-brand-border bg-white px-6 py-8 md:px-10 md:py-10 shadow-soft md:shadow-soft-md">
          <div className="flex flex-wrap justify-center gap-x-9 gap-y-10 perspective-[920px] sm:gap-x-11 md:gap-x-12">
            {stackItems.map(({ name, iconKey }) => {
              const Icon = getTechIcon(iconKey);
              return (
                <div
                  key={iconKey}
                  title={name}
                  className="group flex shrink-0 flex-col items-center gap-2 text-center max-[380px]:w-[calc(50%-1.25rem)]"
                >
                  <div className="flex h-14 w-14 cursor-default items-center justify-center rounded-xl border border-brand-border bg-brand-section transition-[transform,box-shadow,border-color,background-color,color] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,1)] [transform-style:preserve-3d] hover:z-[1] hover:-translate-y-1 hover:border-[#0EA5E9]/35 hover:bg-white hover:shadow-soft-md hover:[transform:translateY(-6px)_rotateX(11deg)_scale(1.04)] sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 text-brand-body transition-colors duration-300 group-hover:text-[#0EA5E9] sm:h-8 sm:w-8" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted md:text-[11px]">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
