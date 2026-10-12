/**
 * Copy for the inner pages (About, Courses, People, Circle, Contact, Legal).
 * Sourced from "Website structure" doc. Home-page copy lives in siteContent.ts.
 *
 * Bracketed placeholders from the doc are kept as `null`/empty values so the
 * UI can show a "to be announced" state instead of raw "[Name]" text.
 */

/* ------------------------------------------------------------------ *
 * COURSES
 * ------------------------------------------------------------------ */
export type Course = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  duration: string;
  format: string;
  status: "open" | "soon";
  skills: string[];
  accent: string;
};

export const courses: Course[] = [
  {
    slug: "ai-augmented-full-stack-developer",
    title: "AI-Augmented Full-Stack Developer",
    category: "Technology",
    tagline:
      "Build real applications end to end, and learn to use AI as a tool without handing over the thinking.",
    duration: "12 weeks",
    format: "Live online",
    status: "open",
    skills: ["Next.js", "TypeScript", "Python", "APIs", "Testing", "AI workflows"],
    accent: "#1E3ABA",
  },
  {
    slug: "modern-data-engineering",
    title: "Modern Data Engineering",
    category: "Data",
    tagline:
      "Build practical data systems and the engineering habits production environments expect.",
    duration: "12 weeks",
    format: "Live online",
    status: "soon",
    skills: ["Python", "SQL", "Data pipelines", "Cloud", "Analytics"],
    accent: "#7C3AED",
  },
  {
    slug: "performance-digital-marketing",
    title: "Performance & Digital Marketing",
    category: "Growth",
    tagline:
      "Learn how modern marketing teams use experimentation, analytics and technology to grow.",
    duration: "10 weeks",
    format: "Live online",
    status: "soon",
    skills: ["Analytics", "CRO", "Campaigns", "Attribution"],
    accent: "#FF2D75",
  },
  {
    slug: "ai-embedded-systems",
    title: "AI & Embedded Systems",
    category: "AI + Hardware",
    tagline:
      "Work where intelligent software meets hardware, sensors and real-world systems.",
    duration: "12 weeks",
    format: "Live online",
    status: "soon",
    skills: ["Computer vision", "Edge AI", "Embedded", "Sensors"],
    accent: "#FF8A00",
  },
];

/* ------------------------------------------------------------------ *
 * FOUNDER & CEO
 * ------------------------------------------------------------------ */
export const founder = {
  name: "Rameshan",
  role: "Founder & CEO, Summate",
  tagline: "Transforming education through practical, future-focused learning.",
  intro: [
    "Rameshan is the Founder and CEO of Summate, with extensive experience in the field of education.",
    "His interest in education comes from a belief that learning should be useful beyond the classroom. Students need opportunities to understand what they learn, apply it in practice and develop the confidence to take the next step in their academic or professional journey.",
    "With Summate, Rameshan aims to create a learning platform that brings together courses, practical learning, mentorship and a strong student community.",
    "His focus is on building an environment where students can explore their interests, develop relevant skills and gain exposure to opportunities beyond traditional education.",
  ],
  background: [
    { label: "Area of expertise", value: "Education & Learning" },
    { label: "Experience", value: "40+ years in academics and 20+ years in the IT industry" },
    // Doc leaves these blank — fill in to show them on the page.
    { label: "Previous organisations and roles", value: "" },
    { label: "Key achievements", value: "" },
    { label: "Areas of specialisation", value: "" },
  ],
  vision:
    "Education should empower individuals not only to learn, but to apply, create and grow.",
  building: {
    intro:
      "Rameshan founded Summate with the belief that education should evolve alongside the changing world. The vision is to build an ecosystem where learners can:",
    points: [
      "Learn from experienced educators and professionals",
      "Develop practical and future-oriented skills",
      "Work on meaningful projects",
      "Connect with peers and mentors",
      "Discover opportunities",
      "Build confidence and independence",
      "Continue learning throughout their journey",
    ],
    motto: ["Learn.", "Build.", "Connect.", "Grow."],
  },
};

/* ------------------------------------------------------------------ *
 * LEADERSHIP
 * ------------------------------------------------------------------ */
export type Person = {
  name: string | null;
  role: string | null;
  org?: string | null;
  bio: string | null;
  expertise: string | null;
  href?: string;
};

