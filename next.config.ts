// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.levelup.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-f326d70e7a38422993ce7cd305c22dfb.r2.dev',
      },
      
    ],
  },
};

export default nextConfig;