/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
