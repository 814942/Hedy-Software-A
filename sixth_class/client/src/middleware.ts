import createMiddleware from 'next-intl/middleware';
import { locales } from "./i18n.config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en-us',
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en-us|es-ar|fr|de)/:path*'],
};