export const leadership = {
  title: "Building the future of learning",
  lede: "Summate is driven by a team that believes education should be practical, engaging and connected to the opportunities of the future.",
  body: "Our leadership brings together experience across education, technology, operations, business and community building to create a learning ecosystem that puts learners at the centre.",
  people: [
    {
      name: "Rameshan",
      role: "Founder & CEO",
      bio: "Rameshan leads the vision and strategic direction of Summate, drawing on his experience in the education sector to build a learner-focused education platform.",
      expertise: "Education & Learning",
      href: "/founder",
    },
    { name: null, role: null, bio: null, expertise: null },
    { name: null, role: null, bio: null, expertise: null },
  ] as Person[],
  advisory: {
    title: "Our advisory network",
    body: [
      "Summate aims to build a strong network of educators, industry professionals, researchers and domain experts who can contribute their knowledge and experience to our programs and initiatives.",
      "Their perspectives will help us continuously improve our courses, learning experiences and opportunities for our community.",
    ],
  },
  closing:
    "Great learning experiences are built by people who understand both where learners are today and where they need to go tomorrow.",
};

/* ------------------------------------------------------------------ *
 * FACULTY & MENTORS
 * ------------------------------------------------------------------ */
export const faculty = {
  title: "Meet the people who teach and guide our learners",
  lede: "Good learning also depends on having the right people to learn from.",
  body: [
    "At Summate, our faculty and mentors come from academic and professional backgrounds. They bring their own experience and perspective into the classroom, helping students understand both the concepts and how they are used in practice.",
    "Our faculty members are selected based on their subject knowledge, experience and ability to engage with learners.",
  ],
  expect: [
    { title: "Strong subject knowledge", body: "Learn from people who understand the subjects they teach." },
    { title: "Practical experience", body: "Get a better understanding of how what you learn is used outside the classroom." },
    { title: "Guidance and feedback", body: "Ask questions, discuss ideas and receive feedback as you work through the program." },
    { title: "Real-world perspective", body: "Learn about current practices, tools and developments in your area of interest." },
  ],
  people: [
    { name: null, role: "Faculty", org: null, bio: null, expertise: null },
    { name: null, role: "Faculty", org: null, bio: null, expertise: null },
    { name: null, role: "Mentor", org: null, bio: null, expertise: null },
  ] as Person[],
  join: {
    title: "Interested in teaching with us?",
    body: "We are always open to connecting with educators, researchers and professionals who enjoy working with students and sharing what they know.",
    cta: { label: "Become a faculty member or mentor", href: "/contact?topic=teach" },
  },
};

/* ------------------------------------------------------------------ *
 * CAREERS
 * ------------------------------------------------------------------ */
export const careers = {
  title: "Come build Summate with us",
  lede: "Summate is a growing education company, and we are looking for people who want to be part of the journey.",
  body: [
    "Whether you are an educator, a content creator, a technology professional or someone who enjoys working with students, there may be a place for you at Summate.",
    "You will get the opportunity to work on real projects, take responsibility and be part of a team that is building something from the ground up.",
  ],
  areas: [
    { title: "Faculty & Mentors", body: "Teach courses, guide students and bring your experience into the learning environment." },
    { title: "Student Counsellors", body: "Help students and parents understand our programs and find the right learning options." },
    { title: "Content & Media", body: "Create educational content, videos and other materials for our courses and social platforms." },
    { title: "Marketing & Growth", body: "Help us reach students, schools, colleges and other communities." },
    { title: "Technology & Product", body: "Work on the platforms and tools that support our learners and team." },
    { title: "Operations", body: "Help manage the systems and processes behind our courses and programs." },
    { title: "Campus Ambassadors", body: "Represent Summate on your campus and help connect other students with our programs." },
  ],
  values: [
    "Willing to learn",
    "Responsible and dependable",
    "Good at working with others",
    "Comfortable taking initiative",
    "Interested in education and technology",
    "Good communicators",
    "Open to new ideas",
  ],
  valuesNote:
    "You don't need to have a perfect background or tick every box. If you think you can contribute to what we are building, we'd like to hear from you.",
  // Add roles here as { title, area, type, location } to list them on the page.
  openings: [] as { title: string; area: string; type: string; location: string }[],
  profile: {
    title: "Don't see a suitable opening?",
    body: "Send us your profile and tell us a little about yourself and what you would like to do at Summate.",
    cta: { label: "Send your profile", href: "/contact?topic=careers" },
  },
};

