/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
};

module.exports = nextConfig;
