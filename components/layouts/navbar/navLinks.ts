import { label } from "framer-motion/client";

type NavLinks = {
  label: string;
  path: "/" | "/about" | "/contact";
}[];

export const navLinks: NavLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
