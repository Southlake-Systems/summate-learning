import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { nav, site } from "@/lib/siteContent";

export default function SiteNav() {
  return (
    <div className="navbar">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="wordmark">
          Summate <span>Learning</span>
        </Link>

        <div className="nav__links">
          {nav.links.map((l) => (
            <Link key={l.label} href={l.href} className="nav__link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav__right">
          <div className="nav__social">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="nav__social-link">
                <Icon name={s.label} size={16} strokeWidth={1.75} />
              </a>
            ))}
          </div>
          <Link href={nav.secondaryCta.href} className="nav__link nav__link--strong">
            {nav.secondaryCta.label}
          </Link>
          <Link href={nav.primaryCta.href} className="nav__cta">
            {nav.primaryCta.label}{" "}
            <Icon name="ArrowRight" size={15} strokeWidth={2.25} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
