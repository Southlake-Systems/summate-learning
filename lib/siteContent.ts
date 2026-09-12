/**
 * Single source of truth for all site copy + config.
 *
 * Anything still to be confirmed by the Summate team is marked `TODO:` and, where a
 * section can show it, carries `placeholder: true` so the UI renders a small
 * "Placeholder — to be finalised" chip.
 */

export const site = {
  name: "Summate Learning",
  tagline: "Founding Program: AI-Augmented Full-Stack Developer Course · Live Online · September 2026",
  email: "hello@summatelearning.com", // TODO: real address
  phone: "+91 00000 00000", // TODO: real number
  regions: ["Kerala", "Tamil Nadu", "Karnataka", "Telangana", "Andhra Pradesh"],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X", href: "#" },
  ], // TODO: real profile URLs
};

export const nav = {
  links: [
    { label: "Program", href: "/#program" },
    { label: "Curriculum", href: "/#curriculum" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Placements", href: "/#placements" },
    { label: "Our Story", href: "/#our-story" },
    { label: "FAQs", href: "/#faqs" },
  ],
  primaryCta: { label: "Apply for Batch 1", href: "/apply" },
  secondaryCta: { label: "Book a callback", href: "/#enquiry" },
};

/* ------------------------------------------------------------------ *
 * BANNERS — toggle each with `enabled`
 * ------------------------------------------------------------------ */
export const banners = {
  announcement: {
    enabled: true,
    text: "Applications for Batch 1 are open — live online, starts September 2026.",
    cta: "Apply now",
    href: "/apply",
  },
  promo: {
    enabled: true,
    kicker: "Founding Batch",
    title: "Batch 1 is kept small on purpose.",
    body: "A close-knit first cohort means more attention, more feedback, and a stronger group to learn alongside. Seats are limited.",
    cta: "Apply for Batch 1",
    href: "/apply",
  },
  placement: {
    enabled: true,
    kicker: "Placements",
    title: "Placement support is part of the program.",
    body: "Mock interviews, resume and portfolio work, and introductions to hiring teams. TODO: exact scope, process and terms to be published once finalised.",
    cta: "Talk to us about hiring",
    href: "/#enquiry",
    placeholder: true,
  },
  mentorRecruit: {
    enabled: true,
    kicker: "Teach with Summate",
    title: "Mentor the first cohort of Summate learners.",
    body: "We are building a teaching and mentoring team of working professionals. If you would like to review projects, run sessions or mock interviews, we would like to hear from you.",
    cta: "Express interest",
    href: "/#enquiry",
  },
};

/* ------------------------------------------------------------------ *
 * HERO
 * ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Founding Batch · Live Online · September 2026",
  headline: "You are more than what you already know",
  body: [
    "You have finished a degree, picked up a few skills, watched a few tutorials — and still find yourself wondering, “Am I actually ready?”",
    "A lesson turns into a skill, a skill turns into confidence, confidence turns into an opportunity, and a single opportunity is sometimes all it takes to veer off on an entirely different path.",
  ],
  emphasis: "Summate Learning is for that next thing.",
  capabilities: [
    "Foundations of full-stack development",
    "One substantial project, built across 12 weeks",
    "Real engineering workflows — Git, testing, deployment",
    "AI used as a tool, without handing over the thinking",
    "Mock interviews and interview readiness",
  ],
  meta: { value: "12 weeks", label: "Live online · Sept 2026" },
};

/* ------------------------------------------------------------------ *
 * PARTNER / HIRING STRIP
 * ------------------------------------------------------------------ */
export const partners = {
  // TODO: replace with real hiring partners once agreements are in place.
  label: "Building hiring partnerships for Batch 1 graduates",
  placeholder: true,
  logos: ["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five", "Partner Six"],
};

/* ------------------------------------------------------------------ *
 * STATS
 * ------------------------------------------------------------------ */
export const stats = {
  // TODO: confirm final figures before launch.
  placeholder: true,
  items: [
    { value: 12, suffix: "", label: "Weeks, live online" },
    { value: 1, suffix: "", label: "Founding cohort" },
    { value: 100, suffix: "%", label: "Live sessions, not recordings" },
    { value: 1, suffix: "", label: "Project you can defend" },
  ],
};

/* ------------------------------------------------------------------ *
 * PERSONA CARDS — "What brings you to Summate?"
 * ------------------------------------------------------------------ */
export const personas = [
  {
    icon: "Footprints",
    title: "Starting out",
    body: "You have the qualification, and now you need direction. Turn what you have studied into something you can actually use.",
    cta: { label: "See the program", href: "/#program" },
  },
  {
    icon: "TrendingUp",
    title: "Moving forward",
    body: "Your career has started, but your learning has not stopped. Add capabilities, move into a new role, keep pace as your field changes.",
    cta: { label: "See the program", href: "/#program" },
  },
  {
    icon: "Signpost",
    title: "Changing course",
    body: "Considering a new career, returning after a break, or exploring a field you never had the chance to pursue before.",
    cta: { label: "See the program", href: "/#program" },
  },
  {
    icon: "Building2",
    title: "Hiring talent",
    body: "Looking for developers who can explain their decisions and think through unfamiliar problems. Talk to us about Batch 1.",
    cta: { label: "Talk to us", href: "/#enquiry" },
  },
];

/* ------------------------------------------------------------------ *
 * WHY SUMMATE — differentiators
 * ------------------------------------------------------------------ */
export const whyIntro = {
  eyebrow: "Why Summate",
  title: "Because learning shouldn’t stop where the syllabus ends.",
  lede: "There are courses, certificates and bootcamps everywhere. But knowing something is not the same as knowing what to do with it. Summate is built around that gap.",
};

export const features = [
  {
    icon: "Layers",
    title: "Beyond the syllabus",
    body: "Understanding, applying, questioning, making mistakes and figuring things out — because that is how knowledge becomes a skill.",
  },
  {
    icon: "Target",
    title: "Skills need somewhere to go",
    body: "What you learn should land somewhere — a project, a problem, an interview, a workplace. We connect learning with application.",
  },
  {
    icon: "Cpu",
    title: "Built for how work is changing",
    body: "Understand the tool, and also think around it, work with it, and adapt when it changes.",
  },
  {
    icon: "Radio",
    title: "Live, not recorded",
    body: "Every session is live and online. You can ask questions in the room and keep learning alongside your existing routine.",
  },
  {
    icon: "Users",
    title: "Taught by working professionals",
    body: "Sessions and reviews are led by people who do this work, not just teach it. TODO: mentor profiles to be published once finalised.",
    placeholder: true,
  },
  {
    icon: "ClipboardCheck",
    title: "Projects reviewed like real work",
    body: "Your project is read, questioned and improved — the way code review works on a team.",
  },
];

/* ------------------------------------------------------------------ *
 * PROGRAM SPOTLIGHT
 * ------------------------------------------------------------------ */
export const program = {
  eyebrow: "Founding Program",
  badges: ["AI-Augmented", "Full-Stack", "Live Online"],
  title: "AI-Augmented Full-Stack Developer Course",
  subtitle: "A 12-week live online program designed to turn learning into practical, demonstrable ability.",
  description:
    "Learn the foundations of full-stack development, build a real project, practise engineering workflows and learn to use AI as a tool — without handing over the thinking. Leave with work you understand, skills you can explain and experience you can take into your next opportunity.",
  meta: [
    { label: "Length", value: "12 weeks" },
    { label: "Format", value: "Live online" },
    { label: "Batch 1 start", value: "Sep 2026" },
  ],
  comingSoon: [
    "Data & Analytics pathway", // TODO
    "Product & Design pathway", // TODO
  ],
};

/* ------------------------------------------------------------------ *
 * CURRICULUM  (TODO: full week-by-week to be finalised)
 * ------------------------------------------------------------------ */
export const curriculum = {
  placeholder: true,
  phases: [
    {
      name: "Phase 1 · Foundations",
      weeks: "Weeks 1–3",
      summary: "Problem-solving and the building blocks, practised before relying on AI.",
      points: [
        "Programming fundamentals and debugging",
        "Working with the web: HTTP, the browser, the request lifecycle",
        "Practice problems and independent thinking",
      ],
    },
    {
      name: "Phase 2 · Full-stack build",
      weeks: "Weeks 4–7",
      summary: "Start the one substantial project you will carry through the program.",
      points: [
        "Front-end: components, state, forms",
        "Back-end: APIs, data modelling, a database",
        "Auth, validation and error handling",
      ],
    },
    {
      name: "Phase 3 · Engineering practice",
      weeks: "Weeks 8–10",
      summary: "The workflow around the code — version control, testing, deployment.",
      points: [
        "Git history you can explain",
        "Testing: unit and integration",
        "A working deployment pipeline",
      ],
    },
    {
      name: "Phase 4 · AI & interview readiness",
      weeks: "Weeks 11–12",
      summary: "Use AI well, and be ready to talk about your work.",
      points: [
        "Knowing when AI is useful — and when it is wrong",
        "Mock interviews: DSA, system design and AI usage",
        "Portfolio, resume and communicating your decisions",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ *
 * COMPARISON
 * ------------------------------------------------------------------ */
export const comparison: { area: string; real: string; batch: string }[] = [
  { area: "Coding", real: "Debugging, problem-solving and independent thinking", batch: "Practise problems before relying on AI" },
  { area: "AI tools", real: "Knowing when AI is useful — and when it is wrong", batch: "AI integrated throughout, after foundational understanding" },
  { area: "Projects", real: "A project you can explain, defend and improve", batch: "One substantial project built across the 12 weeks" },
  { area: "Engineering practice", real: "Version control, testing, deployment and workflow", batch: "Git history, testing and a working deployment pipeline" },
  { area: "Practice", real: "Debug, test, iterate and ship", batch: "Dedicated practice in debugging, testing and shipping" },
  { area: "Interview readiness", real: "Communicating your decisions and your thinking", batch: "Mock interviews covering DSA, system design and AI usage" },
];

/* ------------------------------------------------------------------ *
 * TOOLS  (TODO: confirm exact stack)
 * ------------------------------------------------------------------ */
export const tools = {
  placeholder: true,
  note: "Indicative stack — the final toolset is confirmed before each batch.",
  items: [
    { icon: "Braces", label: "JavaScript" },
    { icon: "Atom", label: "React" },
    { icon: "Server", label: "Node.js" },
    { icon: "Database", label: "PostgreSQL" },
    { icon: "GitBranch", label: "Git & GitHub" },
    { icon: "Network", label: "REST APIs" },
    { icon: "FlaskConical", label: "Testing" },
    { icon: "Rocket", label: "CI/CD & deploy" },
    { icon: "Sparkles", label: "AI assistants" },
  ],
};

/* ------------------------------------------------------------------ *
 * HOW IT WORKS
 * ------------------------------------------------------------------ */
export const steps = [
  { icon: "FileText", title: "Apply online", body: "Tell us about yourself, your background, and apply." },
  { icon: "Video", title: "Learn where you are", body: "Join live online sessions without the commute. Keep learning alongside your existing routine." },
  { icon: "Repeat2", title: "Learn and apply", body: "Concepts are followed by practice, application and problem-solving, so learning does not stay theoretical." },
  { icon: "Hammer", title: "Build your capability", body: "Work towards a substantial project, strengthen your resume, practise interviews and build the confidence to talk about your skills." },
  { icon: "ArrowUpRight", title: "Take the next step", body: "Leave with practical work, stronger skills and clearer direction for what comes next." },
];

/* ------------------------------------------------------------------ *
 * COMMUNITY
 * ------------------------------------------------------------------ */
export const community = {
  eyebrow: "A hands-on learning community",
  title: "You are not doing this alone.",
  items: [
    { icon: "Radio", title: "Live cohort sessions", body: "Learn in the room with your batch, in real time." },
    { icon: "MessagesSquare", title: "Mentor-led reviews", body: "Regular reviews of your project and your thinking." },
    { icon: "FolderGit2", title: "Project studio", body: "Dedicated time to build, debug and ship your project." },
    { icon: "Users", title: "A close first batch", body: "A small group beginning the same journey together." },
  ],
};

/* ------------------------------------------------------------------ *
 * MENTORS  (TODO: real profiles once finalised)
 * ------------------------------------------------------------------ */
export const mentors = {
  placeholder: true,
  note: "Mentor profiles, credentials and areas of expertise will be published once finalised.",
  people: [
    { name: "To be announced", role: "Full-stack engineering", initials: "SL" },
    { name: "To be announced", role: "Engineering practice & testing", initials: "SL" },
    { name: "To be announced", role: "AI-assisted development", initials: "SL" },
    { name: "To be announced", role: "Interview preparation", initials: "SL" },
  ],
};

/* ------------------------------------------------------------------ *
 * TESTIMONIALS  (none yet — Batch 1 has not started)
 * ------------------------------------------------------------------ */
export const testimonials = {
  placeholder: true,
  emptyState: {
    title: "Batch 1 hasn’t started yet.",
    body: "There are no learner stories to show — because the first ones are still being written. Apply, and be one of the first voices of Summate Learning.",
  },
  // Example cards, clearly marked, so the section has shape before real quotes exist.
  items: [
    { quote: "Example testimonial — real learner stories will appear here after Batch 1.", name: "Batch 1 learner", detail: "AI-Augmented Full-Stack Developer" },
    { quote: "Example testimonial — real learner stories will appear here after Batch 1.", name: "Batch 1 learner", detail: "AI-Augmented Full-Stack Developer" },
  ],
};

/* ------------------------------------------------------------------ *
 * FOUNDERS
 * ------------------------------------------------------------------ */
export const founders = {
  eyebrow: "Our story",
  title: "Why we started Summate",
  quote: "A simple note from the founders to be added here.", // TODO
  placeholder: true,
  closing: "Batch 01 is where that journey begins, and we’re looking forward to building it with our first learners.",
  signoff: "— The Founders, Summate Learning",
};

/* ------------------------------------------------------------------ *
 * INSIGHTS / BLOG  (TODO: real posts)
 * ------------------------------------------------------------------ */
export const insights = {
  placeholder: true,
  items: [
    { title: "Using AI without handing over the thinking", tag: "Applied AI", date: "Coming soon" },
    { title: "What “job-ready” actually means", tag: "Careers", date: "Coming soon" },
    { title: "Reading code review like a teammate", tag: "Engineering", date: "Coming soon" },
  ],
};

/* ------------------------------------------------------------------ *
 * FAQ
 * ------------------------------------------------------------------ */
export const faqs = [
  { q: "Is Summate just a coding institute?", a: "No. Summate Learning is being built as a broader educational institution. We are starting with one live program: the AI-Augmented Full-Stack Developer Course, with more learning pathways planned as the institution grows." },
  { q: "Is the course fully online?", a: "Yes. Batch 1 is fully live online, making the program accessible to learners across Kerala, Tamil Nadu, Karnataka, Telangana and Andhra Pradesh." },
  { q: "Do I need prior coding experience?", a: "Basic familiarity with coding from your degree or previous learning is helpful. The program covers the foundations before moving into full-stack development and advanced practice." },
  { q: "Can working professionals join?", a: "Yes. The live online format is designed to make the program accessible to working professionals as well as fresh graduates." },
  { q: "Who teaches the classes?", a: "Classes are led by the Summate Learning teaching and mentoring team. Mentor profiles, credentials and areas of expertise will be published once finalised." },
  { q: "Will I receive a certificate?", a: "Yes. Learners who successfully complete the program will receive a Summate Learning certificate. The final certification wording and issuing details should be confirmed before publication." },
  { q: "Will there be placement support?", a: "Placement support is part of the program offering. The exact scope, process and terms should be published clearly once finalised." },
  { q: "How much does Batch 1 cost?", a: "TODO: pricing and any founding-batch advantages to be published once finalised." },
];

/* ------------------------------------------------------------------ *
 * BATCH 1 BENEFITS
 * ------------------------------------------------------------------ */
export const batchBenefits = {
  eyebrow: "Be a part of the beginning",
  title: "Why join Batch 1?",
  lede: "Batch 1 is the first chapter of Summate Learning — and that comes with a few meaningful advantages.",
  items: [
    "Early access to a new learning community being built from the ground up.",
    "Direct opportunities to share feedback and help shape the learner experience.",
    "A close-knit first batch with space to learn alongside people beginning the same journey.",
    "Founding-batch recognition as part of Summate Learning’s first cohort.",
    "Access to the program’s live learning, project work, interview preparation and placement support.",
  ],
};

/* ------------------------------------------------------------------ *
 * FINAL CTA
 * ------------------------------------------------------------------ */
export const finalCta = {
  title: "Your next chapter can start here.",
  body: "If you’re ready to turn what you’ve learned into something you can use, build and take forward, Batch 1 is where Summate Learning begins.",
  cta: { label: "Apply for Batch 1", href: "/apply" },
};

/* ------------------------------------------------------------------ *
 * FOOTER
 * ------------------------------------------------------------------ */
export const footer = {
  columns: [
    {
      title: "Program",
      links: [
        { label: "AI-Augmented Full-Stack Developer", href: "/#program" },
        { label: "Curriculum", href: "/#curriculum" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Apply for Batch 1", href: "/apply" },
      ],
    },
    {
      title: "Pathways",
      links: [
        { label: "Data & Analytics (coming soon)", href: "/#program" },
        { label: "Product & Design (coming soon)", href: "/#program" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/#our-story" },
        { label: "Why Summate", href: "/#why" },
        { label: "Mentors", href: "/#mentors" },
        { label: "Placements", href: "/#placements" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "/#faqs" },
        { label: "Contact", href: "/#enquiry" },
        { label: "Book a callback", href: "/#enquiry" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
};
