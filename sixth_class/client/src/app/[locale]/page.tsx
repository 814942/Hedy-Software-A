import { Link } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations('Index');

  return (
    <main id="main" className="">
      <div className="text-yellow text-xl font-bold">
        <Link
          href="/the"
          className="..."
        >
          {t("title")}
        </Link>
      </div>
    </main>
  )
}
