"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { GradientButton } from "@/components/shared/GradientButton";

const SCROLL_MIN = 8;
const SCROLL_DOWN_HIDE_AT = 200;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onScroll = useCallback(() => {
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const y = window.scrollY;

      if (open) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (y < SCROLL_DOWN_HIDE_AT) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;
      if (Math.abs(delta) < SCROLL_MIN) {
        lastY.current = y;
        return;
      }

      if (delta > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    });
  }, [open]);

  useEffect(() => {
    lastY.current =
      typeof window !== "undefined" ? window.scrollY : lastY.current;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [onScroll]);

  useEffect(() => {
    setHidden(false);
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 overflow-visible border-b border-brand-border bg-white shadow-soft transition-transform duration-300 ease-[cubic-bezier(0.21,0.47,0.32,1)] will-change-transform ${
        hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-3 grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="col-start-1 row-start-1 justify-self-start flex shrink-0 items-center">
          <SiteLogo priority />
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-1 col-start-2 row-start-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-navy"
                    : "text-brand-body hover:text-brand-navy"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] transition-opacity ${
                    active ? "opacity-100" : "opacity-0 hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0 col-start-3 row-start-1 justify-self-end">
          <GradientButton href="/contact" variant="primary">
            Get Started
          </GradientButton>
        </div>

        <button
          type="button"
          className="lg:hidden col-start-3 row-start-1 justify-self-end inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-brand-navy hover:bg-brand-section"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 1] }}
            className="lg:hidden overflow-hidden border-t border-brand-border bg-white shadow-soft"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-[#0EA5E9]/10 text-brand-navy"
                        : "text-brand-body hover:bg-brand-section"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3">
                <GradientButton
                  href="/contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </GradientButton>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
