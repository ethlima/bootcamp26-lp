/**
 * Diccionario en español. Estructura espejo a content.en.ts
 * — toda string visible al usuario vive aquí.
 */

export const ogLocale = "es_PE";

export const site = {
  name: "Ethereum Lima Bootcamp 2026",
  shortName: "Bootcamp ETH Lima",
  url: "https://bootcamp.ethlima.org",
  description:
    "Programa intensivo de 6 semanas para aprender a construir en blockchain desde cero hasta dApps completas con Ethereum y Arbitrum Stylus.",
  applyUrl: "https://tally.so/r/pb07AP",
  programPdf: "/assets/ethlima-bootcamp-2026.pdf",
  contactEmail: "hola@ethlima.org",
} as const;

export const cohort = {
  label: "Cohorte 2026",
  applicationsOpen: "aplicaciones abiertas",
  startLabel: "30 mayo",
  endLabel: "4 julio",
  startDate: "30 de mayo",
  weeks: 6,
  weeksLabel: "semanas",
  format: "Online",
} as const;

export const ecosystem = {
  parent: { name: "Ethereum Lima", url: "https://ethlima.org" },
  education: { name: "Campus virtual", url: "https://educacion.ethlima.org" },
  event: { name: "ETH Lima Day", url: "https://ethlimaday.org" },
} as const;

export const social = {
  telegram: "https://t.me/ethlima",
  x: "https://x.com/ethereumlima",
  linkedin: "https://www.linkedin.com/company/ethereum-lima",
  instagram: "https://www.instagram.com/ethereumlima",
} as const;

export const navLinks = [
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "¿Para quién?", href: "#audience" },
  { label: "Currículum", href: "#curriculum" },
  { label: "FAQ", href: "#faq" },
] as const;

export const ui = {
  apply: "Aplicar",
  applyNow: "Aplicar ahora",
  programPdf: "Ver programa (PDF)",
  iHaveAQuestion: "Tengo una pregunta",
  switchTo: "EN",
} as const;

export const hero = {
  headingLine1: "Shipea tu",
  headingLine2Pre: "primera ",
  headingLine2Highlight: "dApp",
  headingLine3: "en Arbitrum.",
  description:
    "Bootcamp intensivo de 6 semanas para devs que quieren shipear su primera dApp en Arbitrum con Stylus, Rust y Solidity.",
  llamaAlt: "Bootcamp Ethereum Lima — llama mascota",
  badgeLabel: "Próximo proyecto",
  badgeProject: "dApp en Stylus",
} as const;

export const sections = {
  intro: {
    eyebrow: "Descripción general",
    headingPre: "Construye y ",
    headingHighlight: "deploya",
    headingPost: " tu primera dApp en Arbitrum Stylus.",
    body1:
      "Bootcamp práctico para devs que quieren shipear en Web3. Construyes y deployas una dApp completa en Arbitrum Stylus.",
    body2:
      "Trabajas con el stack actual del ecosistema Ethereum — Solidity, Rust, herramientas reales — con foco en ejecución y no solo teoría.",
    statWeeks: "semanas",
    statModules: "módulos",
    statDapp: "dApp deployada",
    statCommunity: "comunidad",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    headingLine1: "Aprendizaje en vivo,",
    headingLine2Pre: "ejecución ",
    headingLine2Highlight: "continua",
    headingLine2Post: ".",
    durationLabel: "Duración",
    formatLabel: "Formato",
  },
  audience: {
    eyebrow: "Audiencia",
    heading: "¿Para quién es?",
    requirementsLabel: "Requisitos:",
  },
  curriculum: {
    eyebrow: "Currículum",
    headingLine1: "4 módulos.",
    headingLine2Pre: "1 ",
    headingLine2Highlight: "dApp deployada",
    headingLine2Post: ".",
    body: "Cada módulo construye sobre el anterior. Sales con código real en producción.",
    modulePrefix: "MÓDULO",
  },
  outcomes: {
    eyebrow: "Resultados",
    heading: "Qué te llevas al terminar.",
  },
  ecosystem: {
    eyebrow: "Ecosistema",
    headingPre: "Construido con ",
    headingHighlight: "el ecosistema",
    headingPost: ".",
    body: "Colaboración con comunidades y proyectos del ecosistema Web3 para potenciar aprendizaje y conexión.",
    sponsorLabel: "Sponsor principal",
    alliesLabel: "Aliados",
    partOf: "Parte del ecosistema",
  },
  process: {
    eyebrow: "Proceso",
    headingPre: "Cómo te ",
    headingHighlight: "incorporas",
    headingPost: ".",
  },
  faq: {
    eyebrow: "FAQ",
    headingPre: "Preguntas ",
    headingHighlight: "frecuentes",
    headingPost: ".",
  },
  finalCta: {
    headingPre: "¿Listo para ",
    headingHighlight: "construir",
    headingPost: "?",
    body: "Únete al bootcamp y comienza a crear en Web3.",
    nextCohortLabel: "Próxima cohorte:",
  },
} as const;

