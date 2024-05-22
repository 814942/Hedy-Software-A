import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "es-ar", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = {
  "en-us": "English",
  "es-ar": "Español",
  "fr": "Française",
  "de": "Deutsch"
};
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });