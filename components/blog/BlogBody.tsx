import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Inline formatting: **bold**, `code`, and [links](https://example.com). */
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g);

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.88em] text-[#0F2A31]">
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const href = link[2];
      const safe = /^(https?:\/\/|mailto:|\/)/.test(href);
      if (!safe) return <span key={index}>{link[1]}</span>;
      return (
        <a
          key={index}
          href={href}
          className="font-medium text-[#1C5E6E] underline decoration-[#9FDEAF] decoration-2 underline-offset-4 hover:text-[#14454F]"
          {...(/^https?:\/\//.test(href) ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {link[1]}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function startsBlock(line: string): boolean {
  return (
    /^\s*#{1,3}\s+/.test(line) ||
    /^\s*>\s?/.test(line) ||
    /^\s*[-*]\s+/.test(line) ||
    /^\s*\d+\.\s+/.test(line)
  );
}

/**
 * A deliberately small Markdown renderer for post bodies: headings, lists,
 * quotes, paragraphs, bold, inline code and links. Rendering React nodes keeps
 * authored content from injecting HTML.
 */
export default function BlogBody({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let key = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = line.match(/^\s*(#{1,3})\s+(.*)$/);
    if (heading) {
      const text = renderInline(heading[2]);
      if (heading[1].length === 1) {
        blocks.push(
          <h2 key={key} className="mt-12 font-display text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1C5E6E]">
            {text}
          </h2>
        );
      } else if (heading[1].length === 2) {
        blocks.push(
          <h2 key={key} className="mt-12 font-display text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1C5E6E]">
            {text}
          </h2>
        );
      } else {
        blocks.push(
          <h3 key={key} className="mt-8 font-display text-[21px] font-bold leading-[1.3] tracking-[-0.01em] text-[#0F2A31]">
            {text}
          </h3>
        );
      }
      key += 1;
      index += 1;
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^\s*>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      blocks.push(
        <blockquote
          key={key}
          className="rounded-r-2xl border-l-4 border-[#9FDEAF] bg-[#F4FAF7] px-6 py-5 text-[18px] leading-[1.65] text-[#0F2A31]"
        >
          {renderInline(quote.join(" "))}
        </blockquote>
      );
      key += 1;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ul key={key} className="space-y-2.5 pl-5">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-disc pl-1 marker:text-[#1C5E6E]">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      key += 1;
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ol key={key} className="space-y-2.5 pl-5">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-decimal pl-1 marker:font-semibold marker:text-[#1C5E6E]">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      key += 1;
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !startsBlock(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(
      <p key={key} className="text-[17px] leading-[1.8] text-slate-700">
        {renderInline(paragraph.join(" "))}
      </p>
    );
    key += 1;
  }

  return <div className={cn("space-y-6", className)}>{blocks}</div>;
}
