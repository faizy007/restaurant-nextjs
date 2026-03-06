import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickyrestaurants.com',
      },
    ],
  },
};

export default nextConfig;
