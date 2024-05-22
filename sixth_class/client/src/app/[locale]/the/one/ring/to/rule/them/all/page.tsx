import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function All() {
  const t = useTranslations('Index');

  return (
    <div className="...">
      <nav>
        <ul className="text-yellow">
          <li className="m-2">
            {t("the")}
          </li>
          <li className="m-2">
            {t("one")}
          </li>
          <li className="m-2">
            {t("ring")}
          </li>
          <li className="m-2">
            {t("to")}
          </li>
          <li className="m-2">
            {t("rule")}
          </li>
          <li className="m-2">
            {t("them")}
          </li>
          <li className="m-2">
            {t("all")}
          </li>
          <li className="flex justify-center items-center m-8">
            <Link href="/">
              <Image
                src="/the_one.png"
                width={100}
                height={100}
                alt="the_one"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
