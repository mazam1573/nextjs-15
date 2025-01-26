import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'png.pngtree.com'
      }
    ]
  }
};

export default nextConfig;
