/**
 * Brand colors como hex literals para uso en TS/JSX (inline styles,
 * gradient strings, alpha appending tipo `${color}22`).
 *
 * Duplican intencionalmente los CSS custom properties definidos en
 * `src/styles/global.css` (@theme). Mantener ambos en sync si cambian.
 */

export const brandColors = {
  coral: "#e64a30",
  orange: "#f18a2e",
  cyan: "#3dbed5",
  teal: "#2ca89f",
  ethBlue: "#1b5ba8",
  bootcampBlue: "#3d43e0",
  bootcampLime: "#c7f73a",
  bootcampPurple: "#7752e0",
  ink: "#0b0717",
  white: "#ffffff",
} as const;

/**
 * Rotación de acentos usada en grids/listas para variar color por item.
 * Orden inspirado en el gradiente del logo (coral → naranja → cian → teal → lime).
 */
export const accentPalette = [
  brandColors.coral,
  brandColors.orange,
  brandColors.cyan,
  brandColors.teal,
  brandColors.bootcampLime,
] as const;

/**
 * Colores por paso del proceso de incorporación (4 pasos).
 * `bg` es el fondo del bubble, `text` el contraste del número.
 */
export const stepColors = [
  { bg: brandColors.coral, text: brandColors.white },
  { bg: brandColors.cyan, text: brandColors.ink },
  { bg: brandColors.teal, text: brandColors.white },
  { bg: brandColors.bootcampLime, text: brandColors.ink },
] as const;
