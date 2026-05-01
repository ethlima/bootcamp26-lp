/**
 * English dictionary. Mirrors content.es.ts structure.
 * First-draft translation — review before publishing.
 *
 * Conventions:
 *   - "bootcamp", "dApp", "Smart Contracts", "Layer 2", "Web3",
 *     "Discord", "Stylus", "Solidity", "Rust" stay untranslated.
 *   - Dates expressed in en-US short form (May 30, Jul 4).
 */

export const ogLocale = "en_US";

export const site = {
  name: "Ethereum Lima Bootcamp 2026",
  shortName: "Bootcamp ETH Lima",
  url: "https://bootcamp.ethlima.org",
  description:
    "Intensive 6-week program to learn how to build on blockchain from scratch to complete dApps with Ethereum and Arbitrum Stylus.",
  applyUrl: "https://tally.so/r/pb07AP",
  programPdf: "/assets/ethlima-bootcamp-2026.pdf",
  contactEmail: "hola@ethlima.org",
} as const;

export const cohort = {
  label: "Cohort 2026",
  applicationsOpen: "applications open",
  startLabel: "May 30",
  endLabel: "Jul 4",
  startDate: "May 30",
  weeks: 6,
  weeksLabel: "weeks",
  format: "Online",
} as const;

export const ecosystem = {
  parent: { name: "Ethereum Lima", url: "https://ethlima.org" },
  education: { name: "Virtual Campus", url: "https://educacion.ethlima.org" },
  event: { name: "ETH Lima Day", url: "https://ethlimaday.org" },
} as const;

export const social = {
  telegram: "https://t.me/ethlima",
  x: "https://x.com/ethereumlima",
  linkedin: "https://www.linkedin.com/company/ethereum-lima",
  instagram: "https://www.instagram.com/ethereumlima",
} as const;

export const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Audience", href: "#audience" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "FAQ", href: "#faq" },
] as const;

export const ui = {
  apply: "Apply",
  applyNow: "Apply now",
  programPdf: "View program (PDF)",
  iHaveAQuestion: "I have a question",
  switchTo: "ES",
} as const;

export const hero = {
  headingLine1: "Ship your",
  headingLine2Pre: "first ",
  headingLine2Highlight: "dApp",
  headingLine3: "on Arbitrum.",
  description:
    "Intensive 6-week bootcamp for devs ready to ship their first dApp on Arbitrum with Stylus, Rust and Solidity.",
  llamaAlt: "Bootcamp Ethereum Lima — llama mascot",
  badgeLabel: "Next project",
  badgeProject: "dApp on Stylus",
} as const;

export const sections = {
  intro: {
    eyebrow: "Overview",
    headingPre: "Build and ",
    headingHighlight: "deploy",
    headingPost: " your first dApp on Arbitrum Stylus.",
    body1:
      "Practical bootcamp for devs ready to ship on Web3. You build and deploy a complete dApp on Arbitrum Stylus.",
    body2:
      "You work with the current Ethereum stack — Solidity, Rust, real tooling — focused on execution, not just theory.",
    statWeeks: "weeks",
    statModules: "modules",
    statDapp: "deployed dApp",
    statCommunity: "community",
  },
  howItWorks: {
    eyebrow: "How it works",
    headingLine1: "Live learning,",
    headingLine2Pre: "continuous ",
    headingLine2Highlight: "execution",
    headingLine2Post: ".",
    durationLabel: "Duration",
    formatLabel: "Format",
  },
  audience: {
    eyebrow: "Audience",
    heading: "Who is it for?",
    requirementsLabel: "Requirements:",
  },
  curriculum: {
    eyebrow: "Curriculum",
    headingLine1: "4 modules.",
    headingLine2Pre: "1 ",
    headingLine2Highlight: "deployed dApp",
    headingLine2Post: ".",
    body: "Each module builds on the previous one. You leave with real production code.",
    modulePrefix: "MODULE",
  },
  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you'll take away.",
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    headingPre: "Built with ",
    headingHighlight: "the ecosystem",
    headingPost: ".",
    body: "Collaboration with Web3 ecosystem communities and projects to enhance learning and connection.",
    sponsorLabel: "Main sponsor",
    alliesLabel: "Allies",
    partOf: "Part of the ecosystem",
  },
  process: {
    eyebrow: "Process",
    headingPre: "How you ",
    headingHighlight: "join",
    headingPost: ".",
  },
  faq: {
    eyebrow: "FAQ",
    headingPre: "Frequently ",
    headingHighlight: "asked questions",
    headingPost: ".",
  },
  finalCta: {
    headingPre: "Ready to ",
    headingHighlight: "build",
    headingPost: "?",
    body: "Join the bootcamp and start creating on Web3.",
    nextCohortLabel: "Next cohort:",
  },
} as const;

