import { PageShell, PageHero, Section } from "@/components/site/Page";

export type LegalSection = { title: string; body: (string | string[])[] };

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell>
      <PageHero crumbs={[{ label: title }]} title={title} lede={intro}>
        <p className="text-[14px] text-slate-500">Last updated {updated}</p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 space-y-1 text-[14px]">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#${slug(s.title)}`} className="block rounded-lg px-3 py-1.5 text-slate-500 hover:bg-[#F8FAFF] hover:text-[#1E3ABA]">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-[70ch] space-y-12 lg:col-span-9">
            {sections.map((s, i) => (
              <section key={s.title} id={slug(s.title)} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0D1222]">
                  {i + 1}. {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-[1.75] text-slate-600">
                  {s.body.map((block, j) =>
                    Array.isArray(block) ? (
                      <ul key={j} className="list-disc space-y-2 pl-5 marker:text-slate-400">
                        {block.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{block}</p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
