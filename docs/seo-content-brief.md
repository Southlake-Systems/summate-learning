# SEO Content Brief — Summate Learning

**Prepared:** 7 November 2026
**For:** Content team
**Goal:** Build the pages and copy needed to rank for five query clusters: brand, course, local, decision-stage, and informational.
**Stack context:** Next.js 14 App Router. Copy lives in `lib/siteContent.ts` and `lib/pageContent.ts`; page shells are in `app/`. Metadata is set per page via `pageMeta()` in `lib/seo.ts`.

---

## 0. Read this first

1. **Every page targets one primary query.** Do not write a page that tries to rank for everything.
2. **Never invent numbers.** No fake placement percentages, salary figures, student counts, review counts, partner logos, or test scores. If a fact is not confirmed, leave it out and ask.
3. **Write for the reader first, then the query.** The first 60 words must answer the search intent directly.
4. **Original evidence beats word count.** A named instructor, a real syllabus table, a screenshot of student work, or a fee table is worth more than 1,000 words of generic copy. Competitors currently outrank us partly because they publish fees and placement details we hide.
5. **One author, one date.** Every article needs a named author with a one-line bio and a visible "Updated" date.
6. **British/Indian English, consistent.** Pick “program” or “programme” and use it everywhere (the site currently mixes both).

**Current gap (measured 7 Nov 2026, approximate visible word counts):**

| Page | Current | What competitors publish |
|---|---|---|
| Homepage | ~1,500 words | 2,700–12,700 words on course pages |
| Course page | ~1,040 words | Full syllabus, fees, placement, schema |
| `/faculty` | ~400 words, 3 empty placeholders | Named instructors with bios |
| `/fees`, `/placements`, `/reviews`, `/syllabus` | Do not exist | Fees and placement pages are standard |
| Local pages | None | IPSR: Kochi, Calicut, Kottayam |

---

## 1. Cluster A — Brand queries

**Queries:** “Summate Learning”, “Summate Learning course”, “Summate Learning fees”, “Summate Learning reviews”, “Summate Learning Kochi”.

**Why:** Brand searches are the easiest to win and they feed every other cluster. Right now the site does not appear for its own name in general search results.

### Pages and exact content

**A1. Homepage (`/`) — update, do not rebuild**

Add near the top (after the hero, before the philosophy section):

- **“What is Summate Learning?” — 50–70 words, plain answer.** Must contain: what it is, who it is for, where it is based, what the founding program is, and the start date. This is the paragraph search engines and AI assistants quote.
- **“At a glance” block (6 facts):**
  - Founded / based: Kochi, Kerala (Palarivattom, Ernakulam)
  - Founding program: AI-Augmented Full-Stack Developer Course
  - Format: live online, 12 weeks
  - Batch 1: January 2027
  - Who it is for: graduates, early-career learners, career changers, working professionals
  - Fee: link to `/fees` (publish the number, or state the policy)
- **One proof block.** Only if real: a named instructor quote, a partner logo, a student quote. No placeholder chips.

Word target: 1,800–2,200.

**A2. `/about` — update**

Add these sections (currently missing):

- **“Our story”** — 150–250 words: why Summate exists, who started it, what problem it addresses. Use the founders' own words, not marketing language.
- **“What we are / what we are not”** — two short lists (5 items each). Example: “We are a live, cohort-based program. We are not a video library.”
- **“Where we are”** — full address, map link, office hours, contact.
- **Timeline** — 2025 idea → 2026 company → Jan 2027 Batch 1 (use real dates only).
- Links to `/leadership`, `/founder`, `/faculty`, `/careers`.

Word target: 1,000–1,200.

**A3. Google Business Profile (off-site, but critical)**

