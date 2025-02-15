"use client";

import { AnimatePresence, motion } from "framer-motion";
import Language from "@/components/ui/language";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function FrameTopbar({ children }: Props) {
  const t = useTranslations("TopBar");
  const texts = t.raw("texts");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [texts]);

  if (!texts || texts.length === 0) return null;

  return (
    <header className="bg-black text-white p-5 flex justify-center gap-x-48">
      <AnimatePresence mode="wait">
        <motion.h3
          key={index}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="w-2/3 text-center"
        >
          {texts[index].text}
          <button>
            <u className="ml-3 font-semibold">{texts[index].to}</u>
          </button>
        </motion.h3>
      </AnimatePresence>
      {children}
    </header>
  );
}
