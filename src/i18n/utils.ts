import { en } from "./en";
import { es } from "./es";
import type { TranslationKeys } from "./en";

export type Lang = "en" | "es";

const translations: Record<Lang, TranslationKeys> = { en, es };

export function getLang(url: URL, base: string): Lang {
  const path = url.pathname.replace(base, "");
  if (path.startsWith("es/") || path === "es") return "es";
  return "en";
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternatePath(url: URL, base: string): string {
  const path = url.pathname.replace(base, "");
  if (path.startsWith("es/") || path === "es") {
    const withoutEs = path.replace(/^es\/?/, "") || "";
    return `${base}${withoutEs}`;
  }
  return `${base}es/${path}`;
}