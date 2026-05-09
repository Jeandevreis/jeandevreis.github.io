import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  mobile?: boolean;
}

// URLs para bandeiras circulares (você pode baixar e usar localmente se preferir)
const FLAGS: Record<string, string> = {
  "pt-BR": "menu-bandeira-br.jpg",
  "en-US": "menu-bandeira-en.png",
  "es-ES": "menu-bandeira-es.jpg",
};

const LABELS: Record<string, string> = {
  "pt-BR": "PT",
  "en-US": "EN",
  "es-ES": "ES",
};

export default function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  // Garante que o idioma atual mapeia corretamente para as chaves disponíveis
  const currentLanguage = Object.keys(FLAGS).find(key =>
    i18n.language?.includes(key.split('-')[0])
  ) || "pt-BR";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Exibe no dropdown apenas os idiomas que NÃO estão selecionados atualmente
  const availableLanguages = Object.keys(FLAGS).filter(lang => lang !== currentLanguage);

  return (
    <div className="relative flex justify-center" ref={dropdownRef}>
      {/* Botão Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-3 py-1.5 rounded-full
          bg-[#024049] border border-white/50 
          transition-colors duration-200 shadow-sm hover:bg-[#03515c]
        "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src={FLAGS[currentLanguage]}
          alt="Idioma Selecionado"
          className={`rounded-full object-cover shadow-sm ${mobile ? 'w-6 h-6' : 'w-5 h-5'}`}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`
          absolute mt-12 w-27.5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
          z-50 py-3 animate-in fade-in zoom-in-95
          ${mobile ? "left-1/2 -translate-x-1/2" : "right-1/2 translate-x-1/2"}
        `}>
          {/* Seta azul apontando para cima */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00c3ff] rotate-45 rounded-sm -z-10"></div>

          <div className="flex flex-col gap-1">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className="
                  flex items-center justify-center gap-3 w-full px-4 py-2 
                  hover:bg-zinc-50 transition-colors
                "
              >
                <img
                  src={FLAGS[lang]}
                  alt={LABELS[lang]}
                  className="w-6 h-6 rounded-full object-cover shadow-sm"
                />
                <span className="text-[#1e293b] font-medium text-sm">
                  {LABELS[lang]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}