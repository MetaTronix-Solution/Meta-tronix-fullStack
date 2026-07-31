"use client";

import { Quote, Star } from "lucide-react";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { TestimonialsPayload } from "@/lib/sanity/defaults-home";
import { defaultTestimonials } from "@/lib/sanity/defaults-home";

type TestimonialsProps = {
  data?: TestimonialsPayload | null;
};

export function Testimonials({ data }: TestimonialsProps) {
  const content = data?.items?.length ? data : defaultTestimonials;

  return (
    <FadeInSection className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {content.items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-brand-border bg-white p-6 md:p-8 flex flex-col shadow-soft hover:shadow-soft-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <Quote
                  className="h-7 w-7 text-[#0EA5E9] shrink-0"
                  aria-hidden
                />
                <div className="flex gap-0.5 text-brand-orange">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-orange text-brand-orange"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-sm md:text-base text-brand-body leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-brand-border">
                <p className="font-bold text-brand-navy">{t.name}</p>
                <p className="text-xs text-brand-muted mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
