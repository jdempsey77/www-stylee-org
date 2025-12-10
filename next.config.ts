import type { NextConfig } from "next";

const nodeEnv = process.env.NODE_ENV as string | undefined;
const isProd = nodeEnv === 'production';
const isStaging = nodeEnv === 'staging';
const shouldExport = isProd || isStaging;
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const basePath = isProd && !isCustomDomain ? '/www-stylee-org' : '';

const nextConfig: NextConfig = {
  // Export static builds in production and staging so CI has an "out" directory
  ...(shouldExport && { output: 'export' }),
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  },
  // Use "out" dist dir when exporting in production or staging
  ...(shouldExport && { distDir: 'out' }),
  // Only use headers in production
  ...(isProd && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains; preload'
            },
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' www.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data:; connect-src 'self' www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
            }
          ]
        }
      ];
    }
  })
};

export default nextConfig;
