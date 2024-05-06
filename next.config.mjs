/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adaired.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
