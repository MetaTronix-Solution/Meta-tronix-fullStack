"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  Cloud,
  Database,
  TerminalSquare,
  Sparkles,
} from "lucide-react";

type IconItem = {
  Icon: typeof Code2;
  top: string;
  left: string;
  size?: number;
  boxed?: boolean; // draws a dashed square around it, like "API" / "{ }" / "AI"
  delay?: number;
};

type LabelItem = {
  label: string;
  top: string;
  left: string;
  delay?: number;
};

const boxedIcons: IconItem[] = [
  { Icon: Code2, top: "14%", left: "4%", boxed: true, delay: 0 },
  { Icon: Braces, top: "12%", left: "16%", boxed: true, delay: 0.2 },
  { Icon: Sparkles, top: "18%", left: "88%", boxed: true, delay: 0.4 },
];

const plainIcons: IconItem[] = [
  { Icon: Cloud, top: "32%", left: "20%", size: 44 },
  { Icon: Database, top: "40%", left: "92%", size: 40 },
  { Icon: TerminalSquare, top: "76%", left: "24%", size: 56 },
];

const labels: LabelItem[] = [
  { label: "Node.js", top: "20%", left: "32%", delay: 0.1 },
  { label: "Next.js", top: "22%", left: "70%", delay: 0.3 },
  { label: "API", top: "32%", left: "5%", delay: 0.15 },
  { label: "Python", top: "64%", left: "6%", delay: 0.25 },
  { label: "Flutter", top: "40%", left: "78%", delay: 0.35 },
  { label: "Cloud", top: "74%", left: "72%", delay: 0.45 },
];

const dots = [
  { top: "22%", left: "27%" },
  { top: "8%", left: "58%" },
  { top: "24%", left: "56%" },
  { top: "62%", left: "27%" },
  { top: "78%", left: "56%" },
  { top: "44%", left: "62%" },
];

export function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* dashed connector lines, drawn as one SVG so they scale with the container */}
      <svg
        className="absolute inset-x-0 top-20 bottom-0 sm:top-24"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 32% 16% V 30% H 70%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <path
          d="M 70% 19% V 40% H 80%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <path
          d="M 6% 34% H 20%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <path
          d="M 24% 68% V 80% H 6%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      {/* plus-sign dot grid accents */}
      {dots.map((d, i) => (
        <span
          key={`dot-${i}`}
          className="absolute text-[#0EA5E9]/25 text-lg font-light"
          style={{ top: d.top, left: d.left }}
        >
          +
        </span>
      ))}

      {/* boxed icons: { }, </>, sparkles */}
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

      {/* text labels with a small dot marker, like the reference screenshot */}
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

      {/* binary digits, bottom right flourish */}
      <div className="absolute bottom-[8%] right-[6%] font-mono text-xs leading-tight text-[#0EA5E9]/20 md:text-sm">
        <p>010101</p>
        <p>101010</p>
        <p>010101</p>
      </div>
    </div>
  );
}
