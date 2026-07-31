import Link from "next/link";
import { Mail, MapPin, Phone, Rss } from "lucide-react";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { SocialContactLinks } from "@/components/contact/SocialContactLinks";
import { navLinks } from "@/lib/nav";
import {
  googleMapsShareUrl,
  siteEmail,
  sitePhoneDisplay,
  sitePhoneHref,
} from "@/lib/contact-info";

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom CRM Systems",
  "SaaS Product Development",
  "UI/UX Design",
  "Cloud & Deployment",
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-footer">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <SiteLogo />
          <p className="text-sm text-brand-body leading-relaxed max-w-xs">
            We don&apos;t just develop; we build scalable digital products.
            Product engineering and digital transformation from Nepal, for the
            world.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <SocialContactLinks />
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-brand-body hover:text-[#0EA5E9] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-brand-body hover:text-[#0EA5E9] transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-brand-body">
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-[#0EA5E9] shrink-0 mt-0.5" />
              <a
                href={`mailto:${siteEmail}`}
                className="hover:text-[#0EA5E9] transition-colors"
              >
                {siteEmail}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-[#0EA5E9] shrink-0 mt-0.5" />
              <a
                href={sitePhoneHref}
                className="hover:text-[#0EA5E9] transition-colors"
              >
                {sitePhoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-[#0EA5E9] shrink-0 mt-0.5" />
              <a
                href={googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-2 text-brand-body hover:text-[#0EA5E9] underline-offset-4 hover:underline transition-colors"
              >
                <span className="text-brand-navy font-medium leading-snug">
                  Kathmandu, Nepal
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border bg-brand-footer">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4 sm:flex-row items-center justify-between text-xs text-brand-muted">
          <p className="text-brand-navy font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Meta Tronix. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/feed.xml"
              className="inline-flex items-center gap-1.5 text-brand-muted hover:text-[#0EA5E9] transition-colors"
            >
              <Rss className="h-3.5 w-3.5" aria-hidden />
              RSS feed
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-[#0EA5E9] transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/llms.txt"
              className="hover:text-[#0EA5E9] transition-colors"
            >
              llms.txt
            </Link>
            <span className="hidden sm:inline text-brand-border">|</span>
            <span className="sm:ml-0">Built for performance. Engineered for scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
