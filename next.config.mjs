/** @type {import('next').NextConfig} */
// Batch 1 application form. Keep in sync with APPLY_URL in lib/siteContent.ts —
// this file is plain Node config and cannot import the TypeScript module.
const APPLY_URL = "https://forms.gle/4eKQr8fet8eVJkUz9";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/team", destination: "/leadership", permanent: true },
      // Batch 1 applications are collected on an external form, so the old
      // on-site application page sends people there instead of collecting
      // applications that nobody receives.
      { source: "/apply", destination: APPLY_URL, permanent: false },
    ];
  },
};

export default nextConfig;
