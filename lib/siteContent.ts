/**
 * Single source of truth for all site copy + config.
 * Reconciled with Summate Learning Website Content - Draft.
 */

export const site = {
  name: "Summate Learning",
  tagline: "Founding Program: AI-Augmented Full-Stack Developer Course Live Online September 2026",
  email: "info@summatelearning.com",
  phone: "+91 98765 43210",
  location: "Kochi, Kerala, India",
  regions: ["Kerala", "Tamil Nadu", "Karnataka", "Telangana", "Andhra Pradesh"],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X", href: "#" },
  ],
};

/* ------------------------------------------------------------------ *
 * NAVIGATION (Section 1)
 * ------------------------------------------------------------------ */
export const nav = {
  links: [
    { label: "Our Story", href: "/#our-story" },
    { label: "Programs", href: "/#program" },
    { label: "Why Summate", href: "/#why-summate" },
    { label: "FAQs", href: "/#faqs" },
  ],
  primaryCta: { label: "Apply for Batch 1", href: "/apply" },
  secondaryCta: { label: "Meet the Team", href: "/#our-story" },
};

/* ------------------------------------------------------------------ *
 * BANNERS (Section 2)
 * ------------------------------------------------------------------ */
export const banners = {
  announcement: {
    enabled: true,
    text: "Founding Program: AI-Augmented Full-Stack Developer Course Live Online September 2026",
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
    body: "Placement support is part of the program offering. The exact scope, process and terms should be published clearly once finalised.",
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
 * HERO (Section 3)
 * ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "FOUNDING BATCH LIVE ONLINE SEPTEMBER 2026",
  headline: "You are more than what you already know",
  body: [
    "You've finished a degree, picked up a few skills, watched a few tutorials and still find yourself wondering, “Am I actually ready?”",
    "Learning has this interesting way of taking off when you throw the right combination of things at it. A lesson turns into a skill, a skill turns into confidence, confidence turns into an opportunity, and a single opportunity is sometimes all it takes to veer off on an entirely different path.",
    "Summate Learning is for that next thing.",
    "We are kicking off with our founding program AI-Augmented Full-Stack Developer which is a 12-week, live online programme built around immersive, application-driven learning, and the judicious use of AI.",
  ],
  primaryCta: { label: "Apply for Batch 1", href: "/apply" },
  secondaryCta: { label: "Meet the Team", href: "/#our-story" },
  capabilities: [
    "Foundations of full-stack development",
    "One substantial project, built across 12 weeks",
    "Real engineering workflows — Git, testing, deployment",
    "AI used as a tool, without handing over the thinking",
    "Mock interviews and interview readiness",
  ],
  meta: { value: "12 weeks", label: "Live Online · September 2026" },
};

/* ------------------------------------------------------------------ *
 * PARTNERS & STATS
 * ------------------------------------------------------------------ */
export const partners = {
  label: "Building hiring partnerships for Batch 1 graduates",
  placeholder: true,
  logos: ["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five", "Partner Six"],
};

export const stats = {
  placeholder: true,
  items: [
    { value: 12, suffix: "", label: "Weeks, live online" },
    { value: 1, suffix: "", label: "Founding cohort" },
    { value: 100, suffix: "%", label: "Live sessions, not recordings" },
    { value: 1, suffix: "", label: "Substantial capstone project" },
  ],
};

/* ------------------------------------------------------------------ *
 * WHY SUMMATE? (Section 4)
 * ------------------------------------------------------------------ */
export const whyIntro = {
  eyebrow: "Why Summate",
  title: "Because learning shouldn't stop where the syllabus ends.",
  lede: "There are courses, certificates, tutorials, bootcamps, crash courses and promises of “job-ready” skills everywhere. But knowing something is not the same as knowing what to do with it. Summate is built around that gap.",
  gaps: [
    "A learner can finish a course without knowing how to solve a problem they haven't seen before.",
    "Collect certificates without knowing how to demonstrate the skill behind them.",
    "Learn ten tools without understanding which one to reach for.",
    "And sometimes, spend months preparing for a career without ever being asked to think like someone already in it.",
  ],
};

export const features = [
  {
    number: "01",
    icon: "Layers",
    title: "Beyond the Syllabus",
    subtitle: "Learning is not a checklist of things you have completed.",
    body: "Summate Learning goes beyond “here's the concept, here's the assignment, next chapter.” We focus on understanding, applying, questioning, making mistakes and figuring things out because that's how knowledge becomes a skill.",
  },
  {
    number: "02",
    icon: "Target",
    title: "Skills Need Somewhere to Go",
    subtitle: "A skill becomes valuable when you can use it.",
    body: "What you learn should have somewhere to land; maybe a project, a problem, a conversation, an interview, a workplace or the next thing you are choosing to pursue. Summate connects learning with application and you're building something with it.",
  },
  {
    number: "03",
    icon: "Cpu",
    title: "The way we work is changing. Learning has to change with it.",
    subtitle: "Technology, AI and workplaces are moving faster than traditional curricula can keep up.",
    body: "We want learners to understand the tool, but also make them efficiently think around it, work with it and adapt when the tool changes.",
  },
];

/* ------------------------------------------------------------------ *
 * WHO SUMMATE IS FOR (Section 5)
 * ------------------------------------------------------------------ */
export const whoIsFor = {
  eyebrow: "Who Summate Is For",
  title: "There's No Single Starting Point for Learning.",
  subtext: "You might be starting out, starting over or just ready for something more... And Summate Learning is for people at different points in their journey. The need to learn, adapt and grow doesn't disappear once you get a degree or a job.",
};

export const personas = [
  {
    icon: "Footprints",
    title: "Starting Out",
    subtitle: "You have the qualification, and now you need direction.",
    body: "For graduates and early-career learners figuring out what comes after the classroom. Build practical skills, discover what you're capable of, and start turning what you've studied into something you can actually use.",
    cta: { label: "Apply for Batch 1", href: "/apply" },
  },
  {
    icon: "TrendingUp",
    title: "Moving Forward",
    subtitle: "Having said that, your career has started but that doesn't mean your learning ends there.",
    body: "For working professionals who want to stay relevant, add new capabilities, move into a different role or even for the ones who refuse to be left behind as their industry changes.",
    cta: { label: "Apply for Batch 1", href: "/apply" },
  },
  {
    icon: "Signpost",
    title: "Changing Course",
    subtitle: "Sometimes the next step is going in a different path.",
    body: "For anyone considering a new career, returning to learning after a break, or exploring a field they never had the opportunity to pursue before.",
    cta: { label: "Apply for Batch 1", href: "/apply" },
  },
];

export const ecosystemVision = {
  title: "And eventually, more.",
  body: "Summate is being built to grow into a wider learning ecosystem with programmes that meet people wherever their next opportunity takes them. You might be exploring a new field, picking up a skill you've always wanted to learn, or finally doing something you've been putting off. If there's something worth knowing, there's a reason to learn it.",
};

/* ------------------------------------------------------------------ *
 * OUR STORY - FOUNDERS' NOTE (Section 6)
 * ------------------------------------------------------------------ */
export const founders = {
  eyebrow: "Our Story",
  title: "Why We Started Summate",
  quote: "A simple note from the founders to be added here.",
  placeholder: true,
  closing: "Batch 01 is where that journey begins and we're looking forward to building it with our first learners.",
  signoff: "The Founders, Summate Learning",
};

/* ------------------------------------------------------------------ *
 * FOUNDING PROGRAM (Section 7)
 * ------------------------------------------------------------------ */
export const program = {
  eyebrow: "Founding Program",
  badges: ["AI-Augmented", "Full-Stack", "Live Online"],
  title: "AI-Augmented Full-Stack Developer Course",
  subtitle: "A 12-week live online program designed to turn learning into practical, demonstrable ability.",
  description:
    "Learn the foundations of full-stack development, build a real project, practise engineering workflows and learn to use AI as a tool without handing over the thinking. The goal is not simply to finish a course. It is to leave with work you understand, skills you can explain and experience you can take into your next opportunity.",
  meta: [
    { label: "Duration", value: "12 Weeks" },
    { label: "Format", value: "Live Online" },
    { label: "Cohort", value: "September 2026" },
  ],
  comingSoon: [
    "Data & Analytics pathway",
    "Product & Design pathway",
  ],
};

/* ------------------------------------------------------------------ *
 * PROGRAM COMPARISON (Section 7 Table)
 * ------------------------------------------------------------------ */
export const comparison: {
  area: string;
  traditional: string;
  real: string;
  batch: string;
}[] = [
  {
    area: "Coding",
    traditional: "Follow-along tutorials",
    real: "Debugging, problem-solving and independent thinking",
    batch: "Practise problems before relying on AI",
  },
  {
    area: "AI Tools",
    traditional: "Prompting as a standalone topic",
    real: "Knowing when AI is useful and when it is wrong",
    batch: "AI integrated throughout the program, after foundational understanding",
  },
  {
    area: "Projects",
    traditional: "Small, disconnected exercises",
    real: "A project you can explain, defend and improve",
    batch: "One substantial project built across the 12 weeks",
  },
  {
    area: "Engineering Practice",
    traditional: "Just enough to complete an assignment",
    real: "Version control, testing, deployment and development workflow",
    batch: "Git history, testing and a working deployment pipeline",
  },
  {
    area: "Practice",
    traditional: "Finish the task and move on",
    real: "Debug, test, iterate and ship",
    batch: "Dedicated practice in debugging, testing and shipping",
  },
  {
    area: "Interview Readiness",
    traditional: "Certificate-focused completion",
    real: "Communicating your decisions and demonstrating your thinking",
    batch: "Mock interviews covering DSA, system design and AI usage",
  },
];

/* ------------------------------------------------------------------ *
 * CURRICULUM PHASES
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
 * TOOLS
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
 * HOW IT WORKS (Section 8)
 * ------------------------------------------------------------------ */
export const steps = [
  {
    step: "01",
    icon: "FileText",
    title: "Apply Online",
    body: "Tell us about yourself, your background, and apply.",
  },
  {
    step: "02",
    icon: "Video",
    title: "Learn Where You Are",
    body: "Join live online sessions without the commute. Keep learning alongside your existing routine.",
  },
  {
    step: "03",
    icon: "Repeat2",
    title: "Learn and Apply",
    body: "Concepts are followed by practice, application and problem-solving so that learning does not stay theoretical.",
  },
  {
    step: "04",
    icon: "Hammer",
    title: "Build Your Capability",
    body: "Work towards a substantial project, strengthen your resume, practise interviews and develop the confidence to talk about your skills.",
  },
  {
    step: "05",
    icon: "ArrowUpRight",
    title: "Take the Next Step",
    body: "Leave with practical work, stronger skills and clearer direction for what comes next.",
  },
];

/* ------------------------------------------------------------------ *
 * COMMUNITY STRIP
 * ------------------------------------------------------------------ */
export const community = {
  eyebrow: "A Hands-On Learning Community",
  title: "You are not doing this alone.",
  items: [
    { icon: "Radio", title: "Live cohort sessions", body: "Learn in the room with your batch, in real time." },
    { icon: "MessagesSquare", title: "Mentor-led reviews", body: "Regular reviews of your project and your thinking." },
    { icon: "FolderGit2", title: "Project studio", body: "Dedicated time to build, debug and ship your project." },
    { icon: "Users", title: "A close first batch", body: "A small group beginning the same journey together." },
  ],
};

/* ------------------------------------------------------------------ *
 * MENTORS
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
 * TESTIMONIALS
 * ------------------------------------------------------------------ */
export const testimonials = {
  placeholder: true,
  emptyState: {
    title: "Batch 1 hasn't started yet.",
    body: "There are no learner stories to show — because the first ones are still being written. Apply, and be one of the first voices of Summate Learning.",
  },
  items: [
    { quote: "Real learner stories will appear here after Batch 1.", name: "Batch 1 learner", detail: "AI-Augmented Full-Stack Developer" },
  ],
};

/* ------------------------------------------------------------------ *
 * WHY JOIN BATCH 1? (Section 9)
 * ------------------------------------------------------------------ */
export const batchBenefits = {
  eyebrow: "Founding Cohort",
  title: "BE A PART OF THE BEGINNING.",
  subtitle: "Batch 1 is the first chapter of Summate Learning and that comes with a few meaningful advantages.",
  items: [
    "Early access to a new learning community being built from the ground up.",
    "Direct opportunities to share feedback and help shape the learner experience.",
    "A close-knit first batch with space to learn alongside people who are beginning the same journey.",
    "Founding-batch recognition as part of Summate Learning's first cohort.",
    "Access to the program's live learning, project work, interview preparation and placement support.",
  ],
  note: "Any additional founding-batch benefits, pricing advantages, alumni/community benefits or seat limits can be added here.",
};

/* ------------------------------------------------------------------ *
 * INSIGHTS
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
 * FAQS (Section 10)
 * ------------------------------------------------------------------ */
export const faqs = [
  {
    q: "Is Summate just a coding institute?",
    a: "No. Summate Learning is being built as a broader educational institution. We are starting with one live program: the AI-Augmented Full-Stack Developer Course, with more learning pathways planned as the institution grows.",
  },
  {
    q: "Is the course fully online?",
    a: "Yes. Batch 1 is fully live online, making the program accessible to learners across Kerala, Tamil Nadu, Karnataka, Telangana and Andhra Pradesh.",
  },
  {
    q: "Do I need prior coding experience?",
    a: "Basic familiarity with coding from your degree or previous learning is helpful. The program covers the foundations before moving into full-stack development and advanced practice.",
  },
  {
    q: "Can working professionals join?",
    a: "Yes. The live online format is designed to make the program accessible to working professionals as well as fresh graduates.",
  },
  {
    q: "Who teaches the classes?",
    a: "Classes are led by the Summate Learning teaching and mentoring team. Mentor profiles, credentials and areas of expertise will be published once finalised.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Learners who successfully complete the program will receive a Summate Learning certificate. The final certification wording and issuing details should be confirmed before publication.",
  },
  {
    q: "Will there be placement support?",
    a: "Placement support is part of the program offering. The exact scope, process and terms should be published clearly once finalised.",
  },
];

/* ------------------------------------------------------------------ *
 * FINAL CTA (Section 11)
 * ------------------------------------------------------------------ */
export const finalCta = {
  title: "Your Next Chapter Can Start Here.",
  body: "If you're ready to turn what you've learned into something you can use, build and take forward, Batch 1 is where Summate Learning begins.",
  cta: { label: "Apply for Batch 1", href: "/apply" },
};

/* ------------------------------------------------------------------ *
 * FOOTER
 * ------------------------------------------------------------------ */
export const footer = {
  brand: "Summate Learning",
  foundingNote: "Founding Program: AI-Augmented Full-Stack Developer Course · Live Online September 2026",
  copyright: "© 2026 Summate Learning. All rights reserved.",
  columns: [
    {
      title: "Program",
      links: [
        { label: "AI-Augmented Full-Stack Developer", href: "/#program" },
        { label: "Why Summate", href: "/#why-summate" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Apply for Batch 1", href: "/apply" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/#our-story" },
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