/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/dual-price-website',
    assetPrefix: '/dual-price-website/',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig