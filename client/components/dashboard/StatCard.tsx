import type { ElementType } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  hint?: string;
  icon: ElementType;
}

export default function StatCard({
  label,
  value,
  hint,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-brand-border bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-brand-muted">{label}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
          <Icon className="h-4 w-4 text-brand-navy" strokeWidth={1.75} />
        </div>
      </div>
      <p className="mt-3 text-2xl font-semibold text-brand-navy">{value}</p>
      {hint && <p className="mt-1 text-xs text-brand-muted">{hint}</p>}
    </div>
  );
}
