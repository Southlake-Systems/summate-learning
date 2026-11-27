import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/Page";
import BlogCard from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublishedPosts } from "@/lib/blogs";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta({
  title: "Blog — Notes on learning and building",
  description:
    "Practical writing from Summate Learning on learning to build software, using AI as a tool, and preparing for the work that comes next.",
  path: "/blogs",
});

export default async function BlogsPage() {
  const posts = await getPublishedPosts();
  const [featured, ...rest] = posts;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Summate Learning Blog",
    url: `${SITE_URL}/blogs`,
    description:
      "Practical writing from Summate Learning on learning to build software, using AI as a tool, and preparing for the work that comes next.",
    publisher: {
      "@type": "Organization",
      name: "Summate Learning",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
  };

  return (
    <PageShell>
      <JsonLd data={blogSchema} />
      <PageHero
        crumbs={[{ label: "Blog" }]}
        title="Notes on learning, building and the work in between."
        lede="Practical writing from the Summate team: how we think about learning, what the work actually asks of you, and how AI fits into a real engineering process."
        waves
      />

      <Section>
        {posts.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-[#F6FBF8] px-7 py-16 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1C5E6E] shadow-sm">
              <PenLine size={24} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-[#1C5E6E]">
              The first posts are on their way.
            </h2>
            <p className="mx-auto mt-3 max-w-[46ch] text-[16px] leading-[1.65] text-slate-600">
              We are writing about the course, the work and the parts of learning that do not
              fit in a brochure. In the meantime, you can explore the course or get in touch.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/courses"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0F2A31] px-5 text-[14px] font-semibold text-white hover:bg-[#1C5E6E] hover:text-white"
              >
                Explore courses
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full border border-slate-300 bg-white px-5 text-[14px] font-semibold text-[#0F2A31] hover:border-[#1C5E6E] hover:text-[#1C5E6E]"
              >
                Talk to us
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1C5E6E]">
                  The Summate blog
                </p>
                <h2 className="mt-2 font-display text-[30px] font-bold tracking-[-0.03em] text-[#1C5E6E] sm:text-[38px]">
                  Read, think, build.
                </h2>
              </div>
              <p className="max-w-[34ch] text-[15px] leading-[1.6] text-slate-500">
                {posts.length} {posts.length === 1 ? "post" : "posts"} on learning, engineering and
                the space between them.
              </p>
            </div>

            <div className="mt-8">
              <BlogCard post={featured} featured />
            </div>

            {rest.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </Section>

      <CtaBand
        title="Have a question worth writing about?"
        body="If something about learning to build software is unclear, ask us. The best questions tend to become the next post."
        primary={{ label: "Ask us a question", href: "/contact" }}
        secondary={{ label: "See the course", href: "/courses" }}
      />
    </PageShell>
  );
}
