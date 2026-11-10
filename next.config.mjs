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
      // Applications live on Google Forms; keep old /apply links working.
      { source: "/apply", destination: "https://forms.gle/4eKQr8fet8eVJkUz9", permanent: false },
    ];
  },
};

export default nextConfig;
