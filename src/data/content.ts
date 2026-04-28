/**
 * Single source of truth para todo el copy del sitio.
 * Editar aquí actualiza todos los componentes.
 */

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
  startLabel: "23 mayo",
  endLabel: "27 junio",
  startDate: "23 de mayo",
  weeks: 6,
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
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "¿Para quién?", href: "#para-quien" },
  { label: "Currículum", href: "#curriculum" },
  { label: "FAQ", href: "#faq" },
] as const;

export const features = [
  {
    title: "Clases en vivo",
    description: "Sesiones sincrónicas durante la semana con speakers del ecosistema.",
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
    description: "Acceso al campus virtual de Ethereum Lima con todas las clases grabadas.",
    icon: "book",
  },
] as const;

export const audience = {
  technical: {
    title: "Perfiles técnicos",
    items: [
      "Developers (JavaScript, Python, otros)",
      "Devs Web2 migrando a Web3",
      "Estudiantes de software / TI",
    ],
  },
  nonTechnical: {
    title: "Perfiles no técnicos",
    items: [
      "Product managers y diseñadores",
      "Fundadores y emprendedores",
      "Miembros de comunidades crypto",
    ],
  },
  requirements: "Bases digitales y/o de programación.",
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
} as const;

export const allies = [
  { name: "Quantum", url: "#" },
  { name: "Rust Perú", url: "#" },
] as const;

export const process = [
  { step: 1, title: "Aplicar", description: "Completa el formulario de aplicación." },
  { step: 2, title: "Evaluación", description: "Revisamos tu perfil y confirmamos tu lugar." },
  { step: 3, title: "Acceso al programa", description: "Entras al campus virtual y al Discord." },
  { step: 4, title: "Inicio de clases", description: "23 de mayo. A construir." },
] as const;

export const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "Se recomiendan bases en lenguajes de programación como JavaScript o Solidity.",
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
