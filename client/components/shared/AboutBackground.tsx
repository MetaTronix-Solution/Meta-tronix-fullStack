"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Rocket,
  Globe2,
  Award,
  Compass,
  Heart,
  MapPin,
} from "lucide-react";

type IconItem = {
  Icon: typeof Users;
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
  { Icon: Target, top: "10%", left: "5%", boxed: true, delay: 0 },
  { Icon: Lightbulb, top: "8%", left: "17%", boxed: true, delay: 0.2 },
  { Icon: Award, top: "16%", left: "89%", boxed: true, delay: 0.4 },
];

const plainIcons: IconItem[] = [
  { Icon: Globe2, top: "34%", left: "21%", size: 44 },
  { Icon: Compass, top: "42%", left: "92%", size: 40 },
  { Icon: Rocket, top: "78%", left: "23%", size: 52 },
  { Icon: Heart, top: "70%", left: "90%", size: 34 },
];

const labels: LabelItem[] = [
  { label: "Founders", top: "18%", left: "33%", delay: 0.1 },
  { label: "Enterprise Teams", top: "20%", left: "68%", delay: 0.3 },
  { label: "Craft", top: "34%", left: "5%", delay: 0.15 },
  { label: "Scale", top: "66%", left: "6%", delay: 0.25 },
  { label: "Product", top: "44%", left: "78%", delay: 0.35 },
  { label: "Trust", top: "76%", left: "70%", delay: 0.45 },
];

const dots = [
  { top: "24%", left: "28%" },
  { top: "12%", left: "58%" },
  { top: "26%", left: "55%" },
  { top: "62%", left: "28%" },
  { top: "80%", left: "56%" },
  { top: "48%", left: "62%" },
];

export function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-x-0 top-20 bottom-0 sm:top-24">
        {/* orbiting ring accent — nods to "people orbiting a shared mission" */}
        <motion.div
          className="absolute left-1/2 top-[46%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#0EA5E9]/20 md:h-[560px] md:w-[560px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-[46%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#0EA5E9]/15 md:h-[380px] md:w-[380px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        {/* connector lines */}
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

        {/* Nepal marker — a small nod to "digital transformation studio in Nepal" */}
        <motion.div
          className="absolute flex items-center gap-1.5 text-xs font-semibold text-[#0EA5E9]/45 md:text-sm"
          style={{ top: "58%", left: "12%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MapPin size={16} strokeWidth={1.5} />
          Nepal
        </motion.div>

        {/* small people cluster, bottom-right flourish */}
        <div className="absolute bottom-[6%] right-[8%] text-[#0EA5E9]/20">
          <Users size={38} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
