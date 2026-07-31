import type { ComponentType } from "react";
import {
  Cpu,
  Gauge,
  HeartHandshake,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { SiReact } from "react-icons/si";

export type AboutIconComponent = ComponentType<{ className?: string }>;

const lucideMap: Record<string, AboutIconComponent> = {
  rocket: Rocket,
  layers: Layers,
  gauge: Gauge,
  heartHandshake: HeartHandshake,
  cpu: Cpu,
  shieldCheck: ShieldCheck,
};

export function resolveAboutIcon(key: string): AboutIconComponent {
  if (key === "react") return SiReact;
  return lucideMap[key] ?? Layers;
}
