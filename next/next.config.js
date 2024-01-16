/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/panel/:path*",
        destination: process.env.NEXT_PUBLIC_DIRECTUS_URL + "/panel/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
