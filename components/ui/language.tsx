import { Link, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Select from "./select";

export default function Language() {
  const locale = useLocale();
  return (
    <div>
      <Select devaultValue={locale} label="Language" />
    </div>
  );
}
