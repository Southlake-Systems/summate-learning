import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { PageShell, Section } from "@/components/site/Page";
import { adminIsConfigured, isBlogAdmin } from "@/lib/blogAuth";
import { getAllPosts } from "@/lib/blogs";
import AdminLogin from "./AdminLogin";
import BlogAdmin from "./BlogAdmin";
import { logoutAction } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog studio",
  robots: { index: false, follow: false },
};

export default async function BlogAdminPage() {
  if (!isBlogAdmin()) {
    return (
      <PageShell>
        <AdminLogin />
      </PageShell>
    );
  }

  const posts = await getAllPosts();
  const configured = adminIsConfigured();

  return (
    <PageShell>
      <Section className="py-10 lg:py-14">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-slate-200 pb-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1C5E6E]">
              Content studio
            </p>
            <h1 className="mt-2 font-display text-[34px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0F2A31] sm:text-[44px]">
              Blog posts
            </h1>
            <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.65] text-slate-600">
              Write, edit, publish and unpublish posts. Published posts appear on the public
              blog immediately.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/blogs"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 text-[13px] font-semibold text-[#0F2A31] hover:border-[#1C5E6E] hover:text-[#1C5E6E]"
            >
              View blog
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            {configured && (
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center rounded-full border border-slate-300 bg-white px-4 text-[13px] font-semibold text-slate-600 hover:border-slate-400 hover:text-[#0F2A31]"
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </div>

        {!configured && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#F2D6A6] bg-[#FFF8EA] px-4 py-3.5 text-[13px] leading-[1.6] text-[#7A5310]">
            <ShieldAlert size={17} aria-hidden="true" className="mt-0.5 shrink-0" />
            <p>
              <span className="font-semibold">This studio is currently open.</span> Set the{" "}
              <code className="rounded bg-white/70 px-1.5 py-0.5 text-[12px]">BLOG_ADMIN_PASSWORD</code>{" "}
              environment variable before deploying to protect it.
            </p>
          </div>
        )}

        <div className="mt-8">
          <BlogAdmin initialPosts={posts} />
        </div>
      </Section>
    </PageShell>
  );
}
