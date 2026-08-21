import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images1-fabric.practo.com",
      },
    ],
  },
};

export default nextConfig;