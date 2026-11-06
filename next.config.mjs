/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // One canonical host: the apex domain permanently redirects to www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "summatelearning.com" }],
        destination: "https://www.summatelearning.com/:path*",
        permanent: true,
      },
      { source: "/team", destination: "/leadership", permanent: true },
    ];
  },
};

export default nextConfig;
