/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  output: 'standalone',
  trailingSlash: false,
}

module.exports = nextConfig
