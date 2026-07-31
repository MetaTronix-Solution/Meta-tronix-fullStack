import { Activity, BarChart3, Bell, Layers } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";

export function HeroSection() {
  return (
    <section className="relative box-border flex min-h-[100svh] w-full flex-col justify-center overflow-x-clip overflow-y-visible bg-white pt-[max(5.5rem,env(safe-area-inset-top,0px))] pb-12 md:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-mesh-light" />

      <div className="relative z-10 mx-auto w-full max-w-7xl box-border px-4 py-8 sm:px-6 md:py-12 lg:py-16">
        <div className="perspective-[min(1180px,100vw)] [transform-style:preserve-3d]">
          <div className="grid min-h-0 w-full max-w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12 xl:gap-16">
            <div className="animate-hero-content [transform-origin:center_top]">
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#0EA5E9] mb-5">
              Product engineering & digital transformation
            </p>

            <h1 className="font-display text-[clamp(1.875rem,1.25rem+2.5vw,3.75rem)] font-bold leading-[1.08] text-balance text-brand-navy [overflow-wrap:anywhere]">
              We Build{" "}
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent">
                Scalable Digital Products
              </span>{" "}
              That Drive Business Growth
            </h1>

            <p className="mt-6 text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
              From idea to execution, Meta Tronix helps startups and enterprises
              build powerful apps, platforms, and systems.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <GradientButton href="/contact" variant="primary">
                Get Free Consultation
              </GradientButton>
              <GradientButton href="/products" variant="outline">
                View Our Work
              </GradientButton>
            </div>

            <p className="mt-8 text-sm text-brand-muted max-w-xl md:mt-10">
              Based in Nepal. We don&apos;t just develop; we build scalable digital
              products engineered for clarity, speed, and long-term scale.
            </p>
          </div>

          <div
            className="relative mx-auto hidden h-[min(28rem,calc(100svh-14rem))] w-full max-w-[min(100%,26rem)] min-h-[16rem] shrink-0 animate-hero-visual [transform-origin:center_center] lg:block"
            aria-hidden
          >
            <div className="absolute left-4 top-6 w-[88%] rounded-2xl border border-brand-border bg-white shadow-soft-md p-5 rotate-[-2deg]">
              <div className="flex items-center justify-between text-xs text-brand-muted mb-4">
                <span className="font-semibold text-brand-navy">Product health</span>
                <span className="rounded-full bg-brand-section px-2 py-0.5 text-[10px] font-medium text-[#0EA5E9]">
                  Live
                </span>
              </div>
              <div className="h-28 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 flex items-end p-3 gap-1">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#0EA5E9]/80 to-[#06B6D4]/50"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Latency", val: "112ms" },
                  { label: "Uptime", val: "99.98%" },
                  { label: "Ships", val: "12/wk" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-brand-border bg-brand-section/80 px-2 py-2 text-center"
                  >
                    <p className="text-[10px] text-brand-muted uppercase tracking-wide">
                      {m.label}
                    </p>
                    <p className="text-sm font-bold text-brand-navy">{m.val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-32 w-[78%] rounded-2xl border border-brand-border bg-white shadow-soft-md p-4 rotate-[3deg]">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center text-white">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-navy">Release pipeline</p>
                  <p className="text-[10px] text-brand-muted">Staging to Production</p>
                </div>
              </div>
              <div className="space-y-2">
                {["Auth & RBAC", "Billing webhooks", "Observability"].map((row, i) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-lg border border-brand-border px-3 py-2 text-xs"
                  >
                    <span className="text-brand-body">{row}</span>
                    <span
                      className={`text-[10px] font-semibold ${
                        i === 0 ? "text-emerald-600" : "text-brand-muted"
                      }`}
                    >
                      {i === 0 ? "Ready" : "Queued"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-10 bottom-8 w-[62%] rounded-xl border border-brand-border bg-white shadow-soft p-3 rotate-[-1deg] flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange border border-orange-100">
                <Bell className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-brand-navy truncate">
                  Sprint review
                </p>
                <p className="text-[10px] text-brand-muted truncate">
                  Demo-ready build, 4 milestones closed
                </p>
              </div>
              <BarChart3 className="h-5 w-5 text-[#0EA5E9] shrink-0" />
            </div>

            <div className="absolute right-6 bottom-24 h-12 w-12 rounded-2xl border border-brand-border bg-white shadow-soft flex items-center justify-center text-[#0EA5E9] rotate-[6deg]">
              <Activity className="h-6 w-6" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
