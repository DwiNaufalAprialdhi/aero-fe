"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "./useLang";

type LangContextType = {
  lang: "ID" | "EN";
  toggleLang: () => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const { lang, toggleLang } = useLang();

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLangContext() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLangContext must be used inside LangProvider");
  }
  return context;
}
