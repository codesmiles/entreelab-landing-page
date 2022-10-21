/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // remove img optimisatiion for static build
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
