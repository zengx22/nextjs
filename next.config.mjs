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
    SMTP_PORT: '2525',
    SMTP_USER: 'e971b82179c80d',
    SMTP_PASSWORD: 'd7b3ef3fedcb0b',
    SMTP_FROM_EMAIL: 'noreply@bookit.com',
    SMTP_FROM_NAME: 'BookIt',

    GEOCODER_API_KEY: 'e67pEpZ6y4sLWPGy3dUAN3Mvv52SBuMk',
    GEOCODER_PROVIDER: 'mapquest',

    MAPBOX_ACCESS_TOKEN:
      'pk.eyJ1IjoiemVuZ3gyMiIsImEiOiJjbHhmOTlodHMwb3R4Mmtwcjh6ZTRuOWJ4In0.wx3JCpzDNwPdBOf3TkDHUg',

    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'HDTHFDHRJHNFBDSEFWTHHFBDF?',
  },
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

export default nextConfig
