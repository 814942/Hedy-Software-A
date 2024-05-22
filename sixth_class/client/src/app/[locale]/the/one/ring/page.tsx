import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";

export default function Ring() {
  const t = useTranslations('Index');

  return (
    <div className="...">
      <nav>
        <ul className="text-yellow">
          <li>
            {t("the")}
          </li>
          <li>
            {t("one")}
          </li>
          <li>
            <Link
              href="/the/one/ring/to"
              className="..."
            >
              {t("ring")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
