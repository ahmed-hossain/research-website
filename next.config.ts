// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1) enable automatic static export on `next build`
  output: "export",

  // 2) optional: serve pages with a trailing slash (e.g. /about/ instead of /about.html)
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

