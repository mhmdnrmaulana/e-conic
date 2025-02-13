import { li, nav } from "framer-motion/client";
import { useTranslations } from "next-intl";
import { navLinks } from "./navLinks";
import { Link } from "@/i18n/routing";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <nav className="fixed flex items-center gap-10 justify-around p-5 w-full">
      <h1>{t("title")}</h1>
      <ul className="flex items-center gap-5">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <form action="" className="relative max-w-max">
          <input
            type="search"
            id="search-input"
            name="search-input"
            className="px-3 py-1 rounded bg-gray-200 placeholder:text-black placeholder:text-sm"
            placeholder={t("placeholder")}
          />
          <label htmlFor="search-input" className="absolute right-3 top-1">
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
