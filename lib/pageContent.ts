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
    slug: "devops-engineering",
    title: "DevOps Engineering",
    category: "Infrastructure",
    tagline:
      "Learn to build, ship and run software reliably with the tooling and practices modern engineering teams depend on.",
    duration: "12 weeks",
    format: "Live online",
    status: "soon",
    skills: ["Linux", "Git", "CI/CD", "Docker", "Kubernetes", "Cloud"],
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
];

/* ------------------------------------------------------------------ *
 * MANAGING DIRECTOR (served at /founder)
 * ------------------------------------------------------------------ */
export const founder = {
  name: "Ramesan P. L.",
  firstName: "Ramesan",
  role: "Managing Director, Summate Learning",
  image: "/founder.jpg",
  // Same portrait with the backdrop removed, for the dark hero.
  cutout: "/founder-cutout.webp",
  headline: "Three decades of teaching, curriculum work and academic leadership.",
  summary:
    "An experienced education professional with over 32 years of teaching across school and higher-level academic settings, in India and in Muscat, Oman.",
  highlights: [
    { title: "32+ years", body: "Teaching across school and higher-level settings" },
    { title: "Gurushrestha Award", body: "2024, for his contribution to education" },
    { title: "Chief Examiner", body: "ICSE board examinations" },
    { title: "Chief Editor", body: "ICSE and ISC Malayalam textbook committee" },
  ],
  profile: [
    "Ramesan P. L. is an experienced education professional with over 32 years of teaching experience across school and higher-level academic settings. His career spans classroom teaching, academic coordination, curriculum and textbook development, teacher training, educational content creation, and competitive examination coaching. He has worked across multiple Indian education streams, including ICSE, ISC, CBSE, HSC, and SSLC, and has international teaching experience in Muscat, Oman.",
    "A retired teacher of Loyola School, Thiruvananthapuram, Ramesan has contributed to academic development beyond the classroom. His responsibilities have included coordinating the ICSE and ISC Malayalam syllabus, serving on textbook committees as a coordinator and chief editor, working as a Chief Examiner in ICSE board examinations, and coordinating board examination preparation programmes.",
    "His professional journey reflects a longstanding commitment to education, academic standards, and the development of both teachers and students. Alongside his school teaching career, he has worked as an academic consultant, guest teacher, educational content writer, and tutor for Civil Services and Kerala Administrative Service (KAS) aspirants. He has also conducted motivational sessions for teachers and students and contributed to educational programmes through Doordarshan and Akashavani.",
    "As Managing Director of Summate Learning, Ramesan brings decades of experience in education and academic leadership to the organisation. His background provides a strong foundation for an educational approach that values subject knowledge, effective teaching, learner development, and the practical application of knowledge.",
  ],
  experience: [
    {
      title: "Academic Consultant, Guest Teacher and Educational Content Writer",
      period: "2018–Present",
      body: "Following his school teaching career, Ramesan continued contributing to education through academic consultancy, guest teaching, content development, and competitive examination coaching.",
      points: [
        "Serving as an academic consultant associated with the ICSE and ISC Council.",
        "Working as a guest teacher and educational content writer.",
        "Creating recorded Malayalam lessons for CBSE students through Kaumudy TV.",
        "Teaching and guiding candidates preparing for Civil Services and Kerala Administrative Service examinations.",
        "Conducting motivational sessions for teachers and students.",
      ],
    },
    {
      title: "Loyola School, Thiruvananthapuram",
      period: "2005–2017",
      body: "During his tenure at Loyola School, Ramesan contributed to teaching and academic coordination.",
      points: [
        "Coordinating the preparation of board examination classes.",
        "Supporting students preparing for major examinations.",
        "Serving as Staff Secretary.",
        "Coordinating youth festivals.",
        "Serving on the school magazine's editorial board.",
        "Convening the Malayalam Club.",
      ],
    },
    {
      title: "Indian School, Muscat, Oman",
      period: "2004–2005",
      body: "Ramesan gained international teaching experience at the Indian School in Muscat, Oman, broadening his professional exposure beyond the Indian education system.",
    },
    {
      title: "Saraswathi Vidhyalaya, Thiruvananthapuram",
      period: "2003–2004",
      body: "He continued his teaching career at Saraswathi Vidhyalaya, contributing to school-level education.",
    },
    {
      title: "St. Thomas Residential School, Thiruvananthapuram",
      period: "1991–2003",
      body: "Over more than a decade at St. Thomas Residential School, Ramesan developed extensive classroom teaching experience and worked with students in a structured school environment.",
    },
    {
      title: "Private Institute, Attingal",
      period: "1988–1991",
      body: "Ramesan began his listed professional teaching career at a private institute in Attingal, where he handled degree and postgraduate classes.",
    },
  ] as { title: string; period: string; body: string; points?: string[] }[],
  contributions: {
    intro:
      "Beyond classroom instruction, Ramesan has held responsibilities involving curriculum development, textbook preparation, examination assessment, and teacher development.",
    groups: [
      {
        title: "Curriculum and textbook development",
        points: [
          "Coordinator of the ICSE and ISC Malayalam syllabus.",
          "Coordinator and Chief Editor of the ICSE and ISC Malayalam textbook committee.",
        ],
      },
      {
        title: "Examination and academic coordination",
        points: [
          "Served as Chief Examiner in ICSE board examinations.",
          "Coordinated board examination preparation classes at Loyola School.",
        ],
      },
      {
        title: "Teacher development",
        points: [
          "Coordinated teacher training programmes.",
          "Conducted motivational sessions for teachers and students.",
        ],
      },
      {
        title: "Educational communication",
        points: [
          "Conducted programmes through Doordarshan and Akashavani.",
          "Contributed to recorded CBSE Malayalam lessons through Kaumudy TV.",
        ],
      },
    ],
    outro:
      "These responsibilities demonstrate his involvement in several aspects of education, from classroom teaching and assessment to curriculum development and professional learning.",
  },
  education: {
    items: ["M.A. in Malayalam", "B.Ed. in Malayalam", "State Eligibility Test (SET) – Malayalam"],
    note: "His academic qualifications, combined with extensive teaching and academic coordination experience, have supported his long-standing work in language education and curriculum development.",
  },
  awards: {
    main: {
      title: "Gurushrestha Award",
      year: "2024",
      body: "Ramesan received the Gurushrestha Award in 2024 in recognition of his contribution to education.",
    },
    others: [
      "Individual Sports Champion at his B.Ed. college affiliated with Calicut University.",
      "First prize in an extempore speech competition at an intercollegiate festival.",
      "First prize in an essay-writing competition at Calicut University.",
    ],
    note: "These achievements reflect interests and accomplishments extending beyond his professional teaching responsibilities.",
  },
  leadership: [
    "Education has been central to Ramesan's professional life for more than three decades. His experience across teaching, curriculum development, examination systems, teacher training, and educational media gives him a broad understanding of how learning is delivered and supported.",
    "As Managing Director of Summate Learning, he is part of the leadership guiding the organisation's educational direction and development. His background brings an established academic perspective to Summate's work in creating learning opportunities for students, graduates, and aspiring professionals.",
    "Summate aims to connect learning with practical application and continuous development. Ramesan's career in education provides valuable context for this mission, particularly in recognising the importance of strong foundations, effective instruction, and opportunities for learners to develop their abilities.",
  ],
  areas: [
    "Educational Leadership and Academic Coordination",
    "Teaching and Student Development",
    "Curriculum and Textbook Development",
    "Examination and Assessment Systems",
    "Teacher Training and Mentoring",
    "Educational Content Development",
    "Civil Services and KAS Coaching",
    "Educational Media and Communication",
  ],
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
  image?: string;
};

