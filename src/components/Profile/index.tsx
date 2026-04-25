import { useTranslation } from "react-i18next";
import { calculateAge } from "@/helpers/calculateAge";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div
      className="
        relative w-full md:w-4/12 bg-white dark:bg-zinc-950 rounded-2xl shadow-sm 
        border border-zinc-200 dark:border-zinc-800 
        mt-24 md:mt-0 flex flex-col items-center px-6 pb-8 pt-24
        transition-colors duration-300
      "
    >
      <div className="
          absolute -top-[24%] left-1/2 -translate-x-1/2 
          w-[50%] aspect-square rounded-full 
          border-4 border-white dark:border-zinc-950 shadow-md bg-zinc-100 dark:bg-zinc-900 overflow-hidden
          transition-colors duration-300
        "
      >
        <img
          src="https://github.com/willianddaniel.png"
          alt="Willian D. Daniel"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-bold text-xl text-zinc-900 dark:text-white transition-colors duration-300">
        {t("about.name", { defaultValue: "Willian D. Daniel" })}
      </h3>

      <p className="flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full mb-8 text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
        <img src="/brazil-country-flag.png" alt="Brazil Flag" className="w-6 h-4 font-italic" />
        {t("about.nacionality")}
      </p>

      <div className="w-full flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">

        <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800/60 pb-3 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-900 dark:text-zinc-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">{t("about.labels.age")}</span>
          </div>
          <span>{t("about.age", { year: calculateAge(1992, 1, 22) })}</span>
        </div>

        <div className="flex justify-between items-start border-b border-zinc-100 dark:border-zinc-800/60 pb-3 text-right transition-colors duration-300">
          <div className="flex items-center gap-2 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-900 dark:text-zinc-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">{t("about.labels.location")}</span>
          </div>
          <span className="max-w-[60%] mt-0.5">{t("about.location")}</span>
        </div>

        <div className="flex flex-col gap-1 pt-1">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-900 dark:text-zinc-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
            </svg>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">{t("about.labels.cursing")}</span>
          </div>
          <span className="text-zinc-500 dark:text-zinc-400 ml-6 transition-colors duration-300">{t("about.university")}</span>
        </div>

      </div>
    </div>
  );
}
