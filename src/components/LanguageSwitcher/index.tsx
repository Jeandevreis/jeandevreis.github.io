import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export default function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language || "pt-BR";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDisplayLanguage = () => {
    if (currentLanguage.includes("en")) return "EN-US";
    if (currentLanguage.includes("es")) return "ES-ES";
    return "PT-BR";
  };

  return (
    <div className="relative flex justify-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-3 py-2 text-sm font-medium text-white
          transition-colors duration-200 shadow-sm hover:text-zinc-300
        "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>

        <span className={`${mobile ? "text-lg" : ""}`}>{getDisplayLanguage()}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute mt-10 w-40 bg-white dark:bg-zinc-900 rounded-md shadow-lg border border-zinc-200 dark:border-zinc-800
          z-50 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2
          ${mobile ? "left-1/2 -translate-x-1/2 origin-top" : "right-0 origin-top-right"}
        `}>
          {["pt-BR", "en-US", "es-ES"].map((lang) => {
            const labels: Record<string, string> = { "pt-BR": "Português (BR)", "en-US": "English (US)", "es-ES": "Español (ES)" };
            const isActive = currentLanguage.includes(lang.split('-')[0]);

            return (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`
                  w-full text-left px-4 py-2 text-sm transition-colors duration-150
                  ${isActive
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"}
                `}
              >
                {labels[lang]}
              </button>
            )
          })}
        </div>
      )}
    </div>
  );
}
