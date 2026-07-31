"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-white">
      <h1 className="font-display text-2xl font-semibold text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-slate-600 max-w-md">
        Try again. If this keeps happening, delete the{" "}
        <code className="text-sm bg-slate-100 px-1 rounded">.next</code> folder
        and run <code className="text-sm bg-slate-100 px-1 rounded">npm run dev</code>{" "}
        again (especially on synced folders like OneDrive).
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
