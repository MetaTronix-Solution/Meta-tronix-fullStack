"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-brand-navy/30 backdrop-blur-[2px]"
            onClick={onCancel}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
              <TriangleAlert
                className="h-5 w-5 text-red-600"
                strokeWidth={1.75}
              />
            </div>
            <h2 className="mt-4 text-base font-semibold text-brand-navy">
              {title}
            </h2>
            {description && (
              <p className="mt-1.5 text-sm text-brand-muted">{description}</p>
            )}

            <div className="mt-6 flex gap-2">
              <button
                onClick={onCancel}
                className="flex-1 rounded-lg border border-brand-border px-4 py-2 text-sm font-medium text-brand-body transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
