/**
 * i18n helper. Devuelve el diccionario completo según el locale activo.
 *
 * Uso en componentes Astro:
 *
 *   const t = getContent(Astro.currentLocale);
 *   {t.hero.headingLine1}
 */

import * as es from "@/data/content.es";
import * as en from "@/data/content.en";

export type Locale = "es" | "en";

export const LOCALES: readonly Locale[] = ["es", "en"] as const;
export const DEFAULT_LOCALE: Locale = "es";

const dictionaries = { es, en };

export function isLocale(value: string | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function getContent(lang: string | undefined) {
  return isLocale(lang) ? dictionaries[lang] : dictionaries[DEFAULT_LOCALE];
}

export function getOtherLocale(lang: Locale): Locale {
  return lang === "es" ? "en" : "es";
}
