'use client';

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from '@/i18n.config';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  // `pathname` will contain the current
  // route without the locale e.g. `/about`...
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className='m-12 items-center justify-center flex'>
      <Globe
        className='m-2 hover:text-yellow'
        width={50}
        height={50}
      />
      <select
        value={locale}
        onChange={changeLocale}
        className="text-black rounded-lg p-2 bg-yellow text-white">
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
