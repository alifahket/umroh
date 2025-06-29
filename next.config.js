/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/<your_cloud_name>/**'
      }
    ]
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
