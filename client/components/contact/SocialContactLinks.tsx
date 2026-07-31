import { Github, Linkedin } from "lucide-react";
import {
  facebookUrl,
  githubUrl,
  linkedInUrl,
} from "@/lib/contact-info";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

const linkClass =
  "h-10 w-10 inline-flex items-center justify-center rounded-full border border-brand-border bg-white text-brand-muted hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition-colors";

type SocialContactLinksProps = {
  variant?: "footer" | "contact";
};

/**
 * Inline social/profile links — same targets as Footer, reusable on Contact sidebar.
 */
export function SocialContactLinks({ variant = "footer" }: SocialContactLinksProps) {
  const iconClass = variant === "contact" ? "h-[18px] w-[18px]" : "h-4 w-4";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Meta Tronix on LinkedIn"
      >
        <Linkedin className={iconClass} />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Meta Tronix on Facebook"
      >
        <FacebookIcon className={iconClass} />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Meta Tronix on GitHub"
      >
        <Github className={iconClass} />
      </a>
    </div>
  );
}