/* ------------------------------------------------------------------ *
 * SUMMATE CIRCLE
 * ------------------------------------------------------------------ */
export const circle = {
  kicker: "Beyond the classroom",
  title: "A community that grows with you.",
  intro: [
    "At Summate, we believe learning shouldn't end when a course ends.",
    "The Summate Circle is a community of students, graduates, mentors and professionals who come together to learn, share ideas, build things and help each other move forward.",
    "It's a place to meet people with similar interests, find collaborators, learn from others and discover opportunities, both during and beyond your time at Summate.",
  ],
  statement:
    "We're not building a course with an alumni list attached. We're building a network, and the course is how you get in.",
  pillars: [
    { key: "connect", title: "Connect", lead: "Meet people who share your interests, goals and curiosity.", body: "From technology and business to design, research and creative fields, the Circle gives you opportunities to discover people you may not have met otherwise." },
    { key: "learn", title: "Learn", lead: "Learning continues outside the classroom.", body: "Take part in talks, peer-learning sessions, workshops and discussions led by members, mentors and professionals." },
    { key: "social", title: "Social", lead: "Not everything has to be about work.", body: "Meetups, games, outings, informal gatherings and community activities give members a chance to get to know each other and build genuine connections." },
    { key: "collaborate", title: "Collaborate", lead: "Have an idea? Find people to work on it with.", body: "Members can come together around projects, challenges, open-source work and shared interests." },
    { key: "opportunities", title: "Opportunities", lead: "Opportunities often come through people.", body: "The Circle creates a space where members can discover jobs, internships, projects, competitions and other opportunities shared within the community." },
    { key: "mentorship", title: "Mentorship", lead: "Learn from people who have already been where you want to go.", body: "Connect with experienced members and professionals for advice, guidance, doubt-clearing and career conversations." },
    { key: "giveback", title: "Give back", lead: "As you grow, you can help someone else grow too.", body: "Share your knowledge, mentor another member, contribute to a project or simply make an introduction that could help someone." },
    { key: "grow", title: "Grow", lead: "The Circle is designed to grow with its members.", body: "As you move from learner to graduate, professional, mentor or community leader, your role within the network can grow with you." },
  ],
  groups: [
    { name: "Technology", color: "#1E3ABA", tags: ["AI", "Robotics", "Software", "Electronics"] },
    { name: "Business", color: "#7C3AED", tags: ["Entrepreneurship", "Marketing", "Finance"] },
    { name: "Creative", color: "#FF2D75", tags: ["Design", "Photography", "Content", "Media"] },
    { name: "Career", color: "#FF8A00", tags: ["Jobs", "Higher studies", "Research"] },
  ],
  groupsNote:
    "Members can join smaller interest groups and connect with people working towards similar goals. The current plan envisions groups of around 6–10 people for more meaningful interaction.",
  rhythm: [
    { cadence: "Every Monday", title: "Monday Connect", body: "A simple question to start the week: “What are you currently working on?”" },
    { cadence: "Every week", title: "Member Spotlight", body: "Get to know someone from the community: what they're working on, learning, offering and looking for." },
    { cadence: "Every Friday", title: "Friday Social", body: "Casual conversations, games and community activities." },
    { cadence: "Every month", title: "Summate Meetup", body: "A monthly opportunity to meet the community in person." },
    { cadence: "Through the year", title: "Summate Day", body: "A larger community gathering held periodically throughout the year." },
  ],
  profilePrompts: [
    { label: "What I'm learning", example: "Backend APIs and system design" },
    { label: "What I'm building", example: "A study-group scheduler for my college" },
    { label: "What I can help with", example: "Figma, UI reviews, Malayalam translation" },
    { label: "What I'm looking for", example: "A backend collaborator for a weekend project" },
  ],
  profileNote:
    "This could be a collaborator, mentor, project partner, job opportunity, co-founder or simply someone with a shared interest. The long-term plan includes a member discovery system that helps people find others based on their interests and goals.",
  challenges: [
    { name: "7-Day Challenge", length: "7 days", body: "Meet one new person every day." },
    { name: "30-Day Learning Challenge", length: "30 days", body: "Learn a new skill and share your progress." },
    { name: "Build Challenge", length: "30 days", body: "Build something in 30 days." },
    { name: "Social Challenge", length: "One event", body: "Attend a community event and introduce yourself to three people." },
    { name: "Contribution Challenge", length: "One month", body: "Help another member at least once during the month." },
  ],
  mentorship: [
    { name: "Peer Connect", pair: ["Student", "Student"], body: "Learn from someone who is going through a similar journey." },
    { name: "Mentor Connect", pair: ["Student", "Experienced professional"], body: "Get guidance from someone with experience in your area of interest." },
    { name: "Expert Connect", pair: ["Member", "Industry expert"], body: "Connect with professionals and experts for deeper guidance and perspective." },
  ],
  path: ["Learn", "Connect", "Contribute", "Lead", "Give back"],
  pathBody:
    "You don't have to remain a learner forever. You can start as a student, become a contributor, help another member, take on a community role and eventually become a mentor yourself.",
  pathClose: "That's how the Circle grows, and how the people within it grow with it.",
  join: {
    title: "Become part of the Summate Circle",
    body: "Whether you're looking for people to learn with, a team for your next project, a mentor to guide you, or simply a community where you feel you belong, there's a place for you here.",
    cta: { label: "Join the Summate Circle", href: "/contact?topic=circle" },
    signoff: "Learn together. Build together. Grow together.",
  },
};

