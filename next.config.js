/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost', 'mhbaando.herokuapp.com'],
  },
};

module.exports = nextConfig;
