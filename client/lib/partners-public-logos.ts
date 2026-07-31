import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(png|jpg|jpeg|svg|webp|gif)$/i;

export type IncubatorLogo = {
  src: string;
  alt: string;
};

function filenameToAlt(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim() || "Partner";
}

/**
 * Files placed in `/public/partners/` are surfaced here (PNG, JPG, SVG, WEBP).
 * Call only from Server Components / server code — uses `fs`.
 */
export function getPublicPartnersLogos(): IncubatorLogo[] {
  try {
    const dir = path.join(process.cwd(), "public", "partners");
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f) && !f.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
      .map((filename) => ({
        src: `/partners/${encodeURIComponent(filename)}`,
        alt: filenameToAlt(filename),
      }));
  } catch {
    return [];
  }
}
