/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },

  env: {
    BASE_URI: 'http://localhost:1337',
  },
};

module.exports = nextConfig;
