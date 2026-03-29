/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Removed output: 'export' to let Vercel handle deployment natively */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
