"use client";

import { useState, useEffect } from "react";

export function useLang() {
  const [lang, setLang] = useState<"ID" | "EN">("EN"); // default EN

  // ambil value awal dari localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as "ID" | "EN" | null;
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  // simpan ke localStorage setiap kali lang berubah
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  return { lang, toggleLang };
}
