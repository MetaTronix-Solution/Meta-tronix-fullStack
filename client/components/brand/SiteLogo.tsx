"use client";

import Image from "next/image";
import Link from "next/link";

/** Site identity mark — `public/metatronixlogo.png` */
const SITE_LOGO = "/metatronixlogo.png";

type SiteLogoProps = {
  /** LCP: set true only for header / above-the-fold */
  priority?: boolean;
  /** When false, renders the image only (no link). */
  withLink?: boolean;
  /** Box size; tailwind utilities must appear as literals in source (JIT). */
  className?: string;
  /** Hint for responsive `sizes` — match visible width (~px). */
  sizes?: string;
  onClick?: () => void;
};

/**
 * Intrinsics tuned for navbar; `w-auto` preserves wide wordmarks.
 * Default box sizes are literal Tailwind strings so JIT always emits them.
 */
const defaultImgClass =
  "h-10 w-auto max-h-10 max-w-[10rem] object-contain object-left sm:h-11 sm:max-h-11 sm:max-w-[11rem] md:h-12 md:max-h-12 lg:max-w-[12rem]";

export function SiteLogo({
  priority = false,
  withLink = true,
  className,
  sizes: sizesProp,
  onClick,
}: SiteLogoProps) {
  const sizes =
    sizesProp ??
    "(max-width: 640px) 128px, (max-width: 1024px) 156px, 192px";

  const inner = (
    <span
      className={`relative inline-flex shrink-0 items-center overflow-visible rounded-sm ${className ?? ""}`}
    >
      <Image
        src={SITE_LOGO}
        alt="Meta Tronix"
        width={220}
        height={64}
        className={defaultImgClass}
        sizes={sizes}
        priority={priority}
        quality={95}
        draggable={false}
      />
    </span>
  );

  if (!withLink) {
    return inner;
  }

  return (
    <Link
      href="/"
      onClick={onClick}
      className="inline-flex items-center shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9]"
    >
      {inner}
    </Link>
  );
}
