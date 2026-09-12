# Summate Learning — Website

Marketing site for Summate Learning's founding program, the **AI-Augmented Full-Stack
Developer Course** (12-week, live online, Batch 1 — September 2026).

Built with **Next.js 14 (App Router) + TypeScript**. Styling uses the tokens and type
scale from the *Summate Learning Design System* (`app/globals.css`), with component
styles in `app/components.css`. Icons: `lucide-react`. Illustrations: custom flat SVG.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Content — edit one file

**All copy, lists and config live in `lib/siteContent.ts`.** Components read from it;
you should not need to touch JSX to change wording, links, stats, curriculum, FAQs,
footer columns, etc.

Anything not yet confirmed by the team is marked `TODO:` in that file and, where the
section supports it, renders a small amber **"Placeholder"** chip on the page. Current
placeholders: partner/hiring logos, stat figures, week-by-week curriculum, tool stack,
mentor profiles, testimonials, blog posts, founders' note, pricing, contact details,
social URLs.

## Custom banners

Four banners, all configured under `banners` in `lib/siteContent.ts`. Each has an
`enabled` boolean — set it to `false` to hide the banner (layout stays intact).

| Banner | Key | Where it renders | Use it for |
|---|---|---|---|
| Top announcement bar | `banners.announcement` | Above the nav, every page | Batch dates, deadlines, offers. Visitor-dismissible (remembered per browser; bump `DISMISS_KEY` in `components/marketing/client.tsx` to re-show for everyone). |
| Mid-page promo | `banners.promo` | Homepage, after "How it works" | A single focused push — "seats are limited", "applications close soon". Full-width blue band. |
| Placement / hiring | `banners.placement` | Homepage `#placements`, dark band | Placement-support scope + (future) hiring-partner logos. |
| Teach with us | `banners.mentorRecruit` | Homepage, before FAQs | Recruiting mentors / session leads. |

## Page structure (homepage)

Order in `app/page.tsx`, modelled on akumen / IBIS / Luminar:

1. Announcement bar · Nav (links, socials, "Book a callback", Apply CTA)
2. **Hero** — headline, capability checklist, dual CTA, illustration + floating meta card
3. **Partner marquee** — scrolling hiring-partner strip (placeholder logos; pauses on hover / reduced-motion)
4. **Stat bar** — count-up figures
5. **Persona cards** — "What brings you to Summate?" (Starting out / Moving forward / Changing course / Hiring talent)
6. **Feature grid** — 6 differentiator icon cards
7. **Program spotlight** — rich program card + "coming soon" pathway cards
8. **Curriculum** — 4-phase accordion
9. **Comparison table** — real world vs Batch 01
10. **Tool strip** — tech chips
11. **How it works** — 5-step horizontal stepper
12. **Promo banner** ← custom
13. **Community strip** — icon callouts + session-preview placeholder
14. **Mentor cards** — avatar placeholders
15. **Placement banner** ← custom (dark)
16. **Testimonials** — empty-state invite + example carousel
17. **Founders' note** — quote + illustration
18. **Batch 1 benefits** — dark band + illustration
19. **Insights** — blog card placeholders
20. **Teach-with-us banner** ← custom
21. **FAQ** — accordion
22. **Enquiry form** — short contact form (separate from `/apply`)
23. **Final CTA**
24. **Mega footer** — Program / Pathways / About / Support / Legal + contact + newsletter

`/apply` reuses the nav/footer with the full application form.

## Components

- `components/ui/` — `Icon` (name→lucide map), `primitives.tsx` (Badge, Card,
  SectionHeader, IconPlate, Avatar, PlaceholderImage, PlaceholderChip).
- `components/marketing/sections.tsx` — server components, one per section.
- `components/marketing/client.tsx` — interactive: `AnnounceBar`, `StatBar`,
  `Curriculum`, `Testimonials`, `EnquiryForm`.
- `components/Illustrations.tsx` — `PathIllustration`, `StoryIllustration`,
  `CommunityIllustration` (flat, one blue voltage, no photography).
- `components/{SiteNav,SiteFooter,Faq,ApplyForm}.tsx`.

## Images

`PlaceholderImage` (in `components/ui/primitives.tsx`) is a hatched panel standing in for
photography. When real assets arrive, drop them in `public/` and swap `PlaceholderImage`
for `next/image` with a real `src`.

## Design-system deviations (deliberate)

The reference sites are denser than the Summate Learning Design System's calm brief. Per
the brief owner's direction, this site adds: the scrolling partner marquee, the
testimonials carousel, count-up stats, coloured category badges, and hatched image
placeholders. Colour tokens, type scale and spacing still come straight from the design
system. All motion is disabled under `prefers-reduced-motion`.

## Still to wire up

- Application form + enquiry form + newsletter → a real endpoint (email, Google Form, or a route handler).
- Replace every `TODO:` in `lib/siteContent.ts`.
- Add a logo file (currently the "Summate Learning" wordmark only).
