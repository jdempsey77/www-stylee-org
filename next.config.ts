import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const basePath = isProd && !isCustomDomain ? '/jerry-dempsey-website' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  distDir: 'out'
};

export default nextConfig;
