import type { ReactNode } from "react";

type PageHeroProps = {
  children: ReactNode;
  /** Width + layout/Tailwind for the animated hero content (typography stacks, flex gaps). */
  innerClassName?: string;
  /** Extra classes on the outer `<section>`. */
  className?: string;
  /** Full-bleed layer behind content (e.g. dot grid). Must use `absolute inset-0`. */
  backdrop?: ReactNode;
};

/**
 * Full-viewport hero band (`svh`). Content uses stacked 3D perspective + CSS `animate-hero-*` (see `tailwind.config`).
 * Respects `prefers-reduced-motion` via `globals.css`.
 */
export function PageHero({
  children,
  innerClassName = "max-w-7xl",
  className = "",
  backdrop,
}: PageHeroProps) {
  return (
    <section
      className={`relative min-h-[100svh] flex flex-col justify-center overflow-hidden border-b border-brand-border bg-white pt-44 pb-12 md:pt-48 md:pb-16 ${className}`}
    >
      {backdrop}
      <div className="relative z-10 mx-auto w-full px-6 perspective-[min(1180px,96vw)] [transform-style:preserve-3d]">
        <div
          className={`animate-hero-content mx-auto w-full max-w-full [transform-origin:center_top] ${innerClassName}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
