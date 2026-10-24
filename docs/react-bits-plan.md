# React Bits — what to use where

A working plan for adopting components from the free React Bits library
(reactbits.dev) across the Summate Learning site. Written against the current
codebase: Next 14 App Router, React 18, Tailwind 3.4, TypeScript, one WebGL
background already live (`GradientASCII` in the closing CTA).

The library index lists **33 text animations, 38 animations, 48 components,
35 micro-interactions and 63 backgrounds**. That is far more than this site
needs. The plan below is deliberately narrow: a considered education brand
should feel calm and credible, not like a demo reel.

---

## 1. The rules

1. **One showpiece per screen.** A page gets at most one WebGL/shader surface.
   Text and interface motion can be layered on top, but never two competing
   canvases in the same viewport.
2. **Motion must explain something.** A component earns its place if it shows
   progression, comparison, quantity or craft. Decoration that loops forever
   behind reading text is a liability.
3. **Nothing gates content.** Every animation must resolve to readable text
   without interaction, and must be skipped entirely under
   `prefers-reduced-motion`.
4. **Pointer effects are opt-in by device.** Cursor trails, magnet buttons and
   click sparkles only on devices with a fine pointer; never on touch.
5. **Weight is budgeted.** No page gains more than ~25 KB of first-load JS for
   non-WebGL components, and WebGL is always a lazy, route-level chunk. three.js
   (~600 KB) is banned unless a page genuinely cannot be built without it.
6. **Palette first.** Every component is themed from the site tokens
   (`#0F2A30`, `#1D5F6E`, `#55C9B8`, `#EF6F51`, `#F4B942`), never shipped
   with its demo colours.

Variant convention: we are TypeScript + Tailwind, so install the `-TS-TW`
identifier, e.g. `npx shadcn@latest add @react-bits/LogoLoop-TS-TW`.

---

## 2. The plan, surface by surface

Priority: **P1** = do first (high impact, low risk) · **P2** = next wave ·
**P3** = only after the above ships and measures well.

### Global chrome

| Where | Component | Why | Priority |
|---|---|---|---|
| Primary "Apply for Batch 1" buttons | `StarBorder` or `SpecularButton` | The conversion action should be the most alive element on the page. `StarBorder` draws a slow light around the exact pill shape; `SpecularButton` is the quieter option. Pick one, not both. | P1 |
| Nav dropdown (About) | `CardNav` | The About menu already opens a panel of links with descriptions — `CardNav` is that idea with spring physics and per-link cards. Desktop only. | P3 |
| Long pages, sticky nav edge | `GradualBlur` | Progressive blur under the header instead of a hard 1px line; also useful at the bottom of long lists and the course curriculum. | P2 |
| Section backgrounds (dark surfaces) | `Noise` at 2–4% | Kills banding on the dark teal gradients and adds print-like texture. Cheapest quality win in the library. | P1 |

### Home

| Section | Component | Why | Priority |
|---|---|---|---|
| ToolStrip (20 logos) | `LogoLoop` | The static 10-across grid is already the weakest block on the page. A seamless logo marquee with hover-pause reads as "industry tools" instantly and costs almost nothing. | P1 |
| TrackCatalog (program cards) | `SpotlightCard` | Pointer-following spotlight on the three course cards; keeps the card design, adds depth. Works with existing hover lift. | P1 |
| WhySummate → "The gap" (4 cells) | `GlareHover` | A light sweep as the pointer crosses each cell; lighter than rebuilding the row as a Magic Bento. | P2 |
| WhySummate → philosophy cards (3 flip cards) | `FlipCard` | Replaces the hand-rolled flip with a spring-based one that behaves properly on touch. Same content, better feel. | P2 |
| BatchBenefits (6-item list + image) | `AnimatedList` | The list already auto-advances; `AnimatedList` gives rows spring entry and a gliding selection instead of the current height-animated description. | P2 |
| PersonaCards (3 audiences) | `TiltedCard` | Subtle 3D tilt + glare on the three path cards; no layout change. | P2 |
| Hero | `ShinyText` on the gradient word only | One slow sheen on "know." — a single accent, not a headline treatment. Do **not** animate the whole headline. | P3 |
| Final CTA | already `GradientASCII` | Keep. It is the page's one showpiece; nothing else on the home page should be WebGL. | shipped |

### Courses

| Surface | Component | Why | Priority |
|---|---|---|---|
| `/courses` cards | `SpotlightCard` (reuse) | Consistency with the home program cards. | P1 |
| Course detail — curriculum modules | `ScrollStack` | Modules pin and stack as you scroll, which makes a 12-week structure legible as a sequence rather than a long list. Only if the module list stays on one screen per phase. | P2 |
| Course detail — tools row | `LogoLoop` (reuse) | Same component as home, smaller scale. | P1 |
| Course detail — "at a glance" facts | `CountUp` | 12 weeks, 6 tools, 1 project, batch size — numbers that count up on entry carry more weight than static text. | P1 |
| Course detail — project showcase | `ScrollExpand` | A single project image that grows to full bleed while scrolling; the natural home for the "one real project" claim. | P3 |

### About / Leadership / Faculty / Founder

| Surface | Component | Why | Priority |
|---|---|---|---|
| About — long prose blocks | `ScrollReveal` | Replaces the current fade-up with a crisp unblur on scroll; better for long-form paragraphs. | P2 |
| About — values / differentiators | `MagicBento` | If these get restructured into a bento grid later, this is the component for it. Not a change to make now. | P3 |
| Leadership / Faculty cards | `ProfileCard` or `TiltedCard` | `TiltedCard` is the restrained choice and matches the existing cards. `ProfileCard`'s holographic foil is too flashy for faculty. | P2 |
| Founder page — pull quotes | `ScrollFloat` | Gentle parallax on the pull quotes as they pass; keeps the memoir tone. | P3 |
| Founder page — headline | `MaskedHeading` | A slow colour mesh inside the headline, revealed word by word. One page only. | P3 |

