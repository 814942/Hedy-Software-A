import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { type Locale, locales } from './i18n.config';

export default getRequestConfig(async ({ locale }) => {
  console.log("🚀 ~ getRequestConfig ~ locale:", locale)
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
