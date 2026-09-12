import type { ReactNode } from "react";
import Icon from "./Icon";

/* Badge ------------------------------------------------------------- */
type BadgeTone = "primary" | "neutral" | "success" | "warning" | "dark";
export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: BadgeTone }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}

/* PlaceholderChip ------------------------------------------------------ */
export function PlaceholderChip({ children = "Placeholder — to be finalised" }: { children?: ReactNode }) {
  return (
    <span className="pchip">
      <Icon name="Clock" size={12} strokeWidth={2} /> {children}
    </span>
  );
}

/* SectionHeader ------------------------------------------------------ */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  onDark,
  center,
  placeholder,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  onDark?: boolean;
  center?: boolean;
  placeholder?: boolean;
}) {
  return (
    <header className={`section-header${center ? " section-header--center" : ""}`}>
      {eyebrow && (
        <span className={`eyebrow${onDark ? " eyebrow--on-dark" : ""}`}>{eyebrow}</span>
      )}
      <h2 className="su-text-display-sm section-header__title">{title}</h2>
      {lede && <p className="su-text-body-md lede">{lede}</p>}
      {placeholder && (
        <div style={{ marginTop: 12 }}>
          <PlaceholderChip />
        </div>
      )}
    </header>
  );
}

/* Card -------------------------------------------------------------- */
export function Card({
  children,
  dark,
  hover,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  hover?: boolean;
  className?: string;
}) {
  return (
    <div className={`card${dark ? " card--dark" : ""}${hover ? " card--hover" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* IconPlate -------------------------------------------------------- */
export function IconPlate({ name }: { name: string }) {
  return (
    <div className="feature__icon">
      <Icon name={name} size={22} strokeWidth={1.75} />
    </div>
  );
}

/* Avatar ---------------------------------------------------------- */
export function Avatar({ initials }: { initials: string }) {
  return <div className="avatar" aria-hidden="true">{initials}</div>;
}

/* PlaceholderImage ------------------------------------------------- *
 * Stands in for photography until real assets arrive.
 * Replace with `next/image` + a real `src` when available.
 */
export function PlaceholderImage({
  label,
  ratio = "16 / 10",
  icon = "Video",
}: {
  label: string;
  ratio?: string;
  icon?: string;
}) {
  return (
    <div className="placeholder-img" style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <Icon name={icon} size={28} strokeWidth={1.5} />
      <span className="su-text-caption-strong">{label}</span>
      <span className="placeholder-img__hint">Image placeholder</span>
    </div>
  );
}
