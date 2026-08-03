"use client";

import type { ReactNode } from "react";
import { Search } from "lucide-react";

interface TopbarProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function Topbar({ title, description, action }: TopbarProps) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-brand-border bg-white px-8 py-5">
      <div>
        <h1 className="text-lg font-semibold text-brand-navy">{title}</h1>
        <p className="mt-0.5 text-sm text-brand-muted">{description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="w-56 rounded-lg border border-brand-border bg-white py-2 pl-9 pr-3 text-sm text-brand-body placeholder:text-brand-muted focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          />
        </div>
        {action}
      </div>
    </header>
  );
}