/* ------------------------------------------------------------------ *
 * FAQ (grouped). Home-page FAQs in siteContent are reused in "The course".
 * ------------------------------------------------------------------ */
export const faqGroups = [
  {
    title: "About Summate",
    items: [
      {
        q: "Is Summate just a coding institute?",
        a: "No. Summate Learning is being built as a broader educational institution. We are starting with one live program, the AI-Augmented Full-Stack Developer Course, with more learning pathways planned as the institution grows.",
      },
      {
        q: "Who is Summate for?",
        a: "Graduates and early-career learners looking for direction, working professionals who want to add new capabilities, and anyone changing course or returning to learning after a break.",
      },
      {
        q: "Where is Summate based?",
        a: "Summate Learning LLP is based in Palarivattom, Ernakulam, Kerala. Our programs are live online, so you can join from anywhere.",
      },
    ],
  },
  {
    title: "The course",
    items: [
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
        a: "Classes are led by the Summate Learning teaching and mentoring team. Faculty and mentor profiles will be published on the Faculty & Mentors page once finalised.",
      },
      {
        q: "Will I receive a certificate?",
        a: "Yes. Learners who successfully complete the program will receive a Summate Learning certificate.",
      },
      {
        q: "Will there be placement support?",
        a: "Placement support is part of the program offering. The exact scope, process and terms will be published once finalised.",
      },
    ],
  },
  {
    title: "Summate Circle",
    items: [
      {
        q: "What is the Summate Circle?",
        a: "A community of students, graduates, mentors and professionals who come together to learn, share ideas, build things and help each other move forward, during and after a course.",
      },
      {
        q: "Who can join?",
        a: "The Circle is open to Summate learners and graduates, along with the mentors and professionals who work with them. The course is how most people get in.",
      },
      {
        q: "How big are the interest groups?",
        a: "The current plan is for small groups of around 6–10 people, so conversations stay meaningful.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        q: "Can I teach or mentor at Summate?",
        a: "Yes. We are always open to educators, researchers and professionals who enjoy working with students. Get in touch through the contact page and choose “Teach or mentor”.",
      },
      {
        q: "Are you hiring?",
        a: "We hire across faculty, counselling, content, marketing, technology, operations and campus ambassador roles. See the Careers page, or send us your profile.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * CONTACT
 * ------------------------------------------------------------------ */
export const contactTopics = [
  { value: "course", label: "A course or admissions" },
  { value: "course-updates", label: "Updates on upcoming courses" },
  { value: "circle", label: "Joining the Summate Circle" },
  { value: "teach", label: "Teach or mentor" },
  { value: "careers", label: "Careers at Summate" },
  { value: "partnership", label: "Hiring or partnerships" },
  { value: "other", label: "Something else" },
];
