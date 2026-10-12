/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dual-price-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
