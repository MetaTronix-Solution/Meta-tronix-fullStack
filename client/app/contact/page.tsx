import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialContactLinks } from "@/components/contact/SocialContactLinks";
import { PageHero } from "@/components/layout/PageHero";
import { GradientButton } from "@/components/shared/GradientButton";
import { getContactPageMerged } from "@/lib/sanity/content";
import { ContactBackground } from "@/components/shared/ContactBackground";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Meta Tronix for product engineering, SaaS builds, and digital transformation in Kathmandu, Nepal.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const c = await getContactPageMerged();

  return (
    <div className="bg-white pb-20 md:pb-28">
      <PageHero
        className="border-brand-border bg-mesh-light"
        innerClassName="max-w-3xl flex flex-col items-center text-center"
        backdrop={<ContactBackground />}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
          {c.heroEyebrow}
        </p>
        <div
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
          aria-hidden
        />
        <h1 className="mt-6 w-full text-center font-display text-4xl font-bold leading-[1.12] text-brand-navy text-balance sm:text-5xl md:text-6xl md:leading-[1.08]">
          {c.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-brand-body text-balance md:text-lg md:leading-relaxed">
          {c.heroBody}
        </p>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <ContactForm />

          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Email
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    {c.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Phone
                  </p>
                  <a
                    href={c.phoneHref}
                    className="text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    {c.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Location
                  </p>
                  <div className="text-slate-900">
                    {c.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <a
                    href={c.mapsShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700 hover:text-cyan-900 hover:underline underline-offset-2"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                    Open pinned location in Google Maps
                  </a>
                </div>
              </div>
              <GradientButton
                href={c.whatsappHref}
                variant="whatsapp"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
              </GradientButton>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4">
                Connect with us
              </p>
              <SocialContactLinks variant="contact" />
            </div>

            <div className="rounded-2xl border border-dashed border-slate-200 overflow-hidden bg-white shadow-sm">
              <div className="aspect-video w-full relative">
                <iframe
                  title="Office map preview"
                  src={c.mapEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-slate-100 bg-slate-50/90 px-4 py-3">
                <a
                  href={c.mapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm ring-1 ring-slate-200 transition hover:bg-cyan-50 hover:ring-[#0EA5E9]/35"
                >
                  <ExternalLink
                    className="h-4 w-4 text-[#0EA5E9]"
                    aria-hidden
                  />
                  Open pinned location (Google Maps)
                </a>
              </div>
              <p className="px-4 py-3 text-xs text-slate-500 text-center border-t border-slate-100 bg-white">
                {c.mapNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
