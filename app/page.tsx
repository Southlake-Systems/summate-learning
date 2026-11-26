import type { Metadata } from "next";
import HomeView from "@/components/home/HomeView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Summate Learning — AI-Augmented Full-Stack Developer Course",
  description:
    "A 12-week live online full-stack developer course from Kochi, Kerala. Build one real project, practise Git, testing and deployment, and use AI as a tool — not a crutch. Batch 1 starts January 2027.",
  path: "/",
});

export default function HomePage() {
  return <HomeView />;
}
