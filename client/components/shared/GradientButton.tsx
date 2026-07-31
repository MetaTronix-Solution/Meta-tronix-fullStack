import Link from "next/link";
import type { ComponentProps } from "react";

type Variant =
  | "primary"
  | "outline"
  | "whatsapp"
  | "onTeal"
  | "outlineOnTeal";

type Base = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonNative = Base &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type LinkNative = Base &
  Omit<ComponentProps<typeof Link>, "className" | "children" | "href"> & {
    href: string;
  };

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white shadow-soft hover:brightness-105 hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border border-[#0EA5E9] text-[#0EA5E9] bg-white hover:bg-sky-50 shadow-soft",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-soft hover:scale-[1.02]",
  onTeal:
    "bg-white text-[#0D9488] shadow-soft hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]",
  outlineOnTeal:
    "border-2 border-white text-white bg-transparent hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9]";

export function GradientButton(props: ButtonNative | LinkNative) {
  const { children, className = "", variant = "primary" } = props;
  const styles = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonNative;
  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  );
}
