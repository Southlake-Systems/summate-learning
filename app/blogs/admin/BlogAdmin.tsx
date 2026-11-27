"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  FileText,
  Loader2,
  Plus,
  Save,
  Search,
  Trash2,
} from "lucide-react";
import {
  formatBlogDate,
  parseTags,
  postDisplayDate,
  slugify,
  toDateInputValue,
  type BlogPost,
  type BlogStatus,
} from "@/lib/blogUtils";
import BlogBody from "@/components/blog/BlogBody";
import { deletePostAction, savePostAction } from "./actions";

type FormState = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string;
  status: BlogStatus;
  publishedAt: string;
};

type Notice = { tone: "success" | "error"; text: string } | null;

function blankForm(): FormState {
  return {
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    author: "Summate Learning",
    tags: "",
    status: "published",
    publishedAt: new Date().toISOString().slice(0, 10),
  };
}

function toForm(post: BlogPost): FormState {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.coverImage,
    author: post.author,
    tags: post.tags.join(", "),
    status: post.status,
    publishedAt: toDateInputValue(post.publishedAt),
  };
}

const field =
  "mt-2 block w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#0F2A31] placeholder:text-slate-400 transition-colors focus:border-[#1C5E6E] focus:outline-none focus:ring-4 focus:ring-[#1C5E6E]/10 disabled:bg-slate-50";
const label = "text-[13px] font-semibold text-[#0F2A31]";

