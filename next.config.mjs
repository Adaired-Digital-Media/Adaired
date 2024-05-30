/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.adaired.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
