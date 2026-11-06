import type { Metadata } from "next";

/** Canonical site origin. Keep in sync with the Vercel domain redirect. */
export const SITE_URL = "https://www.summatelearning.com";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Summate Learning — AI-Augmented Full-Stack Developer Course",
};

/**
 * Per-page metadata. The root layout owns `metadataBase`, the title template,
 * robots directives and the default icon set; pages only supply what is unique.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Summate Learning",
      locale: "en_IN",
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
