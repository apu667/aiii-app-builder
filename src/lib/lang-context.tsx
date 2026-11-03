"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "bn";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, bn: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = (en: string, bn: string) => {
    return lang === "en" ? en : bn;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
