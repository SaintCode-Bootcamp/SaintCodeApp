/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: prod ? false : true,
})

module.exports = withPWA({
  // config
})

const nextConfig = {
  assetPrefix: process.env.NEXTAUTH_URL,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
