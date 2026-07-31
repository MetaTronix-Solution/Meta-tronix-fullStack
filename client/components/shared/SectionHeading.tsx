type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Dark text on light sections (default). */
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = true,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-brand-navy" : "text-white";
  const subColor = light ? "text-brand-muted" : "text-white/90";
  const eyebrowColor = light ? "text-[#0EA5E9]" : "text-cyan-100";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold ${titleColor} text-balance leading-tight`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
