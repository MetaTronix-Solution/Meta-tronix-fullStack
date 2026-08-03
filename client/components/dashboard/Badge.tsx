const STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  open: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  draft: "bg-amber-50 text-amber-700 ring-amber-600/20",
  invited: "bg-amber-50 text-amber-700 ring-amber-600/20",
  inactive: "bg-slate-100 text-slate-600 ring-slate-500/20",
  archived: "bg-slate-100 text-slate-600 ring-slate-500/20",
  closed: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

export default function Badge({ value }: { value: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${
        STYLES[value] ?? "bg-slate-100 text-slate-600 ring-slate-500/20"
      }`}
    >
      {value}
    </span>
  );
}
