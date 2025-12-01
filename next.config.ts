import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ativa transform do styled-components (client-side)
  compiler: {
    styledComponents: true,
  },

  // ativa static export
  output: 'export',
  trailingSlash: true,

  // imagens não otimizadas para export estático
  images: {
    unoptimized: true,
  },

  // opcional: desativa geração de server runtime
  reactStrictMode: true,
};

export default nextConfig;
