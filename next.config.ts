import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/jerry-dempsey-website',
  assetPrefix: '/jerry-dempsey-website',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
