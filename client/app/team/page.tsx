import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PageHero } from "@/components/layout/PageHero";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GradientButton } from "@/components/shared/GradientButton";
import { TeamBackground } from "@/components/shared/TeamBackground";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the engineers and designers behind Meta Tronix the team building product engineering and digital transformation work from Kathmandu, Nepal.",
  alternates: { canonical: "/team" },
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: "ronit-shrivastav",
    name: "Ronit Shrivastav",
    role: "Frontend Engineer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/CEO.jpeg",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "razu-shrestha",
    name: "Er. Razu Shrestha",
    role: "Frontend Engineer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/team/razu.jpg",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "ayush-karki",
    name: "Ayush karki",
    role: "Full Stack Developer",
    bio: "Builds and scales backend systems with Node.js, Express, and MongoDB focused on clean data modeling and API design.",
    photo: "/team/ayush.jpeg",
    socials: {
      linkedin: "#",
      github: "#",
      email: "#",
    },
  },
  {
    id: "prashant-sharma",
    name: "Prashant Sharma",
    role: "Senior Flutter Developer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/team/Prashant.jpeg",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "deepak-shrestha",
    name: "Deepak shrestha",
    role: "Senior Frontend developer",
    bio: "Leads discovery and design systems work, keeping every product visually consistent and easy to use.",
    photo: "/team/deepak.jpeg",
    socials: {
      linkedin: "#",
    },
  },
  {
    id: "badal-chand",
    name: "Badal Chand",
    role: "Full stack developer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/team/badal.jpeg",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "ajay-tamang",
    name: "Ajay Tamang",
    role: "Backend developer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/team/ajay.png",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "team-member-3",
    name: "Team Member",
    role: "Frontend Engineer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/team/member-2.jpg",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "team-member-4",
    name: "Team Member",
    role: "Frontend Engineer",
    bio: "Crafts fast, accessible interfaces with React and Next.js, translating designs into production-ready UI.",
    photo: "/team/member-2.jpg",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        className="border-brand-border bg-mesh-light"
        innerClassName="max-w-3xl flex flex-col items-center text-center"
        backdrop={<TeamBackground />}
      >
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#0EA5E9]">
          Our Team
        </p>
        <div
          className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
          aria-hidden
        />
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-brand-navy text-balance sm:text-5xl md:text-6xl md:leading-[1.08]">
          The People Behind Meta Tronix
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-body text-balance md:text-lg md:leading-relaxed">
          A small, senior-led team of engineers and designers who ship
          production software not just prototypes.
        </p>
      </PageHero>

      {/* Team cards */}
      <FadeInSection className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Meet the team"
            title="Engineers Who Own the Outcome"
            subtitle="Every person below is directly involved in the products we ship no hidden bench of subcontractors."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id} // ← unique now
                className="rounded-2xl border border-brand-border bg-white p-6 shadow-soft hover:shadow-soft-md transition-shadow"
              >
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-brand-border">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-brand-navy">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#0EA5E9]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-brand-body leading-relaxed">
                  {member.bio}
                </p>

                {member.socials && (
                  <div className="mt-5 flex gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-slate-500 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition-colors"
                      >
                        <FaLinkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on GitHub`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-slate-500 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition-colors"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        aria-label={`Email ${member.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border text-slate-500 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Join the team CTA */}
      <FadeInSection className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0EA5E9]">
            We&apos;re growing
          </p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
            Want to build with us?
          </h2>
          <p className="mt-3 text-brand-body leading-relaxed max-w-xl mx-auto">
            We work with a small number of engineers and designers who care
            about craft as much as we do. Reach out if that sounds like you.
          </p>
          <div className="mt-8 flex justify-center">
            <GradientButton href="/contact" variant="primary">
              Get in touch
            </GradientButton>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
