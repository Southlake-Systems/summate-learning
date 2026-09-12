import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { banners } from "@/lib/siteContent";

export function AnnounceBar() {
  if (!banners.announcement.enabled) return null;

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-[#1E3ABA] via-[#7C3AED] to-[#151D36] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs sm:px-6 lg:px-8">
        {/* Left Indicator + Text */}
        <div className="flex items-center gap-2 font-medium">
          <span className="h-2 w-2 rounded-full bg-[#FF8A00] animate-pulse" />
          <span className="truncate">{banners.announcement.text}</span>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4 pl-4 shrink-0">
          <span className="hidden text-slate-300 md:inline">Limited seats for Batch 1</span>
          <Link
            href={banners.announcement.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF2D75] to-[#FF8A00] px-3.5 py-1 font-semibold text-white shadow-sm transition-opacity hover:opacity-90 active:scale-95"
          >
            <span>{banners.announcement.cta}</span>
            <Icon name="ArrowRight" size={13} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}