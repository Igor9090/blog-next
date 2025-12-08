import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  compiler: {
    styledComponents: true,
  },


  trailingSlash: true,


  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },

  reactStrictMode: true,

};

export default nextConfig;
