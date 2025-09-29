"use client";

import { useLangContext } from "../hooks/LangContext";


export default function LangSwitcher() {
      const { lang, toggleLang } = useLangContext();

      return (
            <button
                  onClick={toggleLang}
                  className="relative w-16 h-8 flex items-center rounded-full border border-gray-300 bg-white transition"
            >
                  <span
                        className={`absolute w-7 h-7 bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${lang === "ID" ? "translate-x-0 ml-0.5" : "translate-x-[34px] -ml-0.5"
                              }`}
                  />
                  <span
                        className={`absolute left-2 text-xs font-semibold pointer-events-none transition-colors duration-300 ${lang === "ID" ? "text-white" : "text-slate-700"
                              }`}
                  >
                        ID
                  </span>
                  <span
                        className={`absolute right-2 text-xs font-semibold pointer-events-none transition-colors duration-300 ${lang === "EN" ? "text-white" : "text-slate-700"
                              }`}
                  >
                        EN
                  </span>
            </button>
      );
}
