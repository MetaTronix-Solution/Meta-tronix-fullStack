"use client";

import type { ElementType } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Package,
  Users,
  Briefcase,
  LogOut,
} from "lucide-react";

export type DashboardTab =
  | "overview"
  | "blog"
  | "products"
  | "teams"
  | "careers";

const NAV_ITEMS: { key: DashboardTab; label: string; icon: ElementType }[] = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "blog", label: "Blog", icon: Newspaper },
  { key: "products", label: "Products", icon: Package },
  { key: "teams", label: "Team", icon: Users },
  { key: "careers", label: "Careers", icon: Briefcase },
];

interface SidebarProps {
  active: DashboardTab;
  onChange: (tab: DashboardTab) => void;
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("isAdmin");
    router.push("/login");
  }

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-brand-border bg-white">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy text-sm font-semibold text-white">
          M
        </div>
        <span className="text-sm font-semibold text-brand-navy">
          Meta-Tronix
        </span>
      </div>

      <nav className="flex-1 space-y-0.5 px-3">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`group relative flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-slate-50 font-medium text-brand-navy"
                  : "text-brand-muted hover:bg-slate-50 hover:text-brand-navy"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-brand-navy" />
              )}
              <Icon className="h-4 w-4" strokeWidth={1.75} />
              {label}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-brand-border bg-dot-grid px-5 py-4">
        <p className="text-xs text-brand-muted">Signed in as</p>
        <p className="text-sm font-medium text-brand-navy">Admin</p>
        <button
          onClick={handleLogout}
          className="mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" strokeWidth={1.75} />
          Log out
        </button>
      </div>
    </aside>
  );
}
