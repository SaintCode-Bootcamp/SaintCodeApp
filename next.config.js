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
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