### Circle

| Surface | Component | Why | Priority |
|---|---|---|---|
| Hero orbit (`CircleOrbit`) | `CircularGallery` | The page already orbits avatars/photos; a real circular gallery with drag and momentum is the honest upgrade. | P2 |
| Events / meetups | `Carousel` | Swipeable cards with autoplay for upcoming gatherings; works on touch by default. | P2 |
| Members strip | `BounceCards` | A small fan of member cards that spreads on hover; playful but bounded. | P3 |

### FAQ / Contact / Careers

| Surface | Component | Priority |
|---|---|---|
| FAQ | Keep `FaqList`. Add `TextLoop` for the "still have a question" strip. | P3 |
| Contact | Keep the form. `WarmTooltip` on the field hints if the form grows. | P3 |
| Careers — open roles | `AnimatedList` | Roles as spring rows with a gliding selection, consistent with BatchBenefits. | P2 |
| Careers — "what we look for" | `Magnet` on the section CTAs | Tasteful pull on hover, fine-pointer only. | P3 |

### New surfaces worth adding

| Idea | Component | Note |
|---|---|---|
| 404 page (none exists) | `GlitchText` + `SplashCursor` | A small, self-contained page — the one place a wild effect is welcome. | P3 |
| Cohort/placement numbers, if added to content | `CountUp` | Reuse. |

---

## 3. Explicitly skipped

| Component(s) | Why not |
|---|---|
| Cursor systems — `BlobCursor`, `SplashCursor`, `SwarmCursor`, `Crosshair`, `TargetCursor`, `GhostCursor`, `RibbonTrail`, `ImageTrail` | They replace or trail the system cursor. On a site whose job is filling an application form, they cost usability and accessibility, and read as gimmick on an education brand. |
| Headline-level text effects — `FallingText`, `ParticleText`, `WarpText`, `ScrambledText`, `GlitchText` (as headings), `DepthText` | Headlines are the one thing that must be instantly readable and SEO-legible. Keep motion to a single accent word. |
| Heavy galleries — `DomeGallery`, `InfiniteMenu`, `Lanyard`, `FlyingPosters`, `Stack`, `InfiniteSpiral` | Large payloads, heavy pointer dependence, and content that is better shown as a plain grid. |
| Full-page backgrounds — `Galaxy`, `Hyperspeed`, `LightTunnel`, `Vortex`, `WarpTwister`, `CRTWarp`, `LetterGlitch` | Compete with the existing GradientASCII moment and with the brand's calm. |
| `Preloader`, `Carousel` (as the hero), `Dock`, `BubbleMenu` | Preloader is a Pro (paid) component; the others solve navigation problems this site does not have. |
| Anything from **React Bits Pro** | Paid, and the free library already covers every need above. Not required for this plan. |

---

## 4. Phases

**Phase 1 — cheap, high-yield (≈1–2 days)**
LogoLoop (tools ×2 pages), SpotlightCard (program cards ×2), CountUp (course facts), StarBorder or SpecularButton on Apply CTAs, Noise overlay on dark sections. No new heavyweight dependencies expected; verify each registry entry's `dependencies` before installing.

**Phase 2 — interaction upgrades (≈3–5 days)**
AnimatedList (BatchBenefits, Careers), FlipCard (philosophy), TiltedCard (personas, people cards), GlareHover (gap row), Carousel + CircularGallery (Circle), GradualBlur (nav/lists).

**Phase 3 — editorial + signature moments (≈1–2 weeks)**
ScrollReveal (About), MaskedHeading/ScrollFloat (founder), ScrollStack (curriculum), ScrollExpand (project), CardNav (About dropdown), 404 page.

**Phase 4 — audit**
Lighthouse before/after per route, reduced-motion pass on every new component, bundle report, mobile check on a mid-range Android profile.

---

## 5. Integration kit

**Install one at a time**, then theme it:

```bash
npx shadcn@latest add @react-bits/LogoLoop-TS-TW
```

Most of these are client components. Wrap anything with `useEffect`, WebGL or
`window` access in a single gate so the rules in §1 hold everywhere:

```tsx
// components/ui/MotionGate.tsx
"use client";
export default function MotionGate({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion(); // matchMedia hook, already used in Choreography
  return reduced ? null : <>{children}</>;
}
```

For WebGL surfaces, lazy-load at the route level so the shader never lands in
the first payload:

```tsx
const GradientASCII = dynamic(() => import("@/components/GradientASCII"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#0F2A30]" />,
});
```

Rules that must survive every install:

- Re-apply the **StrictMode patch** to any WebGL component: upstream often calls
  `WEBGL_lose_context` on unmount, which blanks the canvas on React's double
  mount in development.
- Reduced motion: render nothing (not a frozen frame) for shader backgrounds.
- Touch devices: disable pointer-follow effects with `matchMedia("(pointer: fine)")`.
- Palette: map every component's colour props from the tokens, and check
  contrast on the dark surfaces — the ASCII background needed a scrim to keep
  body copy at 4.5:1.

---

## 6. How we will know it worked

- No route's first-load JS grows by more than 25 KB (shader routes excluded, but
  they must stay lazy).
- Lighthouse performance ≥ 85 on mobile for `/` and `/courses/[slug]`.
- Reduced-motion mode shows every piece of content with zero canvases running.
- Form starts (Apply clicks) do not drop after any motion change — the CTA is
  the one thing that must never get subtler.
