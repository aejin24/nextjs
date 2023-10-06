const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "app", "styles")],
    additionalData: '@use "@/styles/mixin/fontSize";',
  },
};

module.exports = nextConfig;
