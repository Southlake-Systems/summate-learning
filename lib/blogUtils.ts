export type BlogStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string[];
  status: BlogStatus;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogInput = {
  id?: string;
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  author?: string;
  tags?: string | string[];
  status?: BlogStatus;
  publishedAt?: string;
};

/** Turn a title into a URL-safe slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function parseTags(value: string | string[] | undefined): string[] {
  const raw = Array.isArray(value) ? value : String(value ?? "").split(",");
  const seen = new Set<string>();
  const tags: string[] = [];

  for (const entry of raw) {
    const tag = entry.trim();
    if (!tag) continue;
    const key = tag.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    tags.push(tag);
  }

  return tags.slice(0, 8);
}

/** Stable date formatting for server and client rendering. */
export function formatBlogDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function toDateInputValue(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** The date shown to readers: publication date, or last edit for drafts. */
export function postDisplayDate(post: BlogPost): string {
  return post.status === "published" ? post.publishedAt : post.updatedAt;
}
