import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          body: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
          section: "#F8FAFC",
          footer: "#F1F5F9",
          card: "#FFFFFF",
          orange: "#F97316",
          tealFrom: "#0EA5E9",
          tealTo: "#06B6D4",
          textDark: "#1E293B",
          textLight: "#F1F5F9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
        "gradient-cta": "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
        "dot-grid":
          "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
      },
      backgroundSize: {
        dot: "24px 24px",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)",
        "soft-md":
          "0 4px 6px -1px rgb(15 23 42 / 0.07), 0 2px 4px -2px rgb(15 23 42 / 0.05)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "hero-content":
          "heroReveal3d 0.74s cubic-bezier(0.21, 0.47, 0.32, 1) forwards",
        "hero-visual":
          "heroVisual3d 0.78s cubic-bezier(0.21, 0.47, 0.32, 1) 0.16s forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        heroReveal3d: {
          "0%": {
            opacity: "0",
            transform:
              "translate3d(0, 1.75rem, -40px) rotateX(12deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        heroVisual3d: {
          "0%": {
            opacity: "0",
            transform:
              "translate3d(0.75rem, 1.5rem, -48px) rotateY(-11deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
