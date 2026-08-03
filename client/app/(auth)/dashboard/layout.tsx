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
    <div className="h-screen w-full overflow-hidden bg-white">{children}</div>
  );
}
