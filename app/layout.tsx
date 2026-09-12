import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./components.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

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
    <html lang="en" className={poppins.className}>
      <body className="antialiased selection:bg-[#1E3ABA] selection:text-white">
        {children}
      </body>
    </html>
  );
}