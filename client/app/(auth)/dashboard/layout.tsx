"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) return null; // or a loading spinner

  return (
    <div className="min-h-screen bg-white">
      <aside className="fixed h-full w-56 border-r border-brand-border p-4">
        <nav className="space-y-2 text-sm text-brand-body">
          <a
            href="/dashboard"
            className="block rounded-md px-3 py-2 hover:bg-slate-50"
          >
            Overview
          </a>
          <a
            href="/dashboard/blog"
            className="block rounded-md px-3 py-2 hover:bg-slate-50"
          >
            Blog
          </a>
          <button
            onClick={() => {
              localStorage.removeItem("isAdmin");
              router.push("/login");
            }}
            className="mt-4 block w-full rounded-md px-3 py-2 text-left text-red-600 hover:bg-red-50"
          >
            Log out
          </button>
        </nav>
      </aside>
      <main className="ml-56 p-8">{children}</main>
    </div>
  );
}