export default function BlogAdmin({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [form, setForm] = useState<FormState>(() => blankForm());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const [query, setQuery] = useState("");
  const [preview, setPreview] = useState(false);
  const [pending, startTransition] = useTransition();

  const editing = Boolean(form.id);
  const savedPost = posts.find((post) => post.id === form.id);
  const publishedCount = posts.filter((post) => post.status === "published").length;
  const draftCount = posts.length - publishedCount;
  const tags = parseTags(form.tags);

  const visiblePosts = posts.filter((post) => {
    const needle = query.trim().toLowerCase();
    if (!needle) return true;
    return (
      post.title.toLowerCase().includes(needle) ||
      post.slug.toLowerCase().includes(needle) ||
      post.tags.some((tag) => tag.toLowerCase().includes(needle))
    );
  });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function updateTitle(value: string) {
    setForm((current) => ({
      ...current,
      title: value,
      slug: !current.id && !slugTouched ? slugify(value) : current.slug,
    }));
  }

  function selectPost(post: BlogPost) {
    setSelectedId(post.id);
    setForm(toForm(post));
    setSlugTouched(true);
    setPreview(false);
    setNotice(null);
  }

  function newPost() {
    setSelectedId(null);
    setForm(blankForm());
    setSlugTouched(false);
    setPreview(false);
    setNotice(null);
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    startTransition(async () => {
      const result = await savePostAction({
        id: form.id,
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        coverImage: form.coverImage,
        author: form.author,
        tags: form.tags,
        status: form.status,
        publishedAt: form.publishedAt
          ? new Date(`${form.publishedAt}T00:00:00.000Z`).toISOString()
          : undefined,
      });

      if (result.ok) {
        setPosts(result.posts);
        setSelectedId(result.post.id);
        setForm(toForm(result.post));
        setSlugTouched(true);
        setNotice({ tone: "success", text: `Saved “${result.post.title}”.` });
      } else {
        setNotice({ tone: "error", text: result.error });
      }
    });
  }

  function handleDelete() {
    if (!form.id || pending) return;

    if (!window.confirm(`Delete “${form.title}”? This cannot be undone.`)) return;

    startTransition(async () => {
      const result = await deletePostAction(form.id!);

      if (result.ok) {
        setPosts(result.posts);
        setSelectedId(null);
        setForm(blankForm());
        setSlugTouched(false);
        setNotice({ tone: "success", text: "Post deleted." });
      } else {
        setNotice({ tone: "error", text: result.error });
      }
    });
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      {/* Post list */}
      <aside className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,42,49,0.05)] lg:sticky lg:top-28">
        <div className="flex items-center justify-between gap-3 px-1">
          <div>
            <h2 className="font-display text-lg font-bold tracking-[-0.01em] text-[#0F2A31]">
              Posts
            </h2>
            <p className="mt-0.5 text-[12px] text-slate-500">
              {publishedCount} published · {draftCount} draft{draftCount === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={newPost}
            disabled={pending}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#0F2A31] px-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1C5E6E] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={14} aria-hidden="true" />
            New
          </button>
        </div>

        <div className="relative mt-4">
          <Search
            size={15}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts"
            aria-label="Search posts"
            className="h-10 w-full rounded-xl border border-slate-200 bg-[#F8FBFA] pl-9 pr-3 text-[13px] text-[#0F2A31] placeholder:text-slate-400 focus:border-[#1C5E6E] focus:outline-none focus:ring-2 focus:ring-[#1C5E6E]/10"
          />
        </div>

        <ul className="mt-3 max-h-[560px] space-y-1 overflow-y-auto">
          {visiblePosts.length === 0 ? (
            <li className="px-3 py-10 text-center text-[13px] text-slate-500">
              {posts.length === 0
                ? "No posts yet. Start with New."
                : "No posts match that search."}
            </li>
          ) : (
            visiblePosts.map((post) => {
              const active = selectedId === post.id;
              return (
                <li key={post.id}>
                  <button
                    type="button"
                    onClick={() => selectPost(post)}
                    className={`w-full rounded-xl px-3 py-3 text-left transition-colors ${
                      active ? "bg-[#E9F4EF]" : "hover:bg-[#F4FAF7]"
                    }`}
                  >
                    <span className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                          post.status === "published" ? "bg-[#2F8F5B]" : "bg-[#F2A93B]"
                        }`}
                      />
                      <span className="min-w-0">
                        <span
                          className={`block truncate text-[13px] font-semibold ${
                            active ? "text-[#1C5E6E]" : "text-[#0F2A31]"
                          }`}
                        >
                          {post.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-slate-500">
                          {post.status === "published" ? "Published" : "Draft"} ·{" "}
                          {formatBlogDate(postDisplayDate(post))}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </aside>

      {/* Editor */}
      <form
        onSubmit={handleSave}
        className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,42,49,0.05)] sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E9F4EF] text-[#1C5E6E]">
              <FileText size={18} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-[#0F2A31]">
                {editing ? "Edit post" : "New post"}
              </h2>
              <p className="mt-0.5 text-[12px] text-slate-500">
                {editing
                  ? "Changes go live as soon as you save a published post."
                  : "Write the post, then publish it when it is ready."}
              </p>
            </div>
          </div>

          {savedPost?.status === "published" && (
            <Link
              href={`/blogs/${savedPost.slug}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-200 px-3.5 text-[12px] font-semibold text-[#1C5E6E] hover:border-[#1C5E6E]"
            >
              View post
              <ExternalLink size={13} aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-6 grid gap-5">
          <label className="block">
            <span className={label}>Title</span>
            <input
              value={form.title}
              onChange={(event) => updateTitle(event.target.value)}
              placeholder="A clear, specific headline"
              required
              disabled={pending}
              className={`${field} text-[17px] font-semibold`}
            />
          </label>

          <label className="block">
            <span className={label}>Slug</span>
            <span className="mt-2 flex items-center rounded-2xl border border-slate-300 bg-white pl-4 focus-within:border-[#1C5E6E] focus-within:ring-4 focus-within:ring-[#1C5E6E]/10">
              <span className="text-[14px] text-slate-400">/blogs/</span>
              <input
                value={form.slug}
                onChange={(event) => {
                  setSlugTouched(true);
                  update("slug", event.target.value);
                }}
                placeholder="post-url"
                disabled={pending}
                className="min-w-0 flex-1 rounded-r-2xl px-1 py-3 text-[14px] text-[#0F2A31] placeholder:text-slate-400 focus:outline-none"
              />
            </span>
            <span className="mt-1.5 block text-[12px] text-slate-500">
              Leave blank to build it from the title. Duplicate slugs get a number.
            </span>
          </label>

          <label className="block">
            <span className={label}>Excerpt</span>
            <textarea
              value={form.excerpt}
              onChange={(event) => update("excerpt", event.target.value)}
              rows={3}
              placeholder="One or two sentences for the listing page. Leave blank to use the opening of the post."
              disabled={pending}
              className={`${field} resize-y`}
            />
          </label>

          <div className="block">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={label}>Body</span>
              <div className="flex items-center gap-2.5">
                <span className="hidden text-[12px] text-slate-500 sm:inline">
                  Markdown-style: ## heading, - list, &gt; quote, **bold**, [link](url)
                </span>
                <span className="flex rounded-full bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setPreview(false)}
                    aria-pressed={!preview}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                      !preview ? "bg-white text-[#0F2A31] shadow-sm" : "text-slate-500 hover:text-[#0F2A31]"
                    }`}
                  >
                    Write
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreview(true)}
                    aria-pressed={preview}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                      preview ? "bg-white text-[#0F2A31] shadow-sm" : "text-slate-500 hover:text-[#0F2A31]"
                    }`}
                  >
                    Preview
                  </button>
                </span>
              </div>
            </div>

            {preview ? (
              <div className="mt-2 min-h-[360px] rounded-2xl border border-slate-200 bg-[#F8FBFA] p-6">
                {form.content.trim() ? (
                  <BlogBody content={form.content} />
                ) : (
                  <p className="text-[14px] text-slate-400">Nothing to preview yet.</p>
                )}
              </div>
            ) : (
              <textarea
                value={form.content}
                onChange={(event) => update("content", event.target.value)}
                rows={18}
                aria-label="Body"
                placeholder={"Start writing…\n\n## A section heading\n\nA paragraph.\n\n- A point\n- Another point"}
                required
                disabled={pending}
                className={`${field} resize-y font-mono text-[13px] leading-[1.7]`}
              />
            )}
          </div>

          <label className="block">
            <span className={label}>
              Cover image URL <span className="font-normal text-slate-500">(optional)</span>
            </span>
            <input
              value={form.coverImage}
              onChange={(event) => update("coverImage", event.target.value)}
              placeholder="/workspace-setup.webp or https://…"
              disabled={pending}
              className={field}
            />
          </label>

          {form.coverImage && (
            <div
              role="img"
              aria-label="Cover preview"
              className="aspect-[16/7] w-full rounded-2xl bg-slate-100 bg-cover bg-center"
              style={{ backgroundImage: `url("${form.coverImage}")` }}
            />
          )}

          <div className="grid gap-5 sm:grid-cols-3">
            <label className="block">
              <span className={label}>Author</span>
              <input
                value={form.author}
                onChange={(event) => update("author", event.target.value)}
                disabled={pending}
                className={field}
              />
            </label>

            <label className="block">
              <span className={label}>Status</span>
              <select
                value={form.status}
                onChange={(event) => update("status", event.target.value as BlogStatus)}
                disabled={pending}
                className={field}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </label>

            <label className="block">
              <span className={label}>Publish date</span>
              <input
                type="date"
                value={form.publishedAt}
                onChange={(event) => update("publishedAt", event.target.value)}
                disabled={pending}
                className={field}
              />
            </label>
          </div>

          <label className="block">
            <span className={label}>Tags</span>
            <input
              value={form.tags}
              onChange={(event) => update("tags", event.target.value)}
              placeholder="AI, Careers, Learning"
              disabled={pending}
              className={field}
            />
            {tags.length > 0 && (
              <span className="mt-2 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#E9F4EF] px-2.5 py-1 text-[11px] font-semibold text-[#1C5E6E]"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </label>
        </div>

        {notice && (
          <p
            role={notice.tone === "error" ? "alert" : "status"}
            className={`mt-6 flex items-start gap-2 rounded-2xl px-4 py-3 text-[13px] leading-[1.6] ${
              notice.tone === "error"
                ? "bg-[#FBEDEA] text-[#8E2B20]"
                : "bg-[#E9F4EF] text-[#0F2A31]"
            }`}
          >
            {notice.tone === "error" ? (
              <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
            ) : (
              <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
            )}
            {notice.text}
          </p>
        )}

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#F2A93B] px-5 text-[14px] font-semibold text-[#0F2A31] transition-colors hover:bg-[#D98A1F] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? (
                <Loader2 size={15} aria-hidden="true" className="animate-spin" />
              ) : (
                <Save size={15} aria-hidden="true" />
              )}
              {pending ? "Saving…" : editing ? "Save changes" : form.status === "draft" ? "Save draft" : "Publish post"}
            </button>

            {form.id && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={pending}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#E7C6C0] px-5 text-[14px] font-semibold text-[#A33A2C] transition-colors hover:bg-[#FBEDEA] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Trash2 size={15} aria-hidden="true" />
                Delete
              </button>
            )}
          </div>

          {editing && (
            <p className="text-[12px] text-slate-500">
              Editing <span className="font-semibold text-[#0F2A31]">{form.title || "untitled"}</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
