"use client";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

type Props = {
  devaultValue: string;
  label: string;
};
export default function Select({ devaultValue, label }: Props) {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChanges(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace({ pathname }, { locale: nextLocale as Locale });
  }

  return (
    <select
      value={devaultValue}
      aria-label={label}
      onChange={onSelectChanges}
      className="bg-transparent border-none ring-o ring-offset-0 w-20"
    >
      {routing.locales.map((locale) => (
        <option value={locale} key={locale} className="text-black">
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
