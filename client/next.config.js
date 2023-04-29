/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