export const features = [
  {
    title: "Live classes",
    description:
      "Synchronous sessions during the week with ecosystem speakers.",
    icon: "video",
  },
  {
    title: "Hands-on exercises",
    description: "Every session includes applied work, not just theory.",
    icon: "code",
  },
  {
    title: "Progressive project",
    description: "You build a complete dApp that evolves week by week.",
    icon: "rocket",
  },
  {
    title: "Discord support",
    description: "Active community to solve doubts every day.",
    icon: "chat",
  },
  {
    title: "Campus + recordings",
    description:
      "Access to the Ethereum Lima virtual campus with all classes recorded.",
    icon: "book",
  },
] as const;

export const audience = {
  technical: {
    title: "Best fit",
    items: [
      "Web2 devs (JS, Python) jumping to Web3",
      "Devs with Solidity or Rust basics",
      "Students with coding experience",
    ],
  },
  nonTechnical: {
    title: "Also welcome",
    items: [
      "Product managers and designers with technical baseline",
      "Web3 founders and entrepreneurs",
      "Crypto community members ready to build",
    ],
  },
  requirements:
    "Programming experience in any language. Recommended: Web2 (JS/Python) or Solidity baseline — the Rust module has a learning curve.",
} as const;

export const modules = [
  {
    number: "01",
    title: "Blockchain & Projects",
    description: "Fundamentals, use cases and Web3 product design.",
    level: "Beginner",
    accent: { from: "#e64a30", to: "#f18a2e" },
  },
  {
    number: "02",
    title: "Solidity",
    description: "Smart contract development on Ethereum.",
    level: "Intermediate",
    accent: { from: "#f18a2e", to: "#3dbed5" },
  },
  {
    number: "03",
    title: "Rust",
    description: "Language fundamentals applied to blockchain.",
    level: "Intermediate",
    accent: { from: "#3dbed5", to: "#2ca89f" },
  },
  {
    number: "04",
    title: "Arbitrum Stylus",
    description: "Layer 2 deployment and full dApp construction.",
    level: "Advanced",
    accent: { from: "#3d43e0", to: "#c7f73a" },
  },
] as const;

export const outcomes = [
  "Functional dApp built by you",
  "Hands-on Ethereum experience",
  "Use of real Web3 tools",
  "Certificate of participation",
  "Solid foundation to keep building on Web3",
] as const;

export const sponsor = {
  name: "Arbitrum",
  url: "https://arbitrum.io",
  logo: "/assets/sponsors/arbitrum.svg",
} as const;

export const allies = [
  {
    name: "Quantum3 Labs",
    url: "https://www.quantum3labs.com/",
    logo: "/assets/sponsors/quantum3.svg",
    logoAlt: "Quantum3 Labs",
    showName: false,
    nameColor: null,
    nameFont: null,
    nameWeight: null,
    nameLetterSpacing: null,
  },
  {
    name: "Rust Peru",
    url: "https://www.rust.pe/",
    logo: "/assets/sponsors/rust-peru.png",
    logoAlt: "Rust Peru",
    showName: true,
    nameColor: "#0b0717",
    nameFont: "'Alfa Slab One', cursive",
    nameWeight: "400",
    nameLetterSpacing: null,
  },
] as const;

export const process = [
  {
    step: 1,
    title: "Apply",
    description: "Fill out the application form.",
  },
  {
    step: 2,
    title: "Review",
    description: "We review your profile and confirm your spot.",
  },
  {
    step: 3,
    title: "Program access",
    description: "You join the virtual campus and Discord.",
  },
  {
    step: 4,
    title: "Classes start",
    description: "May 30. Time to build.",
  },
] as const;

export const faqs = [
  {
    question: "Do I need prior experience?",
    answer:
      "Yes. We recommend programming experience in any language — ideally Web2 (JS/Python) or Solidity. The bootcamp is open to all, but keep in mind the Rust module has a learning curve if you don't have a coding baseline.",
  },
  {
    question: "Are classes live?",
    answer: "Yes, with recordings available.",
  },
  {
    question: "Is it a real project?",
    answer: "Yes, an Arbitrum Stylus dApp you'll build in module 4.",
  },
  {
    question: "Is there a certificate?",
    answer: "Yes, with at least 75% attendance at live sessions.",
  },
  {
    question: "What if I miss a class?",
    answer: "You can watch the recording. Every session tracks attendance.",
  },
] as const;

export const footer = {
  tagline: "Ethereum community of Lima since 2020.",
  ecosystemLabel: "Ecosystem",
  contactLabel: "Contact",
  copyrightSuffix: "Ethereum Lima. Building the Web3 ecosystem in Peru.",
  madeIn: "Made with",
  madeInSuffix: "in Lima by",
} as const;
