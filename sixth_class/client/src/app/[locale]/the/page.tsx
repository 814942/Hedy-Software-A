import { Link } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";

export default function The() {
  const t = useTranslations('Index');

  return (
    <div id="the" className="...">
      <nav>
        <ul className="text-yellow">
          <li>
            <Link
              href="/the/one"
              className="..."
            >
              {t("the")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
