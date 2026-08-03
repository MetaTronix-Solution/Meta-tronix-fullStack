"use client";

import type { ReactNode } from "react";
import { Pencil, Trash2, Inbox } from "lucide-react";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (item: T) => ReactNode;
}

interface DataTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  emptyLabel?: string;
}

export default function DataTable<T extends { id: string }>({
  columns,
  data,
  onEdit,
  onDelete,
  emptyLabel = "No records yet.",
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-brand-border bg-white py-16 text-center">
        <Inbox className="h-6 w-6 text-brand-muted" strokeWidth={1.5} />
        <p className="text-sm text-brand-muted">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-brand-border bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-brand-border bg-slate-50/60">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="whitespace-nowrap px-5 py-3 text-xs font-medium uppercase tracking-wide text-brand-muted"
              >
                {col.label}
              </th>
            ))}
            <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wide text-brand-muted">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-brand-border transition-colors last:border-0 hover:bg-slate-50/60"
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className="whitespace-nowrap px-5 py-3.5 text-brand-body"
                >
                  {col.render ? col.render(item) : String(item[col.key])}
                </td>
              ))}
              <td className="px-5 py-3.5 text-right">
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => onEdit(item)}
                    className="rounded-md p-1.5 text-brand-muted transition-colors hover:bg-slate-100 hover:text-brand-navy"
                    aria-label="Edit"
                  >
                    <Pencil className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="rounded-md p-1.5 text-brand-muted transition-colors hover:bg-red-50 hover:text-red-600"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
