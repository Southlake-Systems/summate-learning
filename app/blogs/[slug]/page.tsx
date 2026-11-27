import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  PageShell,
  PageHero,
  Section,
  CtaBand,
} from "@/components/site/Page";
import BlogBody from "@/components/blog/BlogBody";
import BlogCard from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  formatBlogDate,
  readingTime,
  type BlogPost,
} from "@/lib/blogUtils";
import { getPublishedPostBySlug, getPublishedPosts } from "@/lib/blogs";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };

  const meta = pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function absoluteImage(src: string): string {
  if (!src) return `${SITE_URL}/opengraph-image`;
  if (/^https?:\/\//.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`;
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedPostBySlug(params.slug);
  if (!post) notFound();

  const all = await getPublishedPosts();
  const related = all.filter((entry) => entry.id !== post.id).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Summate Learning",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blogs/${post.slug}`,
    image: absoluteImage(post.coverImage),
    ...(post.tags.length > 0 ? { keywords: post.tags.join(", ") } : {}),
  };

  return (
    <PageShell>
      <JsonLd data={articleSchema} />

      <PageHero
        crumbs={[{ label: "Blog", href: "/blogs" }, { label: post.title }]}
        title={post.title}
        lede={post.excerpt}
        aside={<PostMeta post={post} />}
      />

      {post.coverImage && (
        <div className="bg-white pt-10 lg:pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              role="img"
              aria-label={post.title}
              className="aspect-[16/9] w-full rounded-[28px] bg-cover bg-center shadow-[0_24px_70px_rgba(15,42,49,0.10)] sm:aspect-[16/7]"
              style={{ backgroundImage: `url("${post.coverImage}")` }}
            />
          </div>
        </div>
      )}

      <Section>
        <div className="mx-auto max-w-[72ch]">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1C5E6E] hover:text-[#14454F]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All posts
          </Link>

          <BlogBody content={post.content} className="mt-8" />

          <div className="mt-14 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-[#F4FAF7] p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Written by
              </p>
              <p className="mt-1 font-display text-lg font-bold text-[#0F2A31]">{post.author}</p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1C5E6E] hover:text-[#14454F]"
            >
              More posts
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="mist">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[30px] font-bold tracking-[-0.03em] text-[#1C5E6E] sm:text-[36px]">
              Keep reading
            </h2>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1C5E6E] hover:text-[#14454F]"
            >
              All posts
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((entry) => (
              <BlogCard key={entry.id} post={entry} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title="Learning to build, with people who have shipped."
        body="The AI-Augmented Full-Stack Developer Course is a 12-week live program built around one real project, honest feedback and a working process you can keep."
        primary={{ label: "Explore the course", href: "/courses" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </PageShell>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,42,49,0.06)]">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        Written by
      </p>
      <p className="mt-1 text-[16px] font-semibold text-[#0F2A31]">{post.author}</p>

      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
        <div>
          <dt className="text-[12px] font-medium text-slate-500">Published</dt>
          <dd className="mt-1 text-[14px] font-semibold text-[#0F2A31]">
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          </dd>
        </div>
        <div>
          <dt className="text-[12px] font-medium text-slate-500">Reading time</dt>
          <dd className="mt-1 text-[14px] font-semibold text-[#0F2A31]">
            {readingTime(post.content)} min
          </dd>
        </div>
      </dl>

      {post.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-[#E9F4EF] px-3 py-1.5 text-[12px] font-semibold text-[#1C5E6E]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
