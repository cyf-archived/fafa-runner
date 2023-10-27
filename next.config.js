const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/fafa-runner",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: [
      "lh3.googleusercontent.com",
      "visitor-badge.laobi.icu",
      "vercel.com",
    ],
  },
  experimental: {
    webpackBuildWorker: true,
  },
  env: {
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
  },
};

module.exports = withContentlayer(nextConfig);