- Exact business name: Summate Learning LLP
- Category: Educational institution / Training centre
- Address: 43/1574, Suite No. 053, Calm Workspaces, Kochappilly Road, Palarivattom, Ernakulam, Kerala 682025
- Phone: +91 92928 38222
- Description: 750 characters, same wording as the homepage answer.
- 10 Q&As pre-written by the content team (fees, format, who it's for, location, online access).
- 5–10 real reviews before promoting the profile.

**Facts needed:** founding year, founders' story, office visiting hours, real instructor names.

---

## 2. Cluster B — Course queries (the pillar page)

**Queries:** “AI augmented full stack developer course”, “full stack developer course with AI”, “12 week full stack course India”, “full stack course online India”, “AI assisted coding course”.

**Page:** `/courses/ai-augmented-full-stack-developer` (rebuild; this is the most important page on the site).

**Word target:** 3,000–4,500.

### Required section order (use these H2s)

1. **What this course is** — 60–80 word answer. Who it is for, duration, format, start date, outcome.
2. **Who it is for — and who it is not for** — two lists. Being explicit about “not for” increases trust and reduces bad applications.
3. **What you will be able to do** — 6–10 demonstrable outcomes, written as “You can build / debug / deploy / explain…”, not “You will learn…”
4. **Week-by-week syllabus** — replace the four phase cards with a 12-row table:
   `Week | Theme | Topics | What you build/ submit | How it is assessed`
   The current phase copy can stay as an intro, but the table is the ranking asset. Content team must confirm the final syllabus before publishing; remove the “indicative” disclaimer once confirmed.
5. **The project** — what the student builds, the stack, the milestones, what gets submitted (repo link, deployed URL, README), and what “done” means.
6. **How AI is used in this course** — this is the differentiator. Include:
   - the AI-use policy (allowed / not allowed)
   - which tools are used
   - how AI-assisted work is reviewed
   - what the learner must be able to explain without AI
7. **Tools and stack** — the final list, not “indicative”.
8. **How you are assessed** — code review rubric, testing requirement, mock interviews, final demo. Name the criteria.
9. **Who teaches you** — 2–5 named people with photo, role, years of experience, LinkedIn. Link to `/faculty`.
10. **Schedule and time commitment** — hours per week, session days/times (IST), recordings policy, what happens if you miss a session.
11. **Fees and payment** — price, instalments, refund window, what is included. Summarise and link to `/fees`.
12. **Placement support** — exactly what is included: mock interviews, portfolio review, introductions, CV help. State clearly what is **not** guaranteed. Never write “100% placement” or a salary figure without signed evidence.
13. **Batch 1** — exact start date, application deadline, seat cap, and what happens after applying.
14. **Proof** — only when real: 2–3 student projects, screenshots, testimonials with full names and roles.
15. **FAQs** — 15–20 questions. Must include: fees, dates, prerequisites, time commitment, laptop requirements, attendance, certificate, placement scope, refunds, language of instruction, online access.
16. **Final CTA** — apply, plus a secondary “talk to us / book a callback”.

### Metadata

- Title: `AI-Augmented Full-Stack Developer Course`
- Meta description: outcome + duration + format + start date (140–155 characters).
- H1: `AI-Augmented Full-Stack Developer Course`
- URL stays `/courses/ai-augmented-full-stack-developer`

### Internal links (minimum)

`/apply`, `/fees`, `/faculty`, `/about`, `/faq`, `/compare/12-week-vs-6-month-bootcamp`, and one guide.

### Schema

- `Course` + `CourseInstance` (already implemented)
- Add `Offer` with price, currency INR, availability once fees are confirmed
- `FAQPage` for the FAQ block

**Facts needed (blockers):** exact start date, weekly schedule, fees/instalments/refund, instructor names and bios, project details, assessment method, placement scope, seat cap, application deadline.

---

## 3. Cluster C — Local queries

**Queries:** “full stack developer course Kochi”, “full stack course Ernakulam”, “full stack course Kerala online”, “coding course Palarivattom”.

**Strategy:** Build **one** genuine local page first. Do not clone it for other cities — doorway pages with swapped city names are a spam signal and will not rank.

**Page:** `/full-stack-developer-course-kochi`

**Word target:** 1,200–1,600, all unique.

### Required sections

1. **H1:** Full-Stack Developer Course in Kochi
2. **Local intro (80–120 words):** live online, taught from/based in Kochi, who it suits in Kochi and Ernakulam.
3. **Why study from Kochi:** reference real local context — the Kochi/Infopark tech market, local hiring companies, commute/working-professional schedules. Every claim must be sourced or removed.
4. **Cohort schedule for IST:** session times that suit working professionals in Kerala.
5. **Where we are:** address, map embed, “book a visit” CTA.
6. **Local mentors / partners:** real names only. If none are confirmed, omit this section rather than invent it.
7. **Fees and batch date:** link to `/fees` and `/apply`.
8. **Local FAQs (5–8):** “Can I attend offline?”, “Do you have classes in Ernakulam?”, “Is the course available across Kerala?”, “Do you help with Kochi job placements?”
9. **CTA:** apply + visit.

**Schema:** `Course` + `LocalBusiness`/`EducationalOrganization`, `BreadcrumbList`.

**Expansion rule:** Trivandrum, Kozhikode, Coimbatore, Bengaluru and Hyderabad pages are allowed **only** when there is real local content (mentors, partners, events, hiring evidence). Otherwise skip them.

**Facts needed:** office visiting hours, any offline events, local mentor/partner names, local hiring context sources.

---

## 4. Cluster D — Decision-stage queries

These searchers are comparing options and are closest to applying. They are the highest-value cluster.

### D1. `/fees` — new page

**Queries:** “full stack course fees in Kochi”, “full stack course fees Kerala”, “Summate Learning fees”, “coding bootcamp fees India”.

**Word target:** 800–1,200.

Content:
- Full fee, in INR, as a table
- What is included (sessions, reviews, tools, certificate)
- Instalment options and dates
- Refund/cancellation policy, in plain language
- Scholarships or concessions, only if real
- Comparison context: “what a 6-month bootcamp typically costs” (sourced, not invented)
- FAQs: “Can I pay in instalments?”, “Is there a refund?”, “Are there hidden costs?”

**Schema:** `Offer`/`Product` with price.

### D2. Comparison page — new

**URL:** `/compare/12-week-vs-6-month-bootcamp`
**Queries:** “12 week vs 6 month bootcamp”, “best full stack course in Kerala”, “is a short bootcamp enough”.

**Word target:** 1,500–2,000.

Content:
- Honest comparison table: duration, depth, cost, project scope, placement support, risk, who each suits
- “When a 12-week course is the wrong choice” — this honesty is what earns links and trust
- “What to ask any institute before paying” (10 questions) — highly shareable
- Where Summate fits, without disparaging competitors

### D3. `/placements` — new page (publish only truthful scope)

**Queries:** “full stack course with placement Kochi”, “Summate placement”.

**Word target:** 700–1,000.

Content:
- What placement support includes (mock interviews, portfolio review, intros)
- What it does not include (no job guarantee)
- Process and timeline
- Hiring partners — logos only with written permission
- Outcomes — only verified data, with the date range and method stated

### D4. `/student-work` — new page (after Batch 1 starts)

- 3–6 projects: student name (with consent), what they built, stack, live demo, repo, what they owned.
- When real, add `CreativeWork`/`SoftwareSourceCode` schema.

**Facts needed:** fees, refund policy, instalment terms, placement process, partner permissions, outcomes data.

---

## 5. Cluster E — Informational queries

**Purpose:** earn links and introduce Summate to people who are not yet shopping. These pages support the course page with internal links.

Publish **one every two weeks**, 1,500–2,000 words each, all with a named author.

| # | Working title | Primary query | Must include |
|---|---|---|---|
| E1 | How to become a full-stack developer in 2027 (without wasting two years) | “how to become a full stack developer 2027” | 6-month and 12-month roadmaps, free checklist download, link to course |
| E2 | AI-augmented development: how to use AI without losing the ability to code | “how to use AI as a developer” | Real examples, prompts, a “when not to use AI” section |
| E3 | What to learn after a CS degree if you want a job | “what to learn after computer science degree” | Skills gap table, portfolio advice, interview prep |
| E4 | A free 12-week full-stack study plan | “full stack study plan” | Downloadable plan, weekly breakdown, links to free resources |
| E5 | Full-stack interview questions freshers actually get in Kerala | “full stack interview questions freshers” | Sourced questions, model answers, mock-interview CTA |
| E6 | What is a full-stack developer? (plain-English explainer) | “what is a full stack developer” | Definition, day-in-the-life, salary caveats with sources |

Rules:
- No AI-spun filler. Each article must contain at least one original asset: a table, checklist, screenshot, or code sample.
- Each article links to the course page with a descriptive anchor (not “click here”).
- Review and update every quarter; show the updated date.

---

## 6. Page acceptance checklist (apply before publishing)

- [ ] One H1 containing the primary query, written naturally
- [ ] Title ≤ 60 characters, meta description 140–155
- [ ] First 60 words answer the query
- [ ] Target word count met, with no padding
- [ ] At least one original asset (table, screenshot, checklist, code)
- [ ] 3+ internal links with descriptive anchors
- [ ] Named author + bio + published/updated date
- [ ] All facts confirmed; no invented numbers or logos
- [ ] Images have descriptive alt text and are compressed
- [ ] FAQ section where the query is question-shaped
- [ ] `Course` / `FAQPage` / `Offer` / `BreadcrumbList` schema where relevant
- [ ] CTA above the fold and at the end
- [ ] Consistent UK/Indian spelling
- [ ] Mobile read-through (no long unbroken paragraphs)

---

## 7. Eight-week publishing calendar

| Week | Deliverable | Owner |
|---|---|---|
| 1 | Collect all facts (fees, dates, schedule, instructors, placement scope) | Founder / ops |
| 1 | Draft `/fees` + 12-week syllabus table | Content |
| 2 | Rebuild course page (3,000+ words) | Content + dev |
| 2 | Add “What is Summate Learning?” + at-a-glance to homepage | Content |
| 3 | Publish `/fees`; add fee/date FAQs to `/faq` | Content |
| 3 | Google Business Profile + 10 Q&As | Marketing |
| 4 | Publish comparison page (D2) | Content |
| 5 | Publish Kochi local page (C) | Content |
| 6 | Publish guide E1 + build-log template | Content |
| 7 | Publish `/placements` (scope only) + faculty profiles | Content |
| 8 | Publish guide E2; internal-link pass; Search Console review | Content + dev |

After week 8: one guide every two weeks; update the course page monthly; publish student work as the cohort progresses.

---

## 8. Facts the content team must collect before writing

Do not publish the course, fees, placement or local pages until these are confirmed in writing:

1. Exact Batch 1 start date and application deadline
2. Weekly hours, session days/times (IST), recordings policy
3. Fee, instalments, refund window, what is included
4. Seat cap
5. Instructor/mentor names, photos, roles, years of experience, LinkedIn
6. Final 12-week syllabus (week-level)
7. Project brief and assessment rubric
8. AI-use policy
9. Placement support scope and any verified outcomes
10. Hiring partners with written permission to use logos
11. Office visiting hours and whether offline sessions exist
12. Consent for student names, photos and work

---

## 9. How success is measured

Track in Google Search Console, filtered by page:

| Cluster | Query examples to monitor | Page |
|---|---|---|
| Brand | “summate learning”, “summate learning fees” | `/`, `/fees` |
| Course | “ai augmented full stack course”, “12 week full stack course” | Course page |
| Local | “full stack course kochi”, “full stack course kerala” | Kochi page |
| Decision | “full stack course fees kochi”, “best full stack course kerala” | `/fees`, comparison |
| Informational | “how to become full stack developer 2027” | Guides |

Watch: impressions, average position, CTR, indexed pages, rich-result eligibility. Do **not** promise positions; review monthly and rewrite pages that get impressions but no clicks (usually a title/intro problem).

---

## 10. Do not publish

- Fake placement statistics, salary figures, review counts or testimonials
- Partner logos without written permission
- City pages with duplicated copy
- AI-generated articles with no original insight or asset
- Keyword-stuffed titles or “best course in India” claims with no evidence
- Fees hidden behind “contact us” only
- “100% job guarantee”
