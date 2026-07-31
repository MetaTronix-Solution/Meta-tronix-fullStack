/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid optimizePackageImports: ["lucide-react"] — it caused prerender
  // "e[o] is not a function" / webpack-runtime errors in Next 14.2 builds.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
