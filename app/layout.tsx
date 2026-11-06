import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import "./components.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import { site } from "@/lib/siteContent";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI-Augmented Full-Stack Developer Course | Summate Learning",
    template: "%s | Summate Learning",
  },
  description:
    "A 12-week live online full-stack developer course. Build one real project, learn engineering workflows, and use AI as a tool without handing over the thinking.",
  applicationName: "Summate Learning",
  authors: [{ name: site.legalName, url: SITE_URL }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Summate Learning",
    locale: "en_IN",
    title: "AI-Augmented Full-Stack Developer Course | Summate Learning",
    description:
      "A 12-week live online full-stack developer course. Build one real project, learn engineering workflows, and use AI as a tool without handing over the thinking.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Summate Learning — AI-Augmented Full-Stack Developer Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Augmented Full-Stack Developer Course | Summate Learning",
    description:
      "A 12-week live online full-stack developer course. Build one real project, learn engineering workflows, and use AI as a tool without handing over the thinking.",
    images: ["/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  name: "Summate Learning",
  legalName: site.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "43/1574, Suite No. 053, Calm Workspaces, Kochappilly Road, Palarivattom",
    addressLocality: "Ernakulam",
    addressRegion: "Kerala",
    postalCode: "682025",
    addressCountry: "IN",
  },
  areaServed: site.regions,
  sameAs: site.social.map((entry) => entry.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Summate Learning",
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@type": "Organization", name: site.legalName, url: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased selection:bg-[#1D5F6E] selection:text-white">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
