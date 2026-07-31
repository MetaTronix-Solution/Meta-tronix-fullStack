import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { openRoles, getOpenRoleBySlug } from "@/lib/careers-data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return openRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const role = getOpenRoleBySlug(params.slug);
  if (!role) return { title: "Role" };
  return {
    title: role.title,
    description: role.summary,
    alternates: { canonical: `/careers/${role.slug}` },
  };
}

export default function CareerRolePage({ params }: Props) {
  const role = getOpenRoleBySlug(params.slug);
  if (!role) notFound();

  return (
    <article className="bg-white pb-20 md:pb-28">
      <div className="bg-white pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/careers"
            className="text-sm font-medium text-[#0EA5E9] hover:text-[#06B6D4] transition-colors"
          >
            ← Back to careers
          </Link>
          <header className="mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
              {role.department}
            </p>
            <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight text-balance">
              {role.title}
            </h1>
            <p className="mt-4 text-lg text-brand-body leading-relaxed">
              {role.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {role.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {role.type}
              </span>
            </div>
          </header>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-10 md:pt-14">
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy">
            What you&apos;ll do
          </h2>
          <ul className="mt-4 space-y-3">
            {role.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-brand-body leading-relaxed"
              >
                <CheckCircle2 className="h-5 w-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-navy">
            What we&apos;re looking for
          </h2>
          <ul className="mt-4 space-y-3">
            {role.requirements.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-brand-body leading-relaxed"
              >
                <CheckCircle2 className="h-5 w-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {role.niceToHave && role.niceToHave.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-xl font-bold text-brand-navy">
              Nice to have
            </h2>
            <ul className="mt-4 space-y-3">
              {role.niceToHave.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-brand-body leading-relaxed"
                >
                  <CheckCircle2 className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 rounded-2xl border border-brand-border bg-brand-section p-8 md:p-10 text-center">
          <h3 className="font-display text-lg font-bold text-brand-navy">
            Ready to apply?
          </h3>
          <p className="mt-2 text-sm text-brand-body leading-relaxed">
            Send us your resume and a bit about what you&apos;d want to build
            with us.
          </p>
          <div className="mt-6 flex justify-center">
            <GradientButton href="/contact" variant="primary">
              Apply for this role
            </GradientButton>
          </div>
        </div>
      </div>
    </article>
  );
}
