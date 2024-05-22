import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";

export default function One() {
  const t = useTranslations('Index');

  return (
    <div className="...">
      <nav>
        <ul className="text-yellow">
          <li>
            {t("the")}
          </li>
          <li>
            <Link
              href="/the/one/ring"
              className="..."
            >
              {t("one")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
