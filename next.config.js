/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "*"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
