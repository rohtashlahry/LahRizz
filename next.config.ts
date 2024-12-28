import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: withPWA({
    dest: "public", // The directory for service worker files
    register: true, // Automatically register the service worker
    skipWaiting: true, // Activate the new service worker immediately
  }),
};

export default nextConfig;
