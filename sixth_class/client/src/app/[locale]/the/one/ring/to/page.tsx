import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";

export default function To() {
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
            {t("ring")}
          </li>
          <li>
            <Link
              href="/the/one/ring/to/rule"
              className="..."
            >
              {t("to")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
