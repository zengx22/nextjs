/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'http://localhost:3000',
    DB_LOCAL_URI: 'mongodb://127.0.0.1:27017/bookit-v2',
    DB_URI: '',

    CLOUDINARY_CLOUD_NAME: 'ddo5hqvll',
    CLOUDINARY_API_KEY: '447895363791952',
    CLOUDINARY_API_SECRET: 'VGsJnCuYdu7_9dSJlZR9wWQnd3Y',

    SMTP_HOST: 'sandbox.smtp.mailtrap.io',
    SMTP_PORT: 2525,
    SMTP_USER: 'e971b82179c80d',
    SMTP_PASSWORD: 'd7b3ef3fedcb0b',
    SMTP_FROM_EMAIL: 'noreply@bookit.com',
    SMTP_FROM_NAME: 'BookIt',

    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'HDTHFDHRJHNFBDSEFWTHHFBDF?',
  },
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

export default nextConfig
