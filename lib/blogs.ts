import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { BlobNotFoundError, get, put } from "@vercel/blob";
import seedData from "@/data/blogs.json";
import {
  type BlogInput,
  type BlogPost,
  parseTags,
  slugify,
} from "@/lib/blogUtils";

/**
 * Blog storage.
 *
 * Local development writes to `data/blogs.json` (override with BLOG_DATA_FILE).
 * On Vercel, connecting a Blob store injects BLOB_READ_WRITE_TOKEN and posts are
 * read from / written to a private JSON blob instead, because the serverless
 * filesystem is read-only and ephemeral.
 */
const DATA_FILE =
  process.env.BLOG_DATA_FILE ?? path.join(process.cwd(), "data", "blogs.json");
const BLOB_PATH = process.env.BLOG_BLOB_PATH ?? "blog/posts.json";
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const USE_BLOB = Boolean(BLOB_TOKEN);

const WRITE_ERROR =
  "Could not save the blog posts. Check the blog storage configuration and try again.";

let writeQueue: Promise<unknown> = Promise.resolve();

/** Serialise writes so two saves can never clobber each other. */
function withWriteLock<T>(work: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(work, work);
  writeQueue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

function text(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function normalizePost(value: unknown): BlogPost | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const title = text(raw.title).trim();
  const slug = text(raw.slug).trim();
  const content = text(raw.content);
  if (!title || !slug || !content) return null;

  const createdAt = text(raw.createdAt, new Date().toISOString());
  const publishedAt = text(raw.publishedAt, createdAt);
  const status = raw.status === "draft" ? "draft" : "published";

  return {
    id: text(raw.id, slug),
    title,
    slug,
    excerpt: text(raw.excerpt).trim(),
    content,
    coverImage: text(raw.coverImage).trim(),
    author: text(raw.author, "Summate Learning").trim() || "Summate Learning",
    tags: parseTags(raw.tags as string[] | string | undefined),
    status,
    publishedAt,
    createdAt,
    updatedAt: text(raw.updatedAt, createdAt),
  };
}

function seedPosts(): BlogPost[] {
  return (seedData as unknown[])
    .map(normalizePost)
    .filter((post): post is BlogPost => post !== null);
}

function parseStoredPosts(raw: string): BlogPost[] | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed
      .map(normalizePost)
      .filter((post): post is BlogPost => post !== null);
  } catch {
    return null;
  }
}

async function readPosts(): Promise<BlogPost[]> {
  if (USE_BLOB) {
    try {
      const result = await get(BLOB_PATH, {
        access: "private",
        useCache: false,
        token: BLOB_TOKEN,
      });
      if (!result || result.statusCode !== 200) return seedPosts();
      const raw = await new Response(result.stream).text();
      return parseStoredPosts(raw) ?? seedPosts();
    } catch (error) {
      if (error instanceof BlobNotFoundError) return seedPosts();
      throw error;
    }
  }

  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return parseStoredPosts(raw) ?? seedPosts();
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return seedPosts();
    throw error;
  }
}

async function writePosts(posts: BlogPost[]): Promise<void> {
  if (USE_BLOB) {
    await put(BLOB_PATH, `${JSON.stringify(posts, null, 2)}\n`, {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 60,
      token: BLOB_TOKEN,
    });
    return;
  }

  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  const temporary = `${DATA_FILE}.${process.pid}.tmp`;
  await fs.writeFile(temporary, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  await fs.rename(temporary, DATA_FILE);
}

function time(value: string): number {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function sortForAdmin(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => time(b.updatedAt) - time(a.updatedAt) || time(b.createdAt) - time(a.createdAt)
  );
}

function sortForPublic(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => time(b.publishedAt) - time(a.publishedAt) || time(b.createdAt) - time(a.createdAt)
  );
}

const RESERVED_SLUGS = new Set(["admin"]);

function uniqueSlug(posts: BlogPost[], desired: string, ignoreId?: string): string {
  const base = slugify(desired) || "post";
  let candidate = base;
  let suffix = 2;

  while (
    RESERVED_SLUGS.has(candidate) ||
    posts.some((post) => post.slug === candidate && post.id !== ignoreId)
  ) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function deriveExcerpt(content: string): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`~\-]/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= 180) return plain;
  const cut = plain.slice(0, 180);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 120 ? lastSpace : 180).trim()}…`;
}

function normalizeDate(value: string | undefined, fallback: string): string {
  if (!value) return fallback;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toISOString();
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return sortForAdmin(await readPosts());
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await readPosts();
  return sortForPublic(posts.filter((post) => post.status === "published"));
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await readPosts();
  return (
    posts.find((post) => post.slug === slug && post.status === "published") ??
    null
  );
}

export type SaveResult =
  | { ok: true; post: BlogPost; posts: BlogPost[] }
  | { ok: false; error: string };

export async function savePost(input: BlogInput): Promise<SaveResult> {
  return withWriteLock(async () => {
    const title = String(input.title ?? "").trim();
    const content = String(input.content ?? "").trim();

    if (!title) return { ok: false, error: "Give the post a title." };
    if (!content) return { ok: false, error: "The post body can't be empty." };

    const posts = await readPosts();
    const existing = input.id
      ? posts.find((post) => post.id === input.id)
      : undefined;
    const now = new Date().toISOString();
    const status = input.status === "draft" ? "draft" : "published";
    const desiredSlug = input.slug?.trim() || title;
    const slug = uniqueSlug(posts, desiredSlug, existing?.id);

    const post: BlogPost = {
      id: existing?.id ?? randomUUID(),
      title,
      slug,
      excerpt: String(input.excerpt ?? "").trim() || deriveExcerpt(content),
      content,
      coverImage: String(input.coverImage ?? "").trim(),
      author:
        String(input.author ?? "").trim() ||
        existing?.author ||
        "Summate Learning",
      tags: parseTags(input.tags),
      status,
      publishedAt: normalizeDate(input.publishedAt, existing?.publishedAt ?? now),
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };

    const next = existing
      ? posts.map((entry) => (entry.id === existing.id ? post : entry))
      : [...posts, post];

    try {
      await writePosts(next);
    } catch {
      return { ok: false, error: WRITE_ERROR };
    }

    return { ok: true, post, posts: sortForAdmin(next) };
  });
}

export type DeleteResult =
  | { ok: true; posts: BlogPost[] }
  | { ok: false; error: string };

export async function deletePost(id: string): Promise<DeleteResult> {
  return withWriteLock(async () => {
    const posts = await readPosts();
    if (!posts.some((post) => post.id === id)) {
      return { ok: false, error: "That post no longer exists." };
    }

    const next = posts.filter((post) => post.id !== id);
    try {
      await writePosts(next);
    } catch {
      return { ok: false, error: WRITE_ERROR };
    }
    return { ok: true, posts: sortForAdmin(next) };
  });
}
