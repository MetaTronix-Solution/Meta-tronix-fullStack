import fs from "fs";
import path from "path";

import type { Partner } from "@/lib/partners";

const IMAGE_EXT = /\.(png|jpg|jpeg|svg|webp|gif)$/i;

function filenameToDisplayName(filename: string): string {
  let base = filename.replace(/\.[^.]+$/, "").replace(/\.svg_$/i, "");
  base = base
    .replace(/_textlogo$/i, "")
    .replace(/[-_]?lo(go)?$/i, "")
    .replace(/[-_.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = base.split(/[\s_-]+/).filter(Boolean);
  if (!words.length) return "Collaborator";

  return words
    .map((w) => {
      const lower = w.toLowerCase();
      if (lower === "eedtra") return "Eedtra";
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ")
    .trim();
}

/**
 * Image files under `/public/collab/` drive the Trusted By grid when Sanity has no curated list.
 */
export function getPublicCollabPartners(): Partner[] {
  try {
    const dir = path.join(process.cwd(), "public", "collab");
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f) && !f.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
      .map((filename) => ({
        name: filenameToDisplayName(filename),
        logo: `/collab/${encodeURIComponent(filename)}`,
      }));
  } catch {
    return [];
  }
}