/* ------------------------------------------------------------------ *
 * LEADERSHIP TEAM (Managing Director and directors)
 * ------------------------------------------------------------------ */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** Optional portrait in /public, e.g. "/team/bibin.jpg". Falls back to initials. */
  image?: string;
  /** Optional separate, longer profile page, linked from the profile section. */
  href?: string;
  /** Hero headline on the dedicated profile page. */
  headline?: string;
  /** Four short facts shown in the strip under the hero on the dedicated profile page. */
  highlights?: { title: string; body: string }[];
  /** Public LinkedIn profile URL, shown on the profile section. */
  linkedin?: string;
  /** Short profile-card summary. */
  summary: string;
  bio: string[];
  areas: { title: string; items: string[] };
  beyond?: { title: string; body: string };
  /** Award shown as a highlighted tag beside the areas on /leadership. */
  award?: { title: string; year: string; body: string };
};

export const leadership = {
  title: "Leadership",
  lede: "Summate Learning brings together decades of classroom experience with people who have built companies, technology platforms and teams that work in the real world.",
  heading: "Meet the people behind Summate",
  members: [
    {
      slug: "ramesan-p-l",
      name: founder.name,
      role: "Managing Director",
      image: founder.image,
      href: "/founder",
      summary:
        "An education professional with over 32 years of teaching, curriculum development and academic leadership across ICSE, ISC, CBSE, HSC and SSLC, in India and in Muscat, Oman. He leads Summate's educational direction.",
      bio: [
        "Ramesan P. L. is an education professional with over 32 years of teaching experience across ICSE, ISC, CBSE, HSC and SSLC, in India and in Muscat, Oman. His career spans classroom teaching, academic coordination, curriculum and textbook development, and teacher training.",
        "A retired teacher of Loyola School, Thiruvananthapuram, he has coordinated the ICSE and ISC Malayalam syllabus, served as chief editor of its textbook committee and as a Chief Examiner in ICSE board examinations.",
        "As Managing Director of Summate Learning, he brings an established academic perspective to the organisation's educational direction, valuing strong foundations, effective teaching and the practical application of knowledge.",
      ],
      areas: {
        title: "Areas of experience",
        items: [
          "Educational Leadership and Academic Coordination",
          "Teaching and Student Development",
          "Curriculum and Textbook Development",
          "Examination and Assessment Systems",
          "Teacher Training and Mentoring",
        ],
      },
      award: founder.awards.main,
    },
    {
      slug: "bibin-kuruvilla",
      name: "Bibin Kuruvilla",
      role: "Director",
      image: "/team/bibin.jpg",
      linkedin: "https://www.linkedin.com/in/bibin-kuruvilla",
      href: "/leadership/bibin-kuruvilla",
      headline: "Two decades building the systems that power the internet.",
      highlights: [
        { title: "20+ years", body: "Building and scaling technology infrastructure" },
        { title: "Co-Founder & CTO", body: "Obsium" },
        { title: "Kubernetes and SRE", body: "Platform engineering and DevOps" },
        { title: "Cloud and AWS", body: "Transformation, automation and cost optimisation" },
      ],
      summary:
        "Technology professional and Co-Founder & CTO of Obsium, with 20+ years of experience in cloud infrastructure, Kubernetes, DevOps, and platform engineering. He brings a strong engineering perspective shaped by years of building and scaling reliable technology systems.",
      bio: [
        "Bibin Kuruvilla is a technology and infrastructure professional with over 20 years of experience building and scaling the systems that power the internet. He is the Co-Founder and Chief Technology Officer of Obsium, where he focuses on cloud infrastructure, Kubernetes platforms, DevOps, platform engineering, and Site Reliability Engineering (SRE).",
        "Throughout his career, Bibin has worked on cloud transformation, infrastructure automation, cost optimisation, and the development of highly available, reliable systems. His experience combines deep technical expertise with an understanding of what it takes to build and operate technology at scale.",
        "At Summate Learning, his association represents the value of connecting education with real-world technology experience. His professional journey reflects the importance of continuous learning, practical problem-solving, and building systems that work beyond theory.",
      ],
      areas: {
        title: "Areas of expertise",
        items: [
          "Cloud Infrastructure and AWS",
          "Kubernetes and Platform Engineering",
          "DevOps and Site Reliability Engineering",
          "Infrastructure Automation and Cost Optimisation",
          "Scalable, Highly Available Systems",
        ],
      },
    },
    {
      slug: "jyothis-joseph",
      name: "Jyothis Joseph",
      role: "Director",
      image: "/team/jyothis.jpg",
      linkedin: "https://www.linkedin.com/in/jyothisjoseph",
      href: "/leadership/jyothis-joseph",
      headline: "An entrepreneur who has built, scaled and sold technology companies.",
      highlights: [
        { title: "20+ years", body: "Across IT, operations, technology and sales" },
        { title: "Two companies founded", body: "Ideamine (2009) and Empressem (2014)" },
        { title: "Acquired in 2017", body: "Both by Chicago-based Netrix Global" },
        { title: "Building ellow.io", body: "A marketplace for remote technology talent" },
      ],
      summary:
        "A technology entrepreneur with 20+ years of industry experience, Jyothis has founded and built companies across cloud services and mobile applications, both of which were acquired by Netrix Global in 2017. He is currently building ellow.io, a talent marketplace connecting businesses with vetted remote technology professionals. He brings experience in entrepreneurship, technology, and business leadership.",
      bio: [
        "Jyothis Joseph is a technology entrepreneur with over 20 years of experience across IT, operations, technology, and sales. He has built and led global teams and founded two companies: Ideamine, a managed cloud services company established in 2009, and Empressem, a mobile applications company founded in 2014. Both companies were successfully acquired by Chicago-based Netrix Global in 2017.",
        "Jyothis is currently building ellow.io, a talent marketplace that connects companies with a vetted network of remote technology professionals. His work focuses on bringing together technology, talent, and innovation to help businesses grow and adapt to changing industry needs.",
        "He holds an engineering degree from Cochin University of Science and Technology and a Management Development Programme (MDP) qualification from IIM Calcutta. He is also associated with professional organisations including NASSCOM, TiE, GTech, and Rotary International.",
        "At Summate Learning, Jyothis brings the perspective of an entrepreneur who has built companies, led teams, and navigated business growth. His journey reflects the value of practical experience, innovation, and understanding how technology creates opportunities in the real world.",
      ],
      areas: {
        title: "Areas of expertise",
        items: [
          "Technology Entrepreneurship and Business Growth",
          "Global Team Leadership",
          "IT Operations and Technology Strategy",
          "Cloud Services and Mobile Applications",
          "Technology Talent and Innovation",
        ],
      },
      beyond: {
        title: "Beyond work",
        body: "A sports enthusiast and marathon runner, Jyothis has also completed an Ironman 70.3 triathlon, reflecting his commitment to discipline, endurance, and continuous improvement.",
      },
    },
    {
      slug: "shaun-xavier",
      name: "Shaun Xavier",
      role: "Director",
      image: "/team/shaun.jpg",
      linkedin: "https://www.linkedin.com/in/shaunxavier",
      href: "/leadership/shaun-xavier",
      headline: "Operational thinking for organisations that are growing fast.",
      highlights: [
        { title: "Startup operations", body: "Scaling teams in fast-paced environments" },
        { title: "Process improvement", body: "Helping teams work efficiently as they grow" },
        { title: "Strategic execution", body: "Turning plans into coordinated delivery" },
        { title: "Actor", body: "A passion for Malayalam cinema" },
      ],
      summary:
        "An operations-focused professional with experience in team scaling, process improvement, and business execution in startup environments. Shaun also pursues his passion for acting and Malayalam cinema, bringing together interests in business and the creative arts.",
      bio: [
        "Shaun Xavier is an operations-focused professional with experience in scaling teams, improving business processes, and supporting organisational growth in fast-paced startup environments. His strengths include operational coordination, strategic execution, and helping teams work efficiently as organisations grow.",
        "Alongside his professional interests in business and operations, Shaun has a passion for Malayalam cinema and acting, bringing together an interest in entrepreneurship and the creative industry.",
        "At Summate Learning, Shaun represents the value of strong operational thinking and effective execution in building a growing organisation. His experience aligns with the importance of coordination, adaptability, and creating processes that support sustainable growth.",
      ],
      areas: {
        title: "Areas of focus",
        items: [
          "Business Operations",
          "Process Improvement",
          "Team Coordination and Development",
          "Strategic Execution",
          "Organisational Growth",
        ],
      },
      beyond: {
        title: "Beyond business",
        body: "Shaun is also an actor with a passion for Malayalam cinema, reflecting his interest in both business and the creative arts.",
      },
    },
  ] as TeamMember[],
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
