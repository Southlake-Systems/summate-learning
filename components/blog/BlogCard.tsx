import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  formatBlogDate,
  readingTime,
  type BlogPost,
} from "@/lib/blogUtils";

function Cover({ post, featured }: { post: BlogPost; featured?: boolean }) {
  if (post.coverImage) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]",
          featured ? "h-full min-h-[240px]" : "aspect-[16/9]"
        )}
        style={{ backgroundImage: `url("${post.coverImage}")` }}
      />
    );
  }

  const initial = post.title.trim().charAt(0).toUpperCase() || "S";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-[#0F2A31]",
        featured ? "h-full min-h-[240px]" : "aspect-[16/9]"
      )}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(120% 120% at 15% 0%, rgba(159,222,175,.38), transparent 55%), radial-gradient(100% 100% at 100% 100%, rgba(242,169,59,.28), transparent 55%)",
        }}
      />
      <span className="relative font-display text-6xl font-bold text-white/90">{initial}</span>
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#9FDEAF] hover:shadow-[0_24px_60px_rgba(15,42,49,0.10)]",
        featured && "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
      )}
    >
      <Link href={`/blogs/${post.slug}`} className="flex h-full flex-col lg:contents">
        <div className="relative overflow-hidden">
          <Cover post={post} featured={featured} />
          {post.tags[0] && (
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[12px] font-semibold text-[#1C5E6E] shadow-sm backdrop-blur">
              {post.tags[0]}
            </span>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:justify-center lg:p-10")}>
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-500">
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{readingTime(post.content)} min read</span>
          </div>

          <h3
            className={cn(
              "mt-4 font-display font-bold leading-[1.12] tracking-[-0.03em] text-[#1C5E6E]",
              featured ? "text-[28px] sm:text-[34px]" : "text-[23px]"
            )}
          >
            {post.title}
          </h3>

          <p className={cn("mt-3 leading-[1.65] text-slate-600", featured ? "text-[17px]" : "text-[15px]")}>
            {post.excerpt}
          </p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0F2A31] transition-colors group-hover:text-[#1C5E6E]">
            Read article
            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
