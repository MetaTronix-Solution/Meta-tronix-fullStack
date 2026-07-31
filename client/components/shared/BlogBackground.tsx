"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  PenLine,
  Newspaper,
  Rss,
  FileText,
  Quote,
  Hash,
  Bookmark,
} from "lucide-react";

type IconItem = {
  Icon: typeof BookOpen;
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
  { Icon: PenLine, top: "10%", left: "5%", boxed: true, delay: 0 },
  { Icon: Quote, top: "8%", left: "17%", boxed: true, delay: 0.2 },
  { Icon: Rss, top: "16%", left: "89%", boxed: true, delay: 0.4 },
];

const plainIcons: IconItem[] = [
  { Icon: BookOpen, top: "34%", left: "21%", size: 44 },
  { Icon: FileText, top: "42%", left: "92%", size: 38 },
  { Icon: Newspaper, top: "78%", left: "23%", size: 46 },
  { Icon: Bookmark, top: "70%", left: "90%", size: 36 },
];

const labels: LabelItem[] = [
  { label: "Shipping Software", top: "18%", left: "33%", delay: 0.1 },
  { label: "Conversion", top: "20%", left: "68%", delay: 0.3 },
  { label: "Engineering Notes", top: "34%", left: "5%", delay: 0.15 },
  { label: "Case Studies", top: "66%", left: "6%", delay: 0.25 },
  { label: "Team Playbooks", top: "44%", left: "78%", delay: 0.35 },
  { label: "From Nepal", top: "76%", left: "68%", delay: 0.45 },
];

const dots = [
  { top: "24%", left: "28%" },
  { top: "12%", left: "58%" },
  { top: "26%", left: "55%" },
  { top: "62%", left: "28%" },
  { top: "80%", left: "56%" },
  { top: "48%", left: "62%" },
];

// small hashtag/quote glyphs scattered near the edges — evokes "written content"
const glyphs = [
  { symbol: "#", top: "28%", left: "10%", delay: 0.2 },
  { symbol: "“", top: "56%", left: "94%", delay: 0.35 },
  { symbol: "#", top: "84%", left: "40%", delay: 0.5 },
  { symbol: "”", top: "6%", left: "48%", delay: 0.15 },
];

export function BlogBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-x-0 top-20 bottom-0 sm:top-24">
        {/* connector lines — feed / article-flow feel */}
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

        {/* faint horizontal "text lines" motif, like paragraph rules on a page */}
        <div className="absolute" style={{ top: "12%", left: "60%" }}>
          <div className="h-px w-16 bg-[#0EA5E9]/20 mb-1.5" />
          <div className="h-px w-10 bg-[#0EA5E9]/20" />
        </div>
        <div className="absolute" style={{ top: "58%", left: "14%" }}>
          <div className="h-px w-14 bg-[#0EA5E9]/20 mb-1.5" />
          <div className="h-px w-8 bg-[#0EA5E9]/20" />
        </div>

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

        {/* hashtag / quote glyphs */}
        {glyphs.map(({ symbol, top, left, delay }, i) => (
          <motion.span
            key={`glyph-${i}`}
            className="absolute text-2xl font-semibold text-[#0EA5E9]/25"
            style={{ top, left }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            }}
          >
            {symbol}
          </motion.span>
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

        {/* Hash glyph flourish, bottom-right */}
        <div className="absolute bottom-[6%] right-[8%] text-[#0EA5E9]/20">
          <Hash size={34} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
