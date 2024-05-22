import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../_components/LocaleSwitcher";

export default function Header() {
  const t = useTranslations('Index');
  // Retrieves the active locale.
  const locale = useLocale() as Locale;

  return (
    <header className="...">
      <LocaleSwitcher locale={locale} />
    </header>
  )
}
