"use client";

import Image from "next/image";
import { useLangContext } from "../hooks/LangContext";

export default function LangSwitcher() {
      const { lang, toggleLang } = useLangContext();

      return (
            <button
                  onClick={toggleLang}
                  className="relative w-[66px] h-8 flex-shrink-0 flex items-center rounded-full border border-gray-300 bg-white"
            >
                  {/* Bullet */}
                  <span
                        className={`absolute top-1/2 left-0.5 -translate-y-1/2 w-7 h-7 bg-gray-800 rounded-full shadow-md transition-transform duration-300 ${lang === "EN" ? "translate-x-8" : "translate-x-0"
                              }`}
                  />

                  {/* Flag ID */}
                  <div
                        className={`absolute left-1.5 text-base pointer-events-none transition-all duration-300 w-5 h-5 overflow-hidden flex items-center justify-center ${lang === "ID" ? "opacity-100" : "opacity-0"
                              }`}
                  >
                        <Image src='/assets/images/id.png' alt="id" width={25} height={25} className="w-full h-full rounded-full object-cover" />
                  </div>

                  {/* Flag EN */}
                  <div
                        className={`absolute right-1.5 text-base pointer-events-none transition-all duration-300 w-5 h-5 overflow-hidden flex items-center justify-center ${lang === "EN" ? "opacity-100" : "opacity-0"
                              }`}
                  >
                        <Image src='/assets/images/uk.jpeg' alt="id" width={25} height={25} className="w-full h-full rounded-full object-cover" />
                  </div>
            </button>
      );
}
