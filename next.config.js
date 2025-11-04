/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'martfury.magebig.com',
      },
      {
        protocol: 'https',
        hostname: '**.magebig.com',
      },
    ],
  },
}

module.exports = nextConfig
