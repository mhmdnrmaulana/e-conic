import { useTranslations } from "next-intl";
import { navLinks } from "./navLinks";
import { Link } from "@/i18n/routing";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <nav className="fixed flex items-center gap-10 justify-around p-5 w-full">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <ul className="flex items-center gap-5">
        {navLinks.map((link) => (
          <li key={link.label} className="font-semibold">
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <form action="" className="flex items-center rounded bg-gray-200 p-1">
          <input
            type="search"
            id="search-input"
            name="search-input"
            className="px-2 py-1 rounded bg-gray-200 placeholder:text-black placeholder:text-xsc text-xs w-48"
            placeholder={t("placeholder")}
          />
          <label htmlFor="search-input" className="">
            <CiSearch size={20} />
          </label>
        </form>
        <button>
          <FaRegHeart size={24} />
        </button>
        <button>
          <GrCart size={24} />
        </button>
      </div>
    </nav>
  );
}