export const features = [
  {
    title: "Clases en vivo",
    description:
      "Sesiones sincrónicas durante la semana con speakers del ecosistema.",
    icon: "video",
  },
  {
    title: "Ejercicios prácticos",
    description: "Cada sesión incluye trabajo aplicado, no solo teoría.",
    icon: "code",
  },
  {
    title: "Proyecto progresivo",
    description: "Construyes una dApp completa que evoluciona semana a semana.",
    icon: "rocket",
  },
  {
    title: "Soporte en Discord",
    description: "Comunidad activa para resolver dudas todos los días.",
    icon: "chat",
  },
  {
    title: "Campus + grabaciones",
    description:
      "Acceso al campus virtual de Ethereum Lima con todas las clases grabadas.",
    icon: "book",
  },
] as const;

export const audience = {
  technical: {
    title: "Mejor fit",
    items: [
      "Devs Web2 (JS, Python) saltando a Web3",
      "Devs con base de Solidity o Rust",
      "Estudiantes con experiencia de código",
    ],
  },
  nonTechnical: {
    title: "También bienvenidos",
    items: [
      "Product managers y diseñadores con base técnica",
      "Fundadores y emprendedores Web3",
      "Miembros de comunidades crypto que quieren construir",
    ],
  },
  requirements:
    "Experiencia de programación en cualquier lenguaje. Recomendado: base en Web2 (JS/Python) o Solidity — el módulo de Rust tiene curva.",
} as const;

export const modules = [
  {
    number: "01",
    title: "Blockchain y Proyectos",
    description: "Fundamentos, casos de uso y diseño de productos Web3.",
    level: "Principiante",
    accent: { from: "#e64a30", to: "#f18a2e" },
  },
  {
    number: "02",
    title: "Solidity",
    description: "Desarrollo de smart contracts en Ethereum.",
    level: "Intermedio",
    accent: { from: "#f18a2e", to: "#3dbed5" },
  },
  {
    number: "03",
    title: "Rust",
    description: "Bases del lenguaje aplicadas a blockchain.",
    level: "Intermedio",
    accent: { from: "#3dbed5", to: "#2ca89f" },
  },
  {
    number: "04",
    title: "Arbitrum Stylus",
    description: "Deploy en Layer 2 y construcción de dApps completas.",
    level: "Avanzado",
    accent: { from: "#3d43e0", to: "#c7f73a" },
  },
] as const;

export const outcomes = [
  "dApp funcional desarrollada por ti",
  "Experiencia práctica en Ethereum",
  "Uso de herramientas reales de Web3",
  "Certificado de participación",
  "Base sólida para seguir construyendo en Web3",
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
    name: "Rust Perú",
    url: "https://www.rust.pe/",
    logo: "/assets/sponsors/rust-peru.png",
    logoAlt: "Rust Perú",
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
    title: "Aplicar",
    description: "Completa el formulario de aplicación.",
  },
  {
    step: 2,
    title: "Evaluación",
    description: "Revisamos tu perfil y confirmamos tu lugar.",
  },
  {
    step: 3,
    title: "Acceso al programa",
    description: "Entras al campus virtual y al Discord.",
  },
  {
    step: 4,
    title: "Inicio de clases",
    description: "30 de mayo. A construir.",
  },
] as const;

export const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "Sí. Recomendamos experiencia de programación en cualquier lenguaje — preferible Web2 (JS/Python) o Solidity. Es abierto a todos, pero ten en cuenta que el módulo de Rust tiene curva si no tienes base de código.",
  },
  {
    question: "¿Las clases son en vivo?",
    answer: "Sí, con acceso a grabaciones.",
  },
  {
    question: "¿Se construye un proyecto real?",
    answer:
      "Sí, una dApp en Arbitrum Stylus que desarrollarás en el módulo 4.",
  },
  {
    question: "¿Hay certificado?",
    answer: "Sí, con al menos 75% de asistencia a las sesiones en vivo.",
  },
  {
    question: "¿Qué pasa si falto a una clase?",
    answer: "Puedes verla grabada. Cada sesión registra asistencia.",
  },
] as const;

export const footer = {
  tagline: "Comunidad Ethereum de Lima desde 2020.",
  ecosystemLabel: "Ecosistema",
  contactLabel: "Contacto",
  copyrightSuffix: "Ethereum Lima. Construyendo el ecosistema Web3 en Perú.",
  madeIn: "Hecho con",
  madeInSuffix: "en Lima por",
  privacyLabel: "Política de Privacidad",
} as const;
