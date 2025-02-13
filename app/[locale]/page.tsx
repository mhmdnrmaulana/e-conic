import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="mt-28">
      <h1>{t("title")}</h1>
      <Link href={{ pathname: "/about" }}>{t("about")}</Link>
    </div>
  );
}
