import type { ComponentType } from "react";
import { FaAws } from "react-icons/fa";
import {
  SiDjango,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

export type TechIconComponent = ComponentType<{ className?: string }>;

export const techIconMap: Record<string, TechIconComponent> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  flutter: SiFlutter,
  vue: SiVuedotjs,
  nodejs: SiNodedotjs,
  django: SiDjango,
  laravel: SiLaravel,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  aws: FaAws,
  firebase: SiFirebase,
  docker: SiDocker,
  vercel: SiVercel,
};

export function getTechIcon(key: string): TechIconComponent {
  return techIconMap[key] ?? SiReact;
}
