/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'http://localhost:3000',
    DB_LOCAL_URI: 'mongodb://127.0.0.1:27017/bookit-v2',
    DB_URI: '',

    CLOUDINARY_CLOUD_NAME: 'ddo5hqvll',
    CLOUDINARY_API_KEY: '447895363791952',
    CLOUDINARY_API_SECRET: 'VGsJnCuYdu7_9dSJlZR9wWQnd3Y',

    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'HDTHFDHRJHNFBDSEFWTHHFBDF?',
  },
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

export default nextConfig
