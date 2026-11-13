import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone static pages in public/, served at clean addresses
  // (these are the addresses on the workshop QR codes).
  async rewrites() {
    return [
      { source: "/ai-finder", destination: "/ai-finder/index.html" },
      { source: "/ai-workshop", destination: "/ai-workshop/index.html" },
    ];
  },
};

export default nextConfig;
