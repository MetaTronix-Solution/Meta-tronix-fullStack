/** Partner logos fallback (used only when `/public/collab/` is empty and Sanity has no org list). */
export type Partner = {
  name: string;
  /** Public URL under `site/public/partners/` */
  logo: string;
};

export const partners: Partner[] = [
  { name: "Nepal Engineering College", logo: "/partners/nepal-engineering-college.svg" },
  {
    name: "Kathmandu University, Innovation Cell",
    logo: "/partners/kathmandu-university-innovation.svg",
  },
  { name: "Himalayan Tech Collective", logo: "/partners/himalayan-tech-collective.svg" },
  { name: "Startup Nepal Network", logo: "/partners/startup-nepal-network.svg" },
  { name: "Digital Nepal Alliance", logo: "/partners/digital-nepal-alliance.svg" },
  { name: "Cloud Partners South Asia", logo: "/partners/cloud-partners-south-asia.svg" },
  { name: "Open Source Kathmandu", logo: "/partners/open-source-kathmandu.svg" },
  { name: "FinTech Founders Nepal", logo: "/partners/fintech-founders-nepal.svg" },
];
