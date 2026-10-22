import { Plus } from "lucide-react";

/** Accordion built on <details>, so it works without JavaScript. */
export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-[#0F2A30] group-open:text-[#1D5F6E] sm:text-xl">
              {item.q}
            </span>
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-transform duration-200 group-open:rotate-45 group-open:border-[#1D5F6E] group-open:text-[#1D5F6E]"
            >
              <Plus size={16} strokeWidth={2.2} />
            </span>
          </summary>
          <p className="-mt-1 max-w-[68ch] pb-7 pr-14 text-[16px] leading-[1.7] text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
