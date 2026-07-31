import type { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Stable section wrapper (no Framer in RSC trees; avoids prerender / flight bugs). */
export function FadeInSection({ children, className, id }: FadeInSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
