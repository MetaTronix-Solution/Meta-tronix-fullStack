"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  TrendingUp,
  Clock,
  Rocket,
  Compass,
  Sparkles,
} from "lucide-react";

type IconItem = {
  Icon: typeof Briefcase;
  top: string;
  left: string;
  size?: number;
  boxed?: boolean;
  delay?: number;
};

type LabelItem = {
  label: string;
  top: string;
  left: string;
  delay?: number;
};

const boxedIcons: IconItem[] = [
  { Icon: Briefcase, top: "10%", left: "5%", boxed: true, delay: 0 },
  { Icon: GraduationCap, top: "8%", left: "17%", boxed: true, delay: 0.2 },
  { Icon: Trophy, top: "16%", left: "89%", boxed: true, delay: 0.4 },
];

const plainIcons: IconItem[] = [
  { Icon: TrendingUp, top: "34%", left: "21%", size: 42 },
  { Icon: Compass, top: "42%", left: "92%", size: 40 },
  { Icon: Rocket, top: "78%", left: "23%", size: 46 },
  { Icon: Clock, top: "70%", left: "90%", size: 36 },
];

const labels: LabelItem[] = [
  { label: "Engineers", top: "18%", left: "33%", delay: 0.1 },
  { label: "Designers", top: "20%", left: "68%", delay: 0.3 },
  { label: "Open Roles", top: "34%", left: "5%", delay: 0.15 },
  { label: "Senior-led", top: "66%", left: "6%", delay: 0.25 },
  { label: "Craft", top: "44%", left: "78%", delay: 0.35 },
  { label: "Growth", top: "76%", left: "68%", delay: 0.45 },
];

const dots = [
  { top: "24%", left: "28%" },
  { top: "12%", left: "58%" },
  { top: "26%", left: "55%" },
  { top: "62%", left: "28%" },
  { top: "80%", left: "56%" },
  { top: "48%", left: "62%" },
];

// small "open position" badges scattered near the edges — evokes active hiring
const badges = [
  { top: "28%", left: "10%", delay: 0.2 },
  { top: "56%", left: "94%", delay: 0.35 },
  { top: "84%", left: "40%", delay: 0.5 },
];

export function CareersBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-x-0 top-20 bottom-0 sm:top-24">
        {/* connector lines — pathway / progression feel */}
        <svg
          className="absolute inset-0 h-full w-full text-[#0EA5E9]/25"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M 33% 20% V 34% H 68%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M 7% 36% H 21%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M 25% 70% V 82% H 7%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          <path
            d="M 78% 46% V 60% H 90%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
          {/* rising step-path, nods to career growth/progression */}
          <path
            d="M 8% 88% L 20% 88% L 20% 78% L 32% 78% L 32% 68% L 44% 68%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        </svg>

        {/* plus-sign accents */}
        {dots.map((d, i) => (
          <span
            key={`dot-${i}`}
            className="absolute text-[#0EA5E9]/25 text-lg font-light"
            style={{ top: d.top, left: d.left }}
          >
            +
          </span>
        ))}

        {/* small "we're hiring" style badges */}
        {badges.map(({ top, left, delay }, i) => (
          <motion.div
            key={`badge-${i}`}
            className="absolute flex items-center gap-1.5 rounded-full border border-[#0EA5E9]/30 bg-white/40 px-3 py-1 text-xs font-semibold text-[#0EA5E9]/50"
            style={{ top, left }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay },
              scale: { duration: 0.6, delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            }}
          >
            <Sparkles size={12} strokeWidth={1.5} />
            Hiring
          </motion.div>
        ))}

        {/* boxed icons */}
        {boxedIcons.map(({ Icon, top, left, delay }, i) => (
          <motion.div
            key={`boxed-${i}`}
            className="absolute flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-[#0EA5E9]/30 text-[#0EA5E9]/50"
            style={{ top, left }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            }}
          >
            <Icon size={26} strokeWidth={1.5} />
          </motion.div>
        ))}

        {/* plain floating icons */}
        {plainIcons.map(({ Icon, top, left, size, delay }, i) => (
          <motion.div
            key={`plain-${i}`}
            className="absolute text-[#0EA5E9]/25"
            style={{ top, left }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
            }}
          >
            <Icon size={size ?? 40} strokeWidth={1.5} />
          </motion.div>
        ))}

        {/* labels */}
        {labels.map(({ label, top, left, delay }, i) => (
          <motion.div
            key={`label-${i}`}
            className="absolute flex items-center gap-2 text-sm font-semibold text-[#0EA5E9]/60 md:text-base"
            style={{ top, left }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]/60" />
            {label}
          </motion.div>
        ))}

        {/* subtle flourish, bottom-right — kept distinct from icons already used above */}
        <div className="absolute bottom-[6%] right-[8%] text-[#0EA5E9]/20">
          <Sparkles size={30} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
