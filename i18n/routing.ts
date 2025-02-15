import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "id"],
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      id: "/tentang-kami",
    },
    "/contact": {
      en: "/contact",
      id: "/kontak",
    },
    "/sign-in": {
      en: "/signin",
      id: "/login-akun",
    },
    "/sign-up": {
      en: "/signup",
      id: "/daftar-akun",
    },
  },
  defaultLocale: "id",
  localeDetection: true,
});
export type Locale = (typeof routing)["locales"][number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
