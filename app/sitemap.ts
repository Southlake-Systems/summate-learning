import type { MetadataRoute } from "next";
import { careers, courses, leadership } from "@/lib/pageContent";
import { getPublishedPosts } from "@/lib/blogs";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/courses",
  "/faculty",
  "/leadership",
  "/founder",
  "/circle",
  "/blogs",
  "/faq",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await getPublishedPosts();

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
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
    ...posts.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
