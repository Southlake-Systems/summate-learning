import Link from "next/link";
import Icon from "@/components/ui/Icon";
import {
  Badge,
  Card,
  IconPlate,
  Avatar,
  SectionHeader,
  PlaceholderChip,
  PlaceholderImage,
} from "@/components/ui/primitives";
import {
  PathIllustration,
  StoryIllustration,
  CommunityIllustration,
} from "@/components/Illustrations";
import {
  hero,
  partners,
  personas,
  whyIntro,
  features,
  program,
  comparison,
  tools,
  steps,
  community,
  mentors,
  founders,
  insights,
  batchBenefits,
  finalCta,
  banners,
} from "@/lib/siteContent";

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section className="su-section">
      <div className="su-wrap hero">
        <div>
          <Badge tone="primary">{hero.eyebrow}</Badge>
          <h1 className="su-text-display-lg" style={{ margin: "24px 0 0", maxWidth: "15ch" }}>
            {hero.headline}
          </h1>
          <div className="prose" style={{ marginTop: 24 }}>
            {hero.body.map((p, i) => (
              <p key={i} className="su-text-body-md lede">
                {p}
              </p>
            ))}
            <p className="su-text-body-strong">{hero.emphasis}</p>
          </div>
          <ul className="ticklist ticklist--grid" style={{ marginTop: 24 }}>
            {hero.capabilities.map((c) => (
              <li key={c}>
                <Icon name="Check" size={16} strokeWidth={2.5} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="hero__ctas">
            <Link href="/apply" className="btn btn--primary btn--lg">
              Apply for Batch 1
            </Link>
            <Link href="/#our-story" className="btn btn--text">
              Meet the team <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
        <div className="hero__art-wrap">
          <PathIllustration className="hero__art" />
          <div className="hero__meta card">
            <span className="stat-bar__value">{hero.meta.value}</span>
            <span className="stat-bar__label">{hero.meta.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LogoMarquee ---------------- */
export function LogoMarquee() {
  const row = [...partners.logos, ...partners.logos];
  return (
    <section className="marquee-section">
      <div className="su-wrap">
        <p className="marquee-label su-text-caption-strong">
          {partners.label}
          {partners.placeholder && (
            <>
              {" "}
              <PlaceholderChip>Placeholder logos</PlaceholderChip>
            </>
          )}
        </p>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {row.map((name, i) => (
            <span className="marquee__logo" key={i}>
              <Icon name="Building2" size={16} strokeWidth={1.75} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PersonaCards ---------------- */
export function PersonaCards() {
  return (
    <section className="su-section band--soft">
      <div className="su-wrap">
        <SectionHeader
          eyebrow="What brings you to Summate?"
          title="There’s no single starting point for learning."
          lede="Summate Learning is for people at different points in their journey — the need to learn, adapt and grow does not disappear once you get a degree or a job."
        />
        <div className="grid-4" style={{ marginTop: 40 }}>
          {personas.map((p) => (
            <Card key={p.title} hover>
              <IconPlate name={p.icon} />
              <div className="su-text-title-md feature__title">{p.title}</div>
              <p className="su-text-body-sm feature__body">{p.body}</p>
              <Link href={p.cta.href} className="btn btn--text" style={{ marginTop: 16 }}>
                {p.cta.label} <Icon name="ArrowRight" size={15} />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FeatureGrid ---------------- */
export function FeatureGrid() {
  return (
    <section className="su-section" id="why">
      <div className="su-wrap">
        <SectionHeader eyebrow={whyIntro.eyebrow} title={whyIntro.title} lede={whyIntro.lede} />
        <div className="grid-3" style={{ marginTop: 40 }}>
          {features.map((f) => (
            <Card key={f.title} hover>
              <IconPlate name={f.icon} />
              <div className="su-text-title-md feature__title">{f.title}</div>
              <p className="su-text-body-sm feature__body">{f.body}</p>
              {f.placeholder && (
                <div style={{ marginTop: 12 }}>
                  <PlaceholderChip />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ProgramSpotlight ---------------- */
export function ProgramSpotlight() {
  return (
    <section className="su-section band--soft" id="program">
      <div className="su-wrap">
        <SectionHeader eyebrow={program.eyebrow} title="One program. Built to be defensible." />
        <div className="program-card card">
          <div className="program-card__media">
            <PlaceholderImage label="Program preview" icon="Video" ratio="4 / 3" />
          </div>
          <div className="program-card__body">
            <div className="chips">
              {program.badges.map((b) => (
                <Badge key={b} tone="primary">
                  {b}
                </Badge>
              ))}
            </div>
            <h3 className="su-text-title-lg" style={{ margin: "12px 0 8px" }}>
              {program.title}
            </h3>
            <p className="su-text-title-sm" style={{ color: "var(--su-body)", fontWeight: 400 }}>
              {program.subtitle}
            </p>
            <p className="su-text-body-md feature__body" style={{ marginTop: 12 }}>
              {program.description}
            </p>
            <div className="program-card__meta">
              {program.meta.map((m) => (
                <div key={m.label}>
                  <div className="stat-bar__value" style={{ fontSize: 20 }}>
                    {m.value}
                  </div>
                  <div className="stat-bar__label">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="hero__ctas">
              <Link href="/apply" className="btn btn--primary">
                Apply for Batch 1
              </Link>
              <Link href="/#curriculum" className="btn btn--secondary">
                See the curriculum
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginTop: 24 }}>
          {program.comingSoon.map((c) => (
            <div className="card coming-soon" key={c}>
              <Badge tone="neutral">Coming soon</Badge>
              <div className="su-text-title-md" style={{ marginTop: 10 }}>
                {c}
              </div>
              <p className="su-text-body-sm feature__body">
                More learning pathways are planned as Summate grows.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Curriculum wrapper (header + client accordion) ---------------- */
export function CurriculumSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="su-section" id="curriculum">
      <div className="su-wrap su-wrap--narrow">
        <SectionHeader
          eyebrow="Curriculum"
          title="Twelve weeks, in four phases."
          lede="Foundations first, then a full-stack build, then the engineering practice around it, then AI and interview readiness."
          placeholder
        />
        <div style={{ marginTop: 32 }}>{children}</div>
      </div>
    </section>
  );
}

/* ---------------- ComparisonTable ---------------- */
export function ComparisonTable() {
  return (
    <section className="su-section band--soft">
      <div className="su-wrap">
        <SectionHeader
          eyebrow="What makes Batch 1 different"
          title="What the real world demands — and how Batch 1 answers it."
        />
        <div className="compare" style={{ marginTop: 32 }}>
          <div className="compare__grid">
            <div className="compare__h">Area</div>
            <div className="compare__h">What the real world demands</div>
            <div className="compare__h compare__h--batch">Batch 01</div>
            {comparison.map((r) => (
              <div key={r.area} style={{ display: "contents" }}>
                <div className="compare__area">{r.area}</div>
                <div className="compare__cell">{r.real}</div>
                <div className="compare__cell compare__cell--batch">
                  <Icon name="Check" size={16} strokeWidth={2.5} className="compare__check" /> {r.batch}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ToolStrip ---------------- */
export function ToolStrip() {
  return (
    <section className="su-section" id="tools">
      <div className="su-wrap">
        <SectionHeader eyebrow="Tools & technologies" title="The stack you’ll actually work in." />
        <div className="tool-grid" style={{ marginTop: 32 }}>
          {tools.items.map((t) => (
            <div className="tool" key={t.label}>
              <Icon name={t.icon} size={20} strokeWidth={1.75} />
              <span className="su-text-title-sm">{t.label}</span>
            </div>
          ))}
        </div>
        <p className="su-text-body-sm" style={{ color: "var(--su-muted)", marginTop: 16 }}>
          {tools.note} {tools.placeholder && <PlaceholderChip />}
        </p>
      </div>
    </section>
  );
}

/* ---------------- StepPath ---------------- */
export function StepPath() {
  return (
    <section className="su-section band--soft" id="how-it-works">
      <div className="su-wrap">
        <SectionHeader eyebrow="How it works" title="From application to your next step." />
        <ol className="stepper" style={{ marginTop: 40 }}>
          {steps.map((s, i) => (
            <li className="stepper__item" key={s.title}>
              <div className="stepper__marker">
                <span className="stepper__num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="stepper__head">
                <Icon name={s.icon} size={18} strokeWidth={1.75} />
                <span className="su-text-title-sm">{s.title}</span>
              </div>
              <p className="su-text-body-sm step__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- PromoBanner (mid-page) ---------------- */
export function PromoBanner() {
  if (!banners.promo.enabled) return null;
  const b = banners.promo;
  return (
    <section className="promo">
      <div className="su-wrap promo__inner">
        <div>
          <span className="eyebrow eyebrow--on-primary">{b.kicker}</span>
          <h2 className="su-text-display-sm" style={{ margin: "8px 0 8px" }}>
            {b.title}
          </h2>
          <p className="su-text-body-md" style={{ maxWidth: "52ch", color: "rgba(255,255,255,.86)" }}>
            {b.body}
          </p>
        </div>
        <Link href={b.href} className="btn btn--on-primary btn--lg">
          {b.cta}
        </Link>
      </div>
    </section>
  );
}

/* ---------------- CommunityStrip ---------------- */
export function CommunityStrip() {
  return (
    <section className="su-section">
      <div className="su-wrap split">
        <div>
          <SectionHeader eyebrow={community.eyebrow} title={community.title} />
          <div className="callouts" style={{ marginTop: 24 }}>
            {community.items.map((c) => (
              <div className="callout" key={c.title}>
                <Icon name={c.icon} size={18} strokeWidth={1.75} />
                <div>
                  <div className="su-text-title-sm">{c.title}</div>
                  <p className="su-text-body-sm feature__body">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="art-frame">
          <PlaceholderImage label="Session preview" icon="Video" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- MentorCards ---------------- */
export function MentorCards() {
  return (
    <section className="su-section band--soft" id="mentors">
      <div className="su-wrap">
        <SectionHeader
          eyebrow="Mentors"
          title="Taught by people who do the work."
          lede={mentors.note}
          placeholder
        />
        <div className="grid-4" style={{ marginTop: 40 }}>
          {mentors.people.map((m, i) => (
            <Card key={i}>
              <Avatar initials={m.initials} />
              <div className="su-text-title-sm" style={{ marginTop: 14 }}>
                {m.name}
              </div>
              <p className="su-text-body-sm feature__body">{m.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PlacementBanner ---------------- */
export function PlacementBanner() {
  if (!banners.placement.enabled) return null;
  const b = banners.placement;
  return (
    <section className="su-section band--dark on-dark" id="placements">
      <div className="su-wrap">
        <span className="eyebrow eyebrow--on-dark">{b.kicker}</span>
        <h2 className="su-text-display-sm" style={{ margin: "12px 0 12px", maxWidth: "20ch" }}>
          {b.title}
        </h2>
        <p className="su-text-body-md lede">{b.body}</p>
        {b.placeholder && (
          <div style={{ marginTop: 12 }}>
            <PlaceholderChip>Scope, process and terms to be finalised</PlaceholderChip>
          </div>
        )}
        <div className="partner-row" aria-hidden="true">
          {["Hiring partner", "Hiring partner", "Hiring partner", "Hiring partner"].map((p, i) => (
            <span className="partner-row__slot" key={i}>
              <Icon name="Building2" size={16} strokeWidth={1.75} />
              {p}
            </span>
          ))}
        </div>
        <Link href={b.href} className="btn btn--outline btn--lg" style={{ marginTop: 28 }}>
          {b.cta}
        </Link>
      </div>
    </section>
  );
}

/* ---------------- TestimonialsSection wrapper ---------------- */
export function TestimonialsSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="su-section">
      <div className="su-wrap">
        <SectionHeader eyebrow="Learner stories" title="The first stories are still being written." />
        <div style={{ marginTop: 32 }}>{children}</div>
      </div>
    </section>
  );
}

/* ---------------- FoundersNote ---------------- */
export function FoundersNote() {
  return (
    <section className="su-section band--soft" id="our-story">
      <div className="su-wrap split">
        <div>
          <span className="eyebrow">{founders.eyebrow}</span>
          <h2 className="su-text-display-md" style={{ margin: "12px 0 24px" }}>
            {founders.title}
          </h2>
          <div className="quote">
            <p>“{founders.quote}”</p>
          </div>
          {founders.placeholder && (
            <div style={{ marginTop: 12 }}>
              <PlaceholderChip>Founders’ note to be added</PlaceholderChip>
            </div>
          )}
          <p className="su-text-body-md lede" style={{ marginTop: 24 }}>
            {founders.closing}
          </p>
          <p className="su-text-body-strong" style={{ marginTop: 8 }}>
            {founders.signoff}
          </p>
        </div>
        <div className="art-frame">
          <StoryIllustration tone="light" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- BatchBenefits ---------------- */
export function BatchBenefits() {
  return (
    <section className="su-section band--dark on-dark">
      <div className="su-wrap split">
        <div>
          <span className="eyebrow eyebrow--on-dark">{batchBenefits.eyebrow}</span>
          <h2 className="su-text-display-sm" style={{ margin: "12px 0 16px" }}>
            {batchBenefits.title}
          </h2>
          <p className="su-text-body-md lede">{batchBenefits.lede}</p>
          <div className="benefits">
            {batchBenefits.items.map((b) => (
              <div className="benefit" key={b}>
                <span className="benefit__check" aria-hidden="true">
                  <Icon name="Check" size={18} strokeWidth={2.5} />
                </span>
                <span className="su-text-body-md">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="art-frame">
          <CommunityIllustration tone="dark" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- InsightCards ---------------- */
export function InsightCards() {
  return (
    <section className="su-section band--soft" id="insights">
      <div className="su-wrap">
        <SectionHeader eyebrow="Insights" title="Notes on learning, AI and getting job-ready." placeholder />
        <div className="grid-3" style={{ marginTop: 40 }}>
          {insights.items.map((a) => (
            <Card key={a.title} hover>
              <PlaceholderImage label={a.tag} icon="FileText" ratio="16 / 9" />
              <div className="chips" style={{ marginTop: 16 }}>
                <Badge tone="neutral">{a.tag}</Badge>
                <Badge tone="warning">{a.date}</Badge>
              </div>
              <div className="su-text-title-md feature__title" style={{ marginTop: 10 }}>
                {a.title}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MentorRecruitBanner ---------------- */
export function MentorRecruitBanner() {
  if (!banners.mentorRecruit.enabled) return null;
  const b = banners.mentorRecruit;
  return (
    <section className="su-section">
      <div className="su-wrap recruit card">
        <div>
          <span className="eyebrow">{b.kicker}</span>
          <h2 className="su-text-title-lg" style={{ margin: "8px 0 8px" }}>
            {b.title}
          </h2>
          <p className="su-text-body-md feature__body" style={{ maxWidth: "56ch" }}>
            {b.body}
          </p>
        </div>
        <Link href={b.href} className="btn btn--primary btn--lg">
          {b.cta}
        </Link>
      </div>
    </section>
  );
}

/* ---------------- EnquirySection wrapper ---------------- */
export function EnquirySection({ children }: { children: React.ReactNode }) {
  return (
    <section className="su-section band--soft" id="enquiry">
      <div className="su-wrap split">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Have a question? Ask us."
            lede="Not ready to apply yet? Send a question or ask for a callback, and someone from the team will get back to you."
          />
          <ul className="ticklist" style={{ marginTop: 20 }}>
            <li>
              <Icon name="Check" size={16} strokeWidth={2.5} />
              <span>Live online — accessible across South India</span>
            </li>
            <li>
              <Icon name="Check" size={16} strokeWidth={2.5} />
              <span>Built for graduates, professionals and career-changers</span>
            </li>
            <li>
              <Icon name="Check" size={16} strokeWidth={2.5} />
              <span>Founding batch begins September 2026</span>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

/* ---------------- FinalCta ---------------- */
export function FinalCta() {
  return (
    <section className="su-section finalcta">
      <div className="su-wrap su-wrap--narrow">
        <h2 className="su-text-display-md">{finalCta.title}</h2>
        <p className="su-text-body-md lede">{finalCta.body}</p>
        <Link href={finalCta.cta.href} className="btn btn--primary btn--lg">
          {finalCta.cta.label}
        </Link>
      </div>
    </section>
  );
}
