/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/team", destination: "/leadership", permanent: true }];
  },
};

export default nextConfig;
