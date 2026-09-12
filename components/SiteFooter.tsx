import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { footer, site } from "@/lib/siteContent";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="su-wrap">
        <div className="mega-footer">
          <div className="footer__brand">
            <div className="wordmark" style={{ marginBottom: 12 }}>
              Summate <span>Learning</span>
            </div>
            <p className="su-text-body-sm" style={{ color: "var(--su-body)", maxWidth: 260 }}>
              Founding Program: AI-Augmented Full-Stack Developer Course. Live online, starting
              September 2026.
            </p>
            <div className="footer__contact">
              <a href={`mailto:${site.email}`}>
                <Icon name="Mail" size={15} strokeWidth={1.75} /> {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Icon name="Phone" size={15} strokeWidth={1.75} /> {site.phone}
              </a>
              <span>
                <Icon name="MapPin" size={15} strokeWidth={1.75} /> {site.regions.join(" · ")}
              </span>
            </div>
            <div className="footer__social">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <Icon name={s.label} size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((c) => (
            <div className="footer__col" key={c.title}>
              <span className="su-text-caption-strong" style={{ color: "var(--su-muted)" }}>
                {c.title}
              </span>
              {c.links.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <form
            className="footer__newsletter"
            action="/#enquiry"
            aria-label="Get launch updates"
          >
            <span className="su-text-caption-strong" style={{ color: "var(--su-muted)" }}>
              Launch updates
            </span>
            <p className="su-text-body-sm" style={{ color: "var(--su-body)" }}>
              Occasional emails about Batch 1 and new pathways.
            </p>
            <div className="footer__newsletter-row">
              <input type="email" placeholder="you@example.com" aria-label="Email address" />
              <button type="submit" className="btn btn--primary">
                <Icon name="ArrowRight" size={16} strokeWidth={2.25} />
              </button>
            </div>
          </form>
        </div>

        <div className="footer__legal">
          © 2026 Summate Learning. All rights reserved. · Founding Batch · Live Online · September 2026
        </div>
      </div>
    </footer>
  );
}
