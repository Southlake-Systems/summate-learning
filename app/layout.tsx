import type { Metadata } from "next";
import "./globals.css";
import "./components.css";

export const metadata: Metadata = {
  title: "Summate Learning — AI-Augmented Full-Stack Developer Course",
  description:
    "A 12-week live online program for Batch 1 — turn what you've learned into practical, demonstrable ability. Founding batch starts September 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
