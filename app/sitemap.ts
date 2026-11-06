import type { MetadataRoute } from "next";
import { careers, courses, leadership } from "@/lib/pageContent";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/courses",
  "/faculty",
  "/leadership",
  "/founder",
  "/circle",
  "/faq",
  "/contact",
  "/careers",
  "/apply",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/apply" ? 0.8 : 0.7,
    })),
    ...courses
      .filter((course) => course.status === "open")
      .map((course) => ({
        url: `${SITE_URL}/courses/${course.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })),
    ...careers.openings.map((role) => ({
      url: `${SITE_URL}/careers/${role.slug}`,
      lastModified: new Date(role.postedOn),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...leadership.members
      .filter((member) => member.href !== "/founder")
      .map((member) => ({
        url: `${SITE_URL}/leadership/${member.slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.5,
      })),
  ];
}
